<script>
  import { headingData } from "$lib/store";
	import { onMount } from "svelte";
  
  const headingInfo = {
		heading: "Contact Us",
		subHeading: "How to get in touch",
	}

  onMount(() => {
    headingData.set(headingInfo);
  })
</script>