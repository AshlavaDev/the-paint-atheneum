<script lang="ts">
  // A ui component for list rendering
  import type { PaintProps } from 'AntheneumTypes';
	import PaintCard from "../cards/PaintCard.svelte";

  export let paints: Array<PaintProps>;
  console.log(paints)
</script>

<div class="grid grid-cols-1 grid-flow-row lg:grid-cols-3 gap-6 py-4 px-8 min-w-full">
  {#each paints as paint}
    <PaintCard paint={paint} />
  {/each}
</div>