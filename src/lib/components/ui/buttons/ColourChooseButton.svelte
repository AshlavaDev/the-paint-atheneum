<script lang="ts">
  // A button that when pressed grabs the relevant paints from the database
  import { onMount } from "svelte";

	import { paintByColour } from "$lib/store";

  // incoming colour selection
  export let colour: string;

  // Variable and onMount to help ensure no radio button is checked on page refresh
  let radioButton: HTMLInputElement;

  onMount(() => {
    radioButton.checked = false;
  });

  async function fetchPaints() {
    const res = await fetch(`/api/get-colour?colour=${colour.toLowerCase()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);
    paintByColour.set(data);
  }
</script>

<div>
  <input
    bind:this={radioButton}
    type="radio"
    name="ColourOption"
    value={colour}
    id={colour}
    class="peer hidden"
    on:click="{fetchPaints}"
  />

  <label
    for={colour}
    class="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
      bg-darkblue text-offwhite 
      peer-checked:bg-offwhite peer-checked:text-darkblue"
    >
      <p class="text-sm md:text-lg">{colour}</p>
    </label>
</div>