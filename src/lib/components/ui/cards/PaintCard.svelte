<script lang="ts">
	// A ui component for rendering information about the paint in a list
	import type { PaintProps } from 'AntheneumTypes';

	export let paint: PaintProps;
</script>

<div
	class="flex flex-col justify-between gap-2 min-w-full h-96 border-2 border-black py-4 px-3 rounded-lg bg-red-100 hover:shadow-2xl hover:shadow-slate-800 font-sans text-sm md:text-base"
>
	<div
		class="w-2/5 h-2/5 border border-black rounded self-center"
		style="background-color: {paint.hex_colour};"
	>
		<!-- This div is a box for paint colours -->
	</div>
	<h4 class="tmt-4 text-lg md:text-xl">{paint.paint_name}</h4>
	<div class="flex flex-col gap-1 items-start mt-2">
		<p>Company: {paint.company}</p>
		<p>Range: {paint.range}</p>
		<p>Colour: {paint.colour_category}</p>
		<p>
			Metallic:
			{#if paint.is_metallic}
				<span>Yes</span>
			{:else}
				<span>No</span>
			{/if}
		</p>
		<p>Paint Type: {paint.type}</p>
		<p>
			Currently Made:
			{#if paint.is_current}
				<span>Yes</span>
			{:else}
				<span>No</span>
			{/if}
		</p>
	</div>
	<a
		href={paint.link_url}
		target="_blank"
		class="self-center px-2 py-1 rounded-md block bg-darkblue border border-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue"
		>Find in Store</a
	>
</div>
