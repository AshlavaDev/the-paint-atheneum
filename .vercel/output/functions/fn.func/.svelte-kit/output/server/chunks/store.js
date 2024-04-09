import { w as writable } from "./index.js";
const headingData = writable({
  heading: "Page Heading",
  subHeading: "Page Subheading"
});
const topValue = writable(0);
const paintByRange = writable([]);
const paintByColour = writable([]);
const paintByType = writable([]);
export {
  paintByColour as a,
  paintByType as b,
  headingData as h,
  paintByRange as p,
  topValue as t
};
