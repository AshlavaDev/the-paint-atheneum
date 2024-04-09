import { s as supabase } from "../../../../chunks/supabaseClient.js";
const GET = async (req) => {
  const range = req.url.searchParams.get("range");
  const brand = req.url.searchParams.get("brand");
  if (brand === null) {
    throw new Error("Brand parameter is missing");
  }
  const { data, error } = await supabase.from(brand).select().eq("range", range);
  if (error) {
    console.log(error);
    throw error;
  }
  return new Response(JSON.stringify(data));
};
export {
  GET
};
