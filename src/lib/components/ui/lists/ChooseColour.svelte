<script lang="ts">
  // The is a ui list that renders all the colours as buttons
	import ColourChooseButton from "../buttons/ColourChooseButton.svelte";

  const colours = ['Black', 'Blue', 'Bone', 'Brass', 'Bronze', 'Brown', 'Copper', 'Flesh',
    'Gold', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Turquoise', 'White', 'Yellow'];
</script>

<div class="py-6 flex justify-center">
  <fieldset class="flex flex-col items-center px-4 py-2">
    <h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5">Choose a Colour</h2>
    <legend  class="sr-only">Choose a Colour</legend>
      <div class="flex flex-wrap justify-center gap-4 font-sans">
        {#each colours as colour}
          <ColourChooseButton colour={colour} />
        {/each}
      </div>
  </fieldset>
</div>