import { drizzle } from 'drizzle-orm/neon-serverless';
import { neon } from '@neondatabase/serverless';
import * as schema from '@shared/schema';

// Only require DATABASE_URL in production
if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

// Only create database connection in production
const sql = process.env.NODE_ENV === 'production' ? neon(process.env.DATABASE_URL!) : null;
export const db = process.env.NODE_ENV === 'production' ? drizzle(sql!, { schema }) : null; 