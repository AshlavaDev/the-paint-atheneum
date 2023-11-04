<script lang="ts">
	// A button that when pressed grabs the relevant paints from the database
	import { onMount } from 'svelte';

	import { paintByRange } from '$lib/store';

	// the button component for choosing a paint range
	export let range: string;
	export let brand: string;

	// Variable and onMount to help ensure no radio button is checked on page refresh
	let radioButton: HTMLInputElement;

	onMount(() => {
		radioButton.checked = false;
	});

	async function fetchPaints() {
		const res = await fetch(`/api/get-range?brand=${brand}&range=${range}`, {
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
		bind:this={radioButton}
		type="radio"
		name="ColourOption"
		value={range}
		id={range}
		class="peer hidden"
		on:click={fetchPaints}
	/>

	<label
		for={range}
		class="paint-list-selector"
	>
		<p class="text-sm md:text-lg">{range}</p>
	</label>
</div>
