import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ijcnzvhxbxgkjgohaezt.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqY256dmh4Ynhna2pnb2hhZXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODAwMDYsImV4cCI6MTk4Mzc1NjAwNn0.k2LKdr62y2VMH9XTJ0sRTX_KBcCYSHrMHH5hlbudkeE";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getALLVideos() {
      return supabase.from("video").select("*");
    },
  };
}
