import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahqdzbrtpbnvdzximeft.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFocWR6YnJ0cGJudmR6eGltZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MDAzNjAsImV4cCI6MjA3NjQ3NjM2MH0.DHdFwIaiaseH_jxjTvFMDulMQt27_BYp252NPDVapw4";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  db: {
    schema: "public",
  },
});
