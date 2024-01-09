<script lang="ts">
	import { page } from '$app/stores';

	import Footer from '$lib/components/navigation/Footer.svelte';
	import SideNav from '$lib/components/navigation/SideNav.svelte';
	import TopNav from '$lib/components/navigation/TopNav.svelte';
	import HomeHeading from '$lib/components/pageheadings/HomeHeading.svelte';
	import OtherHeading from '$lib/components/pageheadings/OtherHeading.svelte';
	import { topValue } from '$lib/store';
	import '../app.css';

	let pageHeading: typeof HomeHeading | typeof OtherHeading;

	$: {
		const path = $page.url.pathname;

		if (path === '/') {
			pageHeading = HomeHeading;
		} else {
			pageHeading = OtherHeading;
		}
	}

</script>

<div class="bg-offwhite flex flex-col min-h-screen">
	<TopNav />
	<main class="relative flex-grow" style="top: {$topValue}px;">
		<svelte:component this={pageHeading} />
		<div class="flex">
			<SideNav /> 
			<slot />
		</div>
	</main>
	<Footer />
</div>
