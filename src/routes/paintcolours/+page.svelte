<script>
	import { headingData } from '$lib/store';
	import { onMount } from 'svelte';

	const headingInfo = {
		heading: 'Paints by Colour',
		subHeading: 'Paints from all companies arranged by colour'
	};

	onMount(() => {
		headingData.set(headingInfo);
	});
</script>
