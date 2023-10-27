<script>
  import { headingData } from "$lib/store";
	import { onMount } from "svelte";

  const headingInfo = {
		heading: "Paints by Type",
		subHeading: "Paints from all companies arranged by type",
	}

  onMount(() => {
    headingData.set(headingInfo);
  })
</script>