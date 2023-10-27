<script>
  import { headingData } from "$lib/store";
	import { onMount } from "svelte";

  const headingInfo = {
		heading: "News",
		subHeading: "Updates on the website",
	}

  onMount(() => {
    headingData.set(headingInfo);
  })
</script>