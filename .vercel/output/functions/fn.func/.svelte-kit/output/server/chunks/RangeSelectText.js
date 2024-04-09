import { c as create_ssr_component, h as add_attribute, e as escape, i as each, v as validate_component } from "./ssr.js";
const RangeChooseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { range } = $$props;
  let { brand } = $$props;
  let radioButton;
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.brand === void 0 && $$bindings.brand && brand !== void 0)
    $$bindings.brand(brand);
  return `<div><input type="radio" name="ColourOption"${add_attribute("value", range, 0)}${add_attribute("id", range, 0)} class="peer hidden"${add_attribute("this", radioButton, 0)}> <label${add_attribute("for", range, 0)} class="paint-list-selector"><p class="text-sm md:text-lg">${escape(range)}</p></label></div>`;
});
const ChooseRange = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ranges } = $$props;
  let { brand } = $$props;
  if ($$props.ranges === void 0 && $$bindings.ranges && ranges !== void 0)
    $$bindings.ranges(ranges);
  if ($$props.brand === void 0 && $$bindings.brand && brand !== void 0)
    $$bindings.brand(brand);
  return `<div class="py-6 flex justify-center"><fieldset class="flex flex-col items-center px-4 py-2"><h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5">Choose a ${escape(brand)} Range</h2> <legend class="sr-only">Choose a ${escape(brand)} Range</legend> <div class="flex flex-wrap justify-center gap-4 font-sans">${each(ranges, (range) => {
    return `${validate_component(RangeChooseButton, "RangeChooseButton").$$render($$result, { brand, range }, {}, {})}`;
  })}</div></fieldset></div>`;
});
const RangeSelectText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <p class="message" data-svelte-h="svelte-9kwx1c">Please select a range</p>`;
});
export {
  ChooseRange as C,
  RangeSelectText as R
};
