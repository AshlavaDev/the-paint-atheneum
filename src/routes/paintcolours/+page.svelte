<script>
	//The page for all paints arranged by colour category (ie broad colours)
	import { onMount } from 'svelte';
	
	import { headingData, paintByColour } from '$lib/store';
	import ChooseColour from '$lib/components/ui/lists/ChooseColour.svelte';
	import PaintList from '$lib/components/ui/lists/PaintList.svelte';
	import ColourSelectText from '$lib/components/ui/messages/ColourSelectText.svelte';

	const headingInfo = {
		heading: 'Paints by Colour',
		subHeading: 'Paints from all companies arranged by colour'
	};

	onMount(() => {
		headingData.set(headingInfo);
		paintByColour.set([]);
	});
</script>

<section class="flex-grow flex flex-col items-center px-3">
	<ChooseColour />
  <div class="w-[80%]">
    {#if $paintByColour.length > 0}
    <PaintList paints={$paintByColour} />
  {:else}
    <ColourSelectText />
    {/if}
  </div>
</section>
