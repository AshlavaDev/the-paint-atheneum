<script>
	//The page for selecting paint by type
	import { onMount } from 'svelte';

	import { headingData, paintByType } from '$lib/store';
	import ChooseType from '$lib/components/ui/lists/ChooseType.svelte';
	import PaintList from '$lib/components/ui/lists/PaintList.svelte';
	import TypeSelectText from '$lib/components/ui/messages/TypeSelectText.svelte';
	
	const headingInfo = {
		heading: 'Paints by Type',
		subHeading: 'Paints from all companies arranged by type'
	};

	onMount(() => {
		headingData.set(headingInfo);
		paintByType.set([]);
	});
</script>

<section class="flex-grow flex flex-col items-center px-3">
	<ChooseType />
  <div class="lg:w-[80%] flex flex-col items-center">
    {#if $paintByType.length > 0}
    <PaintList paints={$paintByType} />
  {:else}
    <TypeSelectText />
    {/if}
  </div>
</section>