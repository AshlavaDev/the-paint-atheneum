//Api endpoint for individual type categories
import supabase from '$lib/supabaseClient';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async (req) => {
	const type = req.url.searchParams.get('type');

	if (type === null) {
		throw new Error('Type parameter is missing');
	}

	const { data, error } = await supabase.from('master').select().eq('type', type);

	if (error) {
		console.log(error);
		throw error;
	}

	return new Response(JSON.stringify(data));
};