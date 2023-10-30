<script>
	// The page for any site news
	import { onMount } from 'svelte';

	import { headingData } from '$lib/store';
	import NewsPost from '$lib/components/ui/cards/NewsPost.svelte';

	const headingInfo = {
		heading: 'News',
		subHeading: 'Updates on the website'
	};

	onMount(() => {
		headingData.set(headingInfo);
	});

	export let data;
	console.log(data);
</script>

<section class="flex-grow max-w-3/5 px-3">
	<h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5">Latest News</h2>
	<div class="flex flex-col-reverse gap-6 py-4 md:px-20">
		{#each data.news as newsItem}
			<NewsPost post={newsItem} />
		{/each}
	</div>
</section>
