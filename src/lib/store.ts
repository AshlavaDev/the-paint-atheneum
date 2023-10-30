//This file is for any stores needed throught the app

import { writable } from 'svelte/store';

export const headingData = writable({
	heading: 'Page Heading',
	subHeading: 'Page Subheading'
});

// Variable stores for getting paints from database
export const paintByRange = writable([]);
export const paintByColour = writable([]);