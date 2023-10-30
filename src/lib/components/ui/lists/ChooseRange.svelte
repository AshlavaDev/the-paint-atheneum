<script lang="ts">
  // The is a ui list that renders all the ranges from a company as buttons
  //TODO: Add sorting by color category or by name

  
  import RangeChooseButton from '../buttons/RangeChooseButton.svelte';

  export let ranges: string[];
  export let brand: string;
</script>

<div class="py-6 flex justify-center">
  <fieldset class="flex flex-col items-center px-4 py-2">
    <h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5">Choose a {brand} Range</h2>
    <legend  class="sr-only">Choose a {brand} Range</legend>
      <div class="flex flex-wrap justify-center gap-4 font-sans">
        {#each ranges as range}
          <RangeChooseButton brand={brand} range={range} />
        {/each}
      </div>
  </fieldset>
</div>