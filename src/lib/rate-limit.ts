/**
 * Simple in-memory rate limiter.
 *
 * Suitable for local development and single-instance deployments.
 * For production on Cloudflare Workers (multi-instance, ephemeral memory),
 * use Cloudflare WAF rate limiting rules or an external store
 * (e.g., Upstash Redis) instead. See docs/security.md.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateLimitEntry>();

// Periodically clean expired entries to avoid memory growth
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup() {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, entry] of store.entries()) {
    if (entry.resetAt < now) {
      store.delete(key);
    }
  }
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
}

/**
 * Check whether a request from the given identifier is allowed.
 * @param identifier - Usually the client IP address
 * @param limit - Maximum number of requests allowed in the window
 * @param windowMs - Time window in milliseconds
 */
export function rateLimit(
  identifier: string,
  limit = 5,
  windowMs = 60 * 60 * 1000
): RateLimitResult {
  cleanup();

  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || entry.resetAt < now) {
    const resetAt = now + windowMs;
    store.set(identifier, { count: 1, resetAt });
    return { allowed: true, remaining: limit - 1, resetAt };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return {
    allowed: true,
    remaining: limit - entry.count,
    resetAt: entry.resetAt,
  };
}

/**
 * Extract client IP from request headers (Cloudflare / proxy aware).
 */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('cf-connecting-ip') ||
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}
