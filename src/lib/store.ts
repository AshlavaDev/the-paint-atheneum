//This file is for any stores needed throught the app

import { writable } from 'svelte/store';

export const headingData = writable({
	heading: 'Page Heading',
	subHeading: 'Page Subheading'
});

//This allows pages to be positioned properly on mobile in relation to top nav
export const topValue = writable(0);

// Variable stores for getting paints from database
export const paintByRange = writable([]);
export const paintByColour = writable([]);
export const paintByType = writable([]);
