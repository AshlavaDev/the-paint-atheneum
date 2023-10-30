import supabase from "$lib/supabaseClient";

export async function load() {
    const { data, error } = await supabase.from("news").select("*");

    if (error) {
      console.log(error);
      throw error;
    }

    return { 
      news: data || [],
    };
}
