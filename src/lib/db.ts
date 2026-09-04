import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';

/**
 * Database connection using postgres.js + Drizzle ORM.
 *
 * Cloudflare Workers Compatibility:
 * - The `postgres` library uses TCP connections which are not natively supported in Cloudflare Workers.
 * - For production deployment on Cloudflare, use one of these approaches:
 *   1. A serverless PostgreSQL provider (Neon, Supabase) with HTTP-based connections
 *   2. A connection pooler (PgBouncer) with a WebSocket proxy
 *   3. Cloudflare Hyperdrive for connection pooling
 *
 * The current configuration works for local development and traditional Node.js deployments.
 * Production Cloudflare configuration will be finalized in Phase 12.
 */

const connectionString = process.env.DATABASE_URL;

// Lazy initialization to avoid build-time errors when DATABASE_URL is not set
let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL environment variable is not set. ' +
      'Please configure your database connection in .env.local'
    );
  }

  if (!dbInstance) {
    const client = postgres(connectionString, {
      prepare: false,
      // Connection pool settings for serverless environments
      max: 1, // Single connection per Worker instance
      idle_timeout: 20,
      connect_timeout: 10,
    });
    dbInstance = drizzle(client, { schema });
  }

  return dbInstance;
}

export type Database = ReturnType<typeof getDb>;

