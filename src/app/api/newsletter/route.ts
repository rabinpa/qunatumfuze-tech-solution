import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { newsletterSubscribers } from '@/db/schema';
import { newsletterSchema } from '@/lib/validation';
import { checkSpam, verifyTurnstile } from '@/lib/spam-protection';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting (10 subscriptions per hour per IP)
    const ip = getClientIp(request.headers);
    const { allowed, resetAt } = rateLimit(`newsletter:${ip}`, 10, 60 * 60 * 1000);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: { 'Retry-After': Math.ceil((resetAt - Date.now()) / 1000).toString() },
        }
      );
    }

    // 2. Parse and validate
    const body = await request.json();
    const data = newsletterSchema.safeParse(body);

    if (!data.success) {
      return NextResponse.json(
        { error: data.error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      );
    }

    const formData = data.data;

    // 3. Spam checks
    const spamCheck = checkSpam({ honeypot: formData.honeypot });

    if (spamCheck.isSpam) {
      console.warn(`Newsletter spam blocked (${spamCheck.reason}) from ${ip}`);
      return NextResponse.json({ success: true });
    }

    // 4. Turnstile verification (skipped in dev when not configured)
    const turnstileValid = await verifyTurnstile(formData.turnstileToken);
    if (!turnstileValid) {
      return NextResponse.json({ error: 'Security verification failed' }, { status: 400 });
    }

    // 5. Insert — handle duplicate subscriptions gracefully
    const db = getDb();
    try {
      await db
        .insert(newsletterSubscribers)
        .values({ email: formData.email, ipAddress: ip })
        .onConflictDoNothing({ target: newsletterSubscribers.email });
    } catch (dbError) {
      console.error('Newsletter insert error:', dbError);
      throw dbError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter subscription error:', error);

    if (error instanceof Error && error.message.includes('DATABASE_URL')) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
