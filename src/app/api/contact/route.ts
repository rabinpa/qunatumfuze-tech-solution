import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getDb } from '@/lib/db';
import { inquiries } from '@/db/schema';
import { contactSchema } from '@/lib/validation';
import { checkSpam, verifyTurnstile } from '@/lib/spam-protection';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting (5 submissions per hour per IP)
    const ip = getClientIp(request.headers);
    const { allowed, resetAt } = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': Math.ceil((resetAt - Date.now()) / 1000).toString() },
        }
      );
    }

    // 2. Parse and validate request body
    const body = await request.json();
    const data = contactSchema.safeParse(body);

    if (!data.success) {
      return NextResponse.json(
        { error: data.error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      );
    }

    const formData = data.data;

    // 3. Spam checks (honeypot + timing)
    const spamCheck = checkSpam({
      honeypot: formData.honeypot,
      formStartedAt: formData.formStartedAt,
    });

    if (spamCheck.isSpam) {
      // Return success to avoid tipping off bots, but don't process
      console.warn(`Spam submission blocked (${spamCheck.reason}) from ${ip}`);
      return NextResponse.json({ success: true });
    }

    // 4. Turnstile verification (skipped in dev when not configured)
    const turnstileValid = await verifyTurnstile(formData.turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Security verification failed' }, { status: 400 });
    }

    // 5. Insert into database (record preserved even if email fails)
    const db = getDb();
    const [inserted] = await db
      .insert(inquiries)
      .values({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        projectType: formData.projectType,
        budgetRange: formData.budgetRange || null,
        timeline: formData.timeline || null,
        description: formData.description,
        ipAddress: ip,
        userAgent: request.headers.get('user-agent') || null,
      })
      .returning({ id: inquiries.id });

    // 6. Send emails (failures are non-blocking — DB record is already saved)
    await sendEmails(formData, request);

    return NextResponse.json({ success: true, id: inserted?.id });
  } catch (error) {
    console.error('Contact submission error:', error);

    if (error instanceof Error && error.message.includes('DATABASE_URL')) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

/** Escape user-provided content to prevent HTML injection in emails */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Send confirmation and notification emails via Resend.
 * Failures are caught and logged — the DB record is preserved.
 */
async function sendEmails(
  formData: {
    name: string;
    email: string;
    company?: string;
    projectType: string;
    budgetRange?: string;
    timeline?: string;
    description: string;
  },
  request: NextRequest
): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) return; // Email not configured (dev mode)

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://quantumfuze.com';
  const fromEmail = process.env.FROM_EMAIL || 'noreply@quantumfuze.com';
  const notificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL || process.env.NOTIFICATION_EMAIL;

  // Human-readable labels
  const projectTypeLabels: Record<string, string> = {
    ai_automation: 'AI & Automation',
    software_development: 'Software Development',
    product_design: 'Product Design',
    business_solutions: 'Business Solutions',
    it_consulting: 'IT Consulting',
    multiple: 'More than one',
  };
  const budgetRangeLabels: Record<string, string> = {
    under_5k: 'Under $5,000',
    '5k_15k': '$5,000 - $15,000',
    '15k_50k': '$15,000 - $50,000',
    '50k_plus': '$50,000+',
  };
  const timelineLabels: Record<string, string> = {
    urgent: 'Urgent (ASAP)',
    '1_3_months': '1-3 Months',
    '3_6_months': '3-6 Months',
    '6_plus': '6+ Months',
  };

  const projectTypeLabel = projectTypeLabels[formData.projectType] ?? formData.projectType;
  const budgetLabel = formData.budgetRange
    ? budgetRangeLabels[formData.budgetRange] ?? formData.budgetRange
    : 'Not specified';
  const timelineLabel = formData.timeline
    ? timelineLabels[formData.timeline] ?? formData.timeline
    : 'Not specified';

  try {
    const resend = new Resend(resendApiKey);
    const requests: Promise<unknown>[] = [
      // Client confirmation
      resend.emails.send({
        from: `QuantumFuze Tech Solutions <${fromEmail}>`,
        to: formData.email,
        subject: 'Project Inquiry Received — QuantumFuze Tech Solutions',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0F172A;">
            <h2 style="color: #071A33;">Thank you for your inquiry!</h2>
            <p>Hi ${escapeHtml(formData.name)},</p>
            <p>We've received your project request and will respond within 1-2 business days.</p>
            <ul>
              <li><strong>Project Type:</strong> ${projectTypeLabel}</li>
              <li><strong>Budget Range:</strong> ${budgetLabel}</li>
              <li><strong>Timeline:</strong> ${timelineLabel}</li>
            </ul>
            <p>In the meantime, check out our <a href="${siteUrl}/work">portfolio</a> to see how we've helped businesses like yours.</p>
            <p>Best regards,<br/>The QuantumFuze Team</p>
          </div>
        `,
      }),
    ];

    // Internal notification (only if configured)
    if (notificationEmail) {
      requests.push(
        resend.emails.send({
          from: `QuantumFuze Notifications <${fromEmail}>`,
          to: notificationEmail,
          subject: `New Project Inquiry — ${formData.name}`,
          html: `
            <div style="font-family: sans-serif; color: #0F172A;">
              <h2>New Project Inquiry</h2>
              <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
              <p><strong>Company:</strong> ${escapeHtml(formData.company || 'Not provided')}</p>
              <p><strong>Project Type:</strong> ${projectTypeLabel}</p>
              <p><strong>Budget Range:</strong> ${budgetLabel}</p>
              <p><strong>Timeline:</strong> ${timelineLabel}</p>
              <p><strong>IP:</strong> ${getClientIp(request.headers)}</p>
              <p><strong>Description:</strong></p>
              <p>${escapeHtml(formData.description)}</p>
            </div>
          `,
        })
      );
    }

    await Promise.allSettled(requests);
  } catch (emailError) {
    console.error('Email delivery failed:', emailError);
  }
}
