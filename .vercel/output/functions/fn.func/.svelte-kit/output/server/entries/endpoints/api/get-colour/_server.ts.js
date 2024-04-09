import { s as supabase } from "../../../../chunks/supabaseClient.js";
const GET = async (req) => {
  const colour = req.url.searchParams.get("colour");
  if (colour === null) {
    throw new Error("Colour parameter is missing");
  }
  const { data, error } = await supabase.from("master").select().eq("colour_category", colour);
  if (error) {
    console.log(error);
    throw error;
  }
  return new Response(JSON.stringify(data));
};
export {
  GET
};
