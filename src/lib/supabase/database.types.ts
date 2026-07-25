export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar_url: string | null;
          bio: string | null;
          company: string | null;
          website: string | null;
          plan: string;
          paddle_customer_id: string | null;
          subscription_status: string;
          credits_remaining: number;
          credits_total: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          avatar_url?: string | null;
          bio?: string | null;
          company?: string | null;
          website?: string | null;
          plan?: string;
          paddle_customer_id?: string | null;
          subscription_status?: string;
          credits_remaining?: number;
          credits_total?: number;
        };
        Update: {
          email?: string;
          name?: string;
          avatar_url?: string | null;
          bio?: string | null;
          company?: string | null;
          website?: string | null;
          plan?: string;
          paddle_customer_id?: string | null;
          subscription_status?: string;
          credits_remaining?: number;
          credits_total?: number;
          updated_at?: string;
        };
      };
      content_sources: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          source_type: string;
          source_url: string | null;
          content: string;
          word_count: number;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          title: string;
          source_type: string;
          source_url?: string | null;
          content: string;
          word_count?: number;
          status?: string;
        };
        Update: {
          title?: string;
          source_type?: string;
          source_url?: string | null;
          content?: string;
          word_count?: number;
          status?: string;
          updated_at?: string;
        };
      };
      generated_content: {
        Row: {
          id: string;
          user_id: string;
          source_id: string;
          platform: string;
          format: string;
          tone: string;
          content: string;
          word_count: number;
          metadata: Json;
          is_favorite: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          source_id: string;
          platform: string;
          format: string;
          tone: string;
          content: string;
          word_count?: number;
          metadata?: Json;
          is_favorite?: boolean;
        };
        Update: {
          content?: string;
          is_favorite?: boolean;
          metadata?: Json;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          paddle_subscription_id: string;
          paddle_customer_id: string;
          plan_id: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          paddle_subscription_id: string;
          paddle_customer_id: string;
          plan_id: string;
          status: string;
          current_period_start: string;
          current_period_end: string;
          cancel_at_period_end?: boolean;
        };
        Update: {
          plan_id?: string;
          status?: string;
          current_period_start?: string;
          current_period_end?: string;
          cancel_at_period_end?: boolean;
          updated_at?: string;
        };
      };
    };
  };
}
