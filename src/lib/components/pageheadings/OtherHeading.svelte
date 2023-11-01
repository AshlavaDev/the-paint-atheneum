<script lang="ts">
	//Component for the rendering of all non-home page headings
	import { onMount } from 'svelte';

	import { headingData, topValue } from '$lib/store';

	let topValuePx: string = '0px';

	onMount(() => {
				console.log($topValue);
        topValuePx = $topValue + 'px';
				console.log(topValuePx);
    });

</script>

<div class='text-center bg-darkhero bg-center text-offwhite border-b-2 border-darkblue py-20 px-6 lg:top-0' style="top: {topValuePx};">
	<h1 class="text-6xl lg:text-8xl font-bold mt-0 mb-6 font-display">{$headingData.heading}</h1>
	<p class="text-xl md:text-3xl font-serif">{$headingData.subHeading}</p>
</div>
