<script  lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import Footer from '$lib/components/navigation/Footer.svelte';
	import Sidenav from '$lib/components/navigation/Sidenav.svelte';
	import Topnav from '$lib/components/navigation/Topnav.svelte';
	import HomeHeading from '$lib/components/pageheadings/HomeHeading.svelte';
	import OtherHeading from '$lib/components/pageheadings/OtherHeading.svelte';
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

<div class="bg-offwhite">
	<Topnav />
	<main class="min-h-screen">
		<svelte:component this={pageHeading} />
		<div class="flex justify-between">
			<Sidenav />
			<slot />
		</div>
	</main>
	<Footer />
</div>
