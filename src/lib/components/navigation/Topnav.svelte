<script>
	// Top navigation bar component. onMount gets the height of the header to allow for the mobile menu to render undearneath it
	//TODO: Get a site icon for mobile (and favicon)
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	//Mobile menu boolean
	let isOpen = false;
	//Value to set mobile menu when opened
	let topValue = 0;

	onMount(() => {
		const header = document.querySelector('header');
		//If statement checks header for TypeScript allowance
		if (header) {
			topValue = header.offsetHeight;
		}
	});
</script>

<header
	class="flex items-center justify-around py-4 md:py-8 px-4 text-darkblue border-b-4 border-darkblue font-serif fixed top-0 w-full z-20 bg-offwhite lg:static"
>
	<a href="/" class="hidden lg:block font-display text-4xl">The Paint Atheneum</a>
	<a href="/" class="lg:hidden text-2xl">The PA</a>

	<nav>
		<div class="space-x-8 lg:flex hidden">
			<!-- Desktop Section -->
			<a class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" href="/">
				Home
			</a>
			<a class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" href="/about">
				About
			</a>
			<a
				class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
				href="/companies"
			>
				Companies
			</a>
			<a
				class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
				href="/paintcolours"
			>
				Colours
			</a>
			<a
				class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
				href="/painttypes"
			>
				Types
			</a>
			<a class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" href="/news">
				News
			</a>
			<a class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1" href="/contact">
				Contact
			</a>
		</div>
	</nav>
	<button class="lg:hidden h-8 w-8" on:click={() => (isOpen = !isOpen)}>
		<Icon icon="material-symbols:menu-rounded" class="w-full h-full" />
	</button>
</header>
{#if isOpen}
	<div
		class="flex flex-col text-darkblue font-serif z-20 w-full fixed bg-offwhite"
		style="top: {topValue}px;"
	>
		<!-- Mobile Section -->
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/"
			on:click={() => (isOpen = false)}
		>
			Home
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/about"
			on:click={() => (isOpen = false)}
		>
			About
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/companies"
			on:click={() => (isOpen = false)}
		>
			Companies
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/paintcolours"
			on:click={() => (isOpen = false)}
		>
			Colours
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/painttypes"
			on:click={() => (isOpen = false)}
		>
			Types
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/news"
			on:click={() => (isOpen = false)}
		>
			News
		</a>
		<a
			class="hover:bg-darkblue hover:text-offwhite transition text-xl px-2 py-1"
			href="/contact"
			on:click={() => (isOpen = false)}
		>
			Contact
		</a>
	</div>
{/if}
