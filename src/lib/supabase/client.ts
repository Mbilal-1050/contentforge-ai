import { createClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

const getSupabaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
  return url;
};

const getSupabaseAnonKey = () => {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
  return key;
};

const getServiceRoleKey = () => {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  return key;
};

export const getSupabase = () => {
  return createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey());
};

export const getServiceSupabase = () => {
  return createClient<Database>(getSupabaseUrl(), getServiceRoleKey());
};
