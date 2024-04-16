import { s as supabase } from "../../../chunks/supabaseClient.js";
async function load() {
  const { data, error } = await supabase.from("news").select("*");
  if (error) {
    console.log(error);
    throw error;
  }
  return {
    news: data || []
  };
}
export {
  load
};
