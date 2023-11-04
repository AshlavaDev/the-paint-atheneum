<script lang="ts">
	// Top navigation bar component. onMount gets the height of the header to allow for the mobile menu to render undearneath it
	//TODO: Get a site icon for mobile (and favicon)
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	import { topValue } from '$lib/store';

	//Mobile menu boolean
	let isOpen = false;

	//variable to get the header for height calculation
	let header: HTMLElement;

	onMount(() => {
		const updateTopValue = () => {
			//If statement checks header for TypeScript allowance
			if (window.innerWidth > 1024) {
				topValue.set(0);
			} else {
				if (header) {
					topValue.set(header.offsetHeight);
				}
			};
		};
		
		updateTopValue();

		//Screen resize event with cleanup
		window.addEventListener('resize', updateTopValue);

		return () => {
			window.removeEventListener('resize', updateTopValue);
		}
	});
</script>

<header
	bind:this={header}
	class="flex items-center justify-around py-4 md:py-8 px-4 text-darkblue border-b-4 border-darkblue font-serif fixed top-0 w-full z-20 bg-offwhite lg:static"
>
	<a href="/" class="hidden xl:block font-display text-4xl">The Paint Atheneum</a>
	<a href="/" class="xl:hidden text-2xl flex items-center gap-2">
		<span class="flex">
			<Icon icon="material-symbols:book-5-outline" />
			<Icon icon="mdi:paint-outline" />
		</span>
		The PA
	</a>

	<nav>
		<div class="space-x-8 lg:flex hidden">
			<!-- Desktop Section -->
			<a class="top-nav-link" href="/">
				Home
			</a>
			<a class="top-nav-link" href="/about">
				About
			</a>
			<a
				class="top-nav-link"
				href="/companies"
			>
				Companies
			</a>
			<a
				class="top-nav-link"
				href="/paintcolours"
			>
				Colours
			</a>
			<a
				class="top-nav-link"
				href="/painttypes"
			>
				Types
			</a>
			<a class="top-nav-link" href="/news">
				News
			</a>
			<a class="top-nav-link" href="/contact">
				Contact
			</a>
		</div>
	</nav>
	<button class="lg:hidden h-8 w-8" on:click={() => (isOpen = !isOpen)}>
		<Icon icon="material-symbols:menu-rounded" class="w-full h-full" />
	</button>
</header>
{#if isOpen}
	<nav
		class="flex flex-col text-darkblue font-serif z-20 w-full fixed bg-offwhite border-b-2 border-darkblue"
		style="top: {$topValue}px;"
	>
		<!-- Mobile Section -->
		<a
			class="top-nav-link"
			href="/"
			on:click={() => (isOpen = false)}
		>
			Home
		</a>
		<a
			class="top-nav-link"
			href="/about"
			on:click={() => (isOpen = false)}
		>
			About
		</a>
		<a
			class="top-nav-link"
			href="/companies"
			on:click={() => (isOpen = false)}
		>
			Companies
		</a>
		<a
			class="top-nav-link"
			href="/paintcolours"
			on:click={() => (isOpen = false)}
		>
			Colours
		</a>
		<a
			class="top-nav-link"
			href="/painttypes"
			on:click={() => (isOpen = false)}
		>
			Types
		</a>
		<a
			class="top-nav-link"
			href="/news"
			on:click={() => (isOpen = false)}
		>
			News
		</a>
		<a
			class="top-nav-link"
			href="/contact"
			on:click={() => (isOpen = false)}
		>
			Contact
		</a>
	</nav>
{/if}
