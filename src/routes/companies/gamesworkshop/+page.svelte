<script lang="ts">
  import { onMount } from 'svelte';

	import { headingData, paintByRange } from '$lib/store';
  import ChooseRange from '$lib/components/ui/lists/ChooseRange.svelte';
  import PaintList from '$lib/components/ui/lists/PaintList.svelte';

  //TODO: Style and turn into a component the no paints found text

	const headingInfo = {
		heading: 'Citadel - Games Workshop',
		subHeading: 'The Biggest Company in Miniatures'
	};

	const pageData = {
		name: 'Citadel - Games Workshop',
		brand: 'citadel',
		ranges: ['Air', 'Base', 'Contrast', 'Dry', 'Layer', 'Shade', 'Spray']
	};

	onMount(() => {
		headingData.set(headingInfo);
    paintByRange.set([])
	});

</script>

<section class="flex-grow flex flex-col items-center">
	<h2 class="font-serif text-3xl md:text-6xl text-darkblue text-center py-3">Games Workshop</h2>
	<img src="/assets/logos/gwlogo.png" width="150px" height="85" alt="Games Workshop Logo" />
  <ChooseRange brand={pageData.brand} ranges={pageData.ranges} />
  <div class="w-[80%]">
    {#if $paintByRange.length > 0}
    <PaintList paints={$paintByRange} />
  {:else}
    <p>No paints found.</p>
    {/if}
  </div>
</section>
