<script>
	import Sidenav from '$lib/components/navigation/Sidenav.svelte';
	import Topnav from '$lib/components/navigation/Topnav.svelte';
	import '../app.css';
</script>

<div>
	<Topnav />
	<main class="bg-offwhite flex justify-between min-h-screen">
		<Sidenav />
		<slot />
	</main>
</div>
