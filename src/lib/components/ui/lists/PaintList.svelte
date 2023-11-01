<script lang="ts">
	// A ui component for list rendering

	import type { PaintProps } from 'AntheneumTypes';
	import PaintCard from '../cards/PaintCard.svelte';

	//The paint array that is all paints of that brand and range, is Svelte store set with radio buttons
	export let paints: Array<PaintProps>;

	//Optional parameters for filtering
	export let isPaintTypePage: boolean = false;
	export let isCompanyPage: boolean = false;

	//Pagination variables for max items on a page and the current page starting at one
	export let itemsPerPage: number = 15;
	export let currentPage: number = 1;

	//Sorting variables initially set to 'paint_name'
	export let sortBy: keyof PaintProps = 'paint_name';

	//Sorting by metallic quality with initial to all paints
	let metallicFilter: 'all' | 'metallic' | 'non-metallic' = 'all';
	let filteredPaints: Array<PaintProps>;

	//Initialization of indexes for slicing the paints array
	let startIndex = (currentPage - 1) * itemsPerPage;
	let endIndex = startIndex + itemsPerPage;

	//The paint array that will actually be rendered
	let currentPagePaints: Array<PaintProps> = [];

	// Reactive bindings to help trigger rerenders when needed, slices array based on what page you are on and which metallic options are selected
	$: {
		filteredPaints = paints.filter((paint) => {
			if (metallicFilter === 'all') return true;
			if (metallicFilter === 'metallic') return paint.is_metallic;
			if (metallicFilter === 'non-metallic') return !paint.is_metallic;
		});

		startIndex = (currentPage - 1) * itemsPerPage;
		endIndex = startIndex + itemsPerPage;
		currentPagePaints = filteredPaints
			.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
			.slice(startIndex, endIndex);
	}

	function goToPage(pageNumber: number) {
		currentPage = pageNumber;
	}
</script>

<div class="text-lg text-darkblue flex flex-col items-center gap-6">
	<div>
		<label for="sortBy">Sort by:</label>
		<select
			id="sortBy"
			bind:value={sortBy}
			class="bg-white text-darkblue px-1 py-1 hover:bg-darkblue hover:text-offwhite font-sans"
		>
			<option value="paint_name">Paint Name</option>
			<option value="colour_category">Colour Category</option>
			{#if !isPaintTypePage}
				<option value="type">Paint Type</option>
			{/if}
			{#if !isCompanyPage}
				<option value="company">Company</option>
			{/if}
		</select>
	</div>
	<div class="flex flex-col items-center">
		<label for="metallicFilter">Metallic Options</label>
		<div id="metallicFilter" class="flex gap-4">
			<div>
				<input
					type="radio"
					id="all"
					name="metallicFilter"
					value="all"
					bind:group={metallicFilter}
				/>
				<label for="all">All Paints</label>
			</div>
			<div>
				<input
					type="radio"
					id="non-metallic"
					name="metallicFilter"
					value="non-metallic"
					bind:group={metallicFilter}
				/>
				<label for="non-metallic">No Metallic Paints</label>
			</div>
			<div>
				<input
					type="radio"
					id="metallic"
					name="metallicFilter"
					value="metallic"
					bind:group={metallicFilter}
				/>
				<label for="metallic">Only Metallic Paints</label>
			</div>
		</div>
	</div>
</div>

<div
	class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-6 py-4 px-2 lg:px-8 min-w-full"
>
	{#each currentPagePaints as paint}
		<PaintCard {paint} />
	{/each}
</div>

<div
	class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7 gap-2 mt-4 pb-4 max-w-xs md:max-w-md xl:max-w-lg"
>
	{#each Array(Math.ceil(filteredPaints.length / itemsPerPage)).fill(0) as _, i}
		<button
			class="mx-2 px-4 py-2 rounded-md border border-darkblue hover:bg-darkblue hover:text-offwhite transition flex items-center justify-center"
			class:selected={currentPage === i + 1}
			on:click={() => goToPage(i + 1)}
		>
			{i + 1}
		</button>
	{/each}
</div>
