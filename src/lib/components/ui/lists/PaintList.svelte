<script lang="ts">
  // A ui component for list rendering
  import type { PaintProps } from 'AntheneumTypes';
	import PaintCard from "../cards/PaintCard.svelte";

  //The paint array that is all paints of that brand and range
  export let paints: Array<PaintProps>;

  //Pagination variables for max items on a page and the current page starting at one
  export let itemsPerPage: number = 15;
  export let currentPage: number = 1;

  //Initialization of indexes for slicing the paints array
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;

  //The paint array that will actually be rendered
  let currentPagePaints: Array<PaintProps> = [];

  // Reactive bindings to help trigger rerenders when needed
  $: {
    startIndex = (currentPage - 1) * itemsPerPage;
    endIndex = startIndex + itemsPerPage;
    currentPagePaints = paints.slice(startIndex, endIndex);
  }

  function goToPage(pageNumber: number) {
    currentPage = pageNumber;
  }

</script>

<div class="grid grid-cols-1 grid-flow-row lg:grid-cols-3 gap-6 py-4 px-8 min-w-full">
  {#each currentPagePaints as paint}
    <PaintCard paint={paint} />
  {/each}
</div>

<div class="flex justify-center mt-4 pb-4">
  {#each Array(Math.ceil(paints.length / itemsPerPage)).fill(0) as _, i}
    <button
      class="mx-2 px-4 py-2 rounded-md border border-darkblue hover:bg-darkblue hover:text-offwhite transition"
      class:selected={currentPage === i + 1}
      on:click={() => goToPage(i + 1)}
    >
      {i + 1}
    </button>
  {/each}
</div>