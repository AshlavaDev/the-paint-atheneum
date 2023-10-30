<script lang="ts">
  // A button that when pressed grabs the relevant paints from the database
  import { onMount } from "svelte";

	import { paintByType } from "$lib/store";

  // incoming type selection
  export let type: string;

  // Variable and onMount to help ensure no radio button is checked on page refresh
  let radioButton: HTMLInputElement;

  onMount(() => {
    radioButton.checked = false;
  });

  async function fetchPaints() {
    const res = await fetch(`/api/get-type?type=${type.toLowerCase()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);
    paintByType.set(data);
  }
</script>

<div>
  <input
    bind:this={radioButton}
    type="radio"
    name="typeOption"
    value={type}
    id={type}
    class="peer hidden"
    on:click="{fetchPaints}"
  />

  <label
    for={type}
    class="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
      bg-darkblue text-offwhite 
      peer-checked:bg-offwhite peer-checked:text-darkblue"
    >
      <p class="text-sm md:text-lg">{type}</p>
    </label>
</div>