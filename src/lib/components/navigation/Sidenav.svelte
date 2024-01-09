<script>
	//FIXME: Paint dropdown section styles + add down arrow icon
	//TODO: Open and close icon for whole menu
</script>

<div class="max-w-1/5 h-screen sticky top-0 border-r-4 border-darkblue hidden md:block">
	<div class="px-2 py-6 flex flex-col justify-between text-darkblue font-sans">
		<span class="block w-32 h-10 rounded-lg" />
		<h4 class="text-lg md:text-xl">Menu</h4>
		<nav class="flex flex-col mt-6 space-y-1">
			<a href="/" class="side-nav-link">Home</a
			>
			<a href="/about" class="side-nav-link"
				>About</a
			>
			<details class="group [&_summary::-webkit-details-marker]:hidden">
				<summary
					class="flex items-center rounded-md cursor-pointer hover:bg-darkblue hover:text-offwhite"
				>
					<span class="ml-2 text-sm md:text-lg py-2">Paints</span>
				</summary>
				<ul class="my-1 ml-6 flex flex-col gap-1">
					<li>
						<a href="/companies" class="text-sm hover:bg-darkblue hover:text-offwhite">By Company</a
						>
					</li>
					<li>
						<a href="/paintcolours" class="text-sm hover:bg-darkblue hover:text-offwhite"
							>By Colour</a
						>
					</li>
					<li>
						<a href="/painttypes" class="text-sm hover:bg-darkblue hover:text-offwhite">By Type</a>
					</li>
				</ul>
			</details>
			<a href="/news" class="side-nav-link"
				>News</a
			>
			<a href="/contact" class="side-nav-link"
				>Contact</a
			>
		</nav>
	</div>
</div>
