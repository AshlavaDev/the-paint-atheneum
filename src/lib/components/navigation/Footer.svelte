<script lang="ts">
	//Footer component with offset to compensate for whole page offset 
	import { topValue } from '$lib/store';

	const currentYear: number = new Date().getFullYear();

</script>

<footer aria-label="footer" class="mt-auto border-t-4 border-darkblue bg-offwhite relative" style="top: {$topValue}px;">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row items-center justify-between text-darkblue">
			<a href="/" class="font-display text-xl md:text-3xl">The Paint Atheneum</a>
			<p class="mt-4 text-center text lg:mt-0 lg:text-right font-serif">
				Copyright &copy; {currentYear}. All rights reserved.
			</p>
		</div>
	</div>
</footer>
