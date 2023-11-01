<script>
	// This is a page for a list of all the companies, and the companies are in "static" pages in the directory to allow for easier get access from the database
	import { onMount } from 'svelte';

	import { headingData } from '$lib/store';

	const headingInfo = {
		heading: 'Companies',
		subHeading: 'A list of companies that produce paints for miniatures'
	};

	onMount(() => {
		headingData.set(headingInfo);
	});
</script>

<section class="flex-grow px-3">
	<div class="flex gap-4 justify-center py-5">
		<a
			href="/companies/gamesworkshop"
			class="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
    bg-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue">Games Workshop</a
		>
		<a
			href="/companies/vallejo"
			class="font-sans text-xl md:text-3xl py-2 px-3 border border-darkblue rounded
    bg-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue">Vallejo</a
		>
	</div>
</section>
