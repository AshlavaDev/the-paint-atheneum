<script lang="ts">
  //The Vallejo company range page
  import { onMount } from 'svelte';

  import { headingData, paintByRange } from '$lib/store';
  import ChooseRange from '$lib/components/ui/lists/ChooseRange.svelte';
  import PaintList from '$lib/components/ui/lists/PaintList.svelte';
  import RangeSelectText from '$lib/components/ui/messages/RangeSelectText.svelte';

  const headingInfo = {
		heading: 'Vallejo',
		subHeading: 'A big paint company'
	};

  const pageData = {
		name: 'Vallejo',
		brand: 'vallejo',
		ranges: ['Game Color', 'Model Color']
	};

  onMount(() => {
		headingData.set(headingInfo);
    paintByRange.set([])
	});

</script>

<section class="flex-grow flex flex-col items-center">
	<h2 class="font-serif text-3xl md:text-6xl text-darkblue text-center py-3">{pageData.name}</h2>
	<img src="/assets/logos/logovallejo.jpg" width="150px" height="85" alt="Vallejo Logo" />
  <ChooseRange brand={pageData.brand} ranges={pageData.ranges} />
  <div class="w-[80%]">
    {#if $paintByRange.length > 0}
    <PaintList paints={$paintByRange} />
  {:else}
    <RangeSelectText />
    {/if}
  </div>
</section>