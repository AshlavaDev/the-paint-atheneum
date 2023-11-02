<script>
	// A page for the contact form
	//TODO: Add form functionality
	import { headingData } from '$lib/store';
	import { onMount } from 'svelte';

	const headingInfo = {
		heading: 'Contact Us',
		subHeading: 'How to get in touch'
	};

	onMount(() => {
		headingData.set(headingInfo);
	});
</script>

<section
	class="text-center flex-grow flex justify-center text-darkblue font-sans text-lg md:text-xl"
>
	<div class="min-w-[22rem] w-full max-w-[36rem] px-3 lg:px-6 pt-8 md:pt-20 pb-8">
		<h2 class="text-3xl font-serif mb-12">Contact us</h2>
		<form name="contact" method="POST" class="w-full">
			<input type="hidden" name="form-name" value="contact" />
			<div class="form-group mb-6 w-full">
				<label for="name" class="pb-2">Name</label>
				<input
					type="text"
					class="form-control block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-darkblue
					bg-white bg-clip-padding
					border border-solid border-darkblue
					rounded
					transition
					ease-in-out
					m-0
					focus:text-gray-700 focus:bg-white focus:border-deepred focus:outline-none"
					name="name"
					id="name"
					placeholder="Name"
				/>
			</div>
			<div class="form-group mb-6">
				<label for="message" class="pb-2">Message</label>
				<textarea
					class="
					form-control
					block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-darkblue
					bg-white bg-clip-padding
					border border-solid border-darkblue
					rounded
					transition
					ease-in-out
					m-0
					focus:text-darkblue focus:bg-white focus:border-deepred focus:outline-none"
					name="message"
					id="message"
					rows="4"
					placeholder="Message"
				/>
			</div>
			<button
				type="submit"
				class="
				w-full
				px-6
				py-2.5
				bg-darkblue
				text-offwhite
				font-medium
				text-xs
				leading-tight
				uppercase
				rounded
				shadow-md
				hover:bg-offwhite hover:shadow-lg hover:text-darkblue hover:border hover:border-darkblue focus:border focus:border-deepred focus:text-darkblue
				focus:bg-offwhite focus:shadow-lg focus:outline-none focus:ring-0
				active:bg-darkblue active:shadow-lg
				transition
				duration-150
				ease-in-out">Send</button
			>
		</form>
	</div>
</section>
