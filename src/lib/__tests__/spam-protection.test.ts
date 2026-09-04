import { describe, it, expect } from 'vitest';
import { checkSpam } from '../spam-protection';
import { rateLimit } from '../rate-limit';

describe('checkSpam', () => {
  it('allows clean input', () => {
    const result = checkSpam({ honeypot: '' });
    expect(result.isSpam).toBe(false);
  });

  it('flags honeypot filled in', () => {
    const result = checkSpam({ honeypot: 'bot-value' });
    expect(result.isSpam).toBe(true);
    expect(result.reason).toBe('honeypot');
  });

  it('flags impossibly fast submissions', () => {
    const formStartedAt = Date.now() - 500; // 500ms ago
    const result = checkSpam({ formStartedAt });
    expect(result.isSpam).toBe(true);
    expect(result.reason).toBe('timing');
  });
});

describe('rateLimit', () => {
  it('allows requests under the limit', () => {
    const result = rateLimit('test-ip', 5, 60000);
    expect(result.allowed).toBe(true);
  });

  it('blocks requests over the limit', () => {
    // Use a unique key to avoid colliding with other tests
    const key = `limit-${Date.now()}`;
    for (let i = 0; i < 3; i++) {
      rateLimit(key, 3, 60000);
    }
    const result = rateLimit(key, 3, 60000);
    expect(result.allowed).toBe(false);
    expect(result.remaining).toBe(0);
  });
});