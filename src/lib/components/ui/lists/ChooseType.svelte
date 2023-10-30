<script lang="ts">
  // The is a ui list that renders all the types as buttons
	import TypeChooseButton from "../buttons/TypeChooseButton.svelte";

  const types = ['Acrylic', 'Acrylic Ink', 'Air', 'Contrast', 'Special', 'Spray', 'Wash'];
</script>

<div class="py-6 flex justify-center">
  <fieldset class="flex flex-col items-center px-4 py-2">
    <h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5">Choose a Type of Paint</h2>
    <legend  class="sr-only">Choose a Type of Paint</legend>
      <div class="flex flex-wrap justify-center gap-4 font-sans">
        {#each types as type}
          <TypeChooseButton type={type} />
        {/each}
      </div>
  </fieldset>
</div>