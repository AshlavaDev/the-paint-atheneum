<script lang="ts">
	// A ui component for any news posts imported from supabase

	interface NewsPost {
		title: string;
		content: string;
		date: string;
	}

	export let post: NewsPost;
</script>

<div class="block rounded-md border border-darkblue bg-darkblue p-8 shadow-xl text-offwhite">
	<h3 class="mt-3 text-xl md:text-2xl font-bold">{post.title}</h3>

	<p class="mt-4 md:text-lg">
		{post.content}
	</p>
	<p class="mt-4 md:text-lg">Date Posted: {post.date}</p>
</div>
