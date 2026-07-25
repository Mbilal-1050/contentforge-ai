import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

// Singleton pattern for Next.js hot reload
declare global {
  var __db: ReturnType<typeof drizzle<typeof schema>> | undefined;
}

export function getDb() {
  if (process.env.NODE_ENV === "development") {
    if (!globalThis.__db) {
      globalThis.__db = drizzle(neon(process.env.DATABASE_URL!), { schema });
    }
    return globalThis.__db;
  }
  return drizzle(neon(process.env.DATABASE_URL!), { schema });
}
