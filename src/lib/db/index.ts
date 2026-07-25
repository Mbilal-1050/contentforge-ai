import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

let _db: any = null;

function getClient() {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error("DATABASE_URL is not set");
    const sql = neon(url);
    _db = drizzle({ client: sql, schema });
  }
  return _db;
}

export const db: ReturnType<typeof drizzle<typeof schema>> = new Proxy(
  {} as any,
  {
    get(_, prop) {
      return getClient()[prop];
    },
  },
);
