import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

type RateLimitResult = {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
};

type RateLimiter = {
  limit(identifier: string): Promise<RateLimitResult>;
};

const hasUpstashEnv = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

const redis = hasUpstashEnv ? Redis.fromEnv() : null;

function createRateLimiter(limit: number, window: '1 m' | '1 h'): RateLimiter {
  if (!redis) {
    let warned = false;

    return {
      async limit() {
        if (!warned) {
          console.warn(
            'Upstash Redis environment variables are missing; rate limiting is disabled until UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN are configured.'
          );
          warned = true;
        }

        return {
          success: true,
          limit,
          remaining: limit,
          reset: Date.now() + (window === '1 h' ? 60 * 60 * 1000 : 60 * 1000),
        };
      },
    };
  }

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(limit, window),
    analytics: true,
  });
}

export const rateLimitContact = createRateLimiter(5, '1 h');
export const rateLimitSearch = createRateLimiter(100, '1 m');
export const rateLimitRevisions = createRateLimiter(20, '1 m');
export const rateLimitAdmin = createRateLimiter(10, '1 m');

/**
 * Cache helper functions using Upstash Redis
 */
export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const val = await redis?.get<string>(key);
    if (!val) return null;
    return typeof val === 'string' ? JSON.parse(val) : (val as T);
  } catch {
    return null;
  }
}

export async function cacheSet<T>(key: string, value: T, ttlSeconds: number): Promise<void> {
  try {
    await redis?.setex(key, ttlSeconds, JSON.stringify(value));
  } catch {
    // fail silently — cache is non-critical
  }
}
