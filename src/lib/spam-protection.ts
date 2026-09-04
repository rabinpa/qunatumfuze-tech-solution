/**
 * Spam protection utilities.
 *
 * Three layers:
 * 1. Cloudflare Turnstile (primary — requires NEXT_PUBLIC_TURNSTILE_SITE_KEY + TURNSTILE_SECRET_KEY)
 * 2. Honeypot field (hidden input that bots fill in)
 * 3. Timing check (submissions faster than humans can type)
 *
 * Turnstile is optional at development time: if keys are not configured,
 * honeypot + timing checks still protect the endpoint.
 */

export interface SpamCheckInput {
  honeypot?: string | null;
  formStartedAt?: number | null;
  turnstileToken?: string | null;
}

export interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
}

/** Minimum time (ms) a real human needs to fill a form */
const MIN_FORM_DURATION_MS = 3000;

export function checkSpam(input: SpamCheckInput): SpamCheckResult {
  // 1. Honeypot — should always be empty for humans
  if (input.honeypot && input.honeypot.length > 0) {
    return { isSpam: true, reason: 'honeypot' };
  }

  // 2. Timing check — impossibly fast submissions are bots
  if (
    input.formStartedAt !== undefined &&
    input.formStartedAt !== null &&
    Number.isFinite(input.formStartedAt)
  ) {
    const duration = Date.now() - input.formStartedAt;
    if (duration >= 0 && duration < MIN_FORM_DURATION_MS) {
      return { isSpam: true, reason: 'timing' };
    }
  }

  return { isSpam: false };
}

/**
 * Verify a Cloudflare Turnstile token with the siteverify API.
 * Returns true when Turnstile is not configured (dev mode) so forms remain usable.
 */
export async function verifyTurnstile(token: string | undefined | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  // Turnstile not configured — skip (development mode)
  if (!secret) {
    return true;
  }

  if (!token) {
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    const result = (await response.json()) as { success: boolean };
    return result.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    // Fail closed if Turnstile is configured but unreachable
    return false;
  }
}
