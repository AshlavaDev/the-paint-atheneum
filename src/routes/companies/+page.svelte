<script>
  import { headingData } from "$lib/store";
	import { onMount } from "svelte";

  const headingInfo = {
		heading: "Companies",
		subHeading: "A list of companies that produce paints for miniatures",
	}

  onMount(() => {
    headingData.set(headingInfo);
  })
</script>

<div>
  Placeholder
</div>