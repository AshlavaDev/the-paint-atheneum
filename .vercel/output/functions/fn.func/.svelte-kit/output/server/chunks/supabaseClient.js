import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://vwnhqrhdvnoeddqufcmc.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bmhxcmhkdm5vZWRkcXVmY21jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk0MDU4MzgsImV4cCI6MTk4NDk4MTgzOH0.SJ0XIyHhEqnE6hsH3jb91kwqkiNq3NYr2FtevkMIKz0";
const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export {
  supabase as s
};
