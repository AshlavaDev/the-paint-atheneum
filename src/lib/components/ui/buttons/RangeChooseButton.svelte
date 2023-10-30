<script lang="ts">
	import { paintByRange } from "$lib/store";

  // the button component for choosing a paint range
  export let range: string;
  export let brand: string;

  async function fetchPaints() {
    const res = await fetch(`api/get-range?brand=${brand}&range=${range}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    paintByRange.set(data);

  }
</script>

<div>
  <input
    type="radio"
    name="ColourOption"
    value={range}
    id={range}
    class="peer hidden"
    on:click="{fetchPaints}"
  />

  <label
    for={range}
    class="flex cursor-pointer items-center justify-center rounded-md border border-darkblue py-2 px-3
      bg-darkblue text-offwhite 
      peer-checked:bg-offwhite peer-checked:text-darkblue"
    >
      <p class="text-sm md:text-lg">{range}</p>
    </label>
</div>