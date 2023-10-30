//Api endpoint for individual colour categories
import supabase from '$lib/supabaseClient';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (req) => {
	const colour = req.url.searchParams.get('colour');

	if (colour === null) {
		throw new Error('Colour parameter is missing');
	}

	const { data, error } = await supabase.from('master').select().eq('colour_category', colour);

	if (error) {
		console.log(error);
		throw error;
	}

	return new Response(JSON.stringify(data));
};