import { c as create_ssr_component, h as add_attribute, e as escape, i as each, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { a as paintByColour } from "../../../chunks/store.js";
import { P as PaintList } from "../../../chunks/PaintList.js";
const ColourChooseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { colour } = $$props;
  let radioButton;
  if ($$props.colour === void 0 && $$bindings.colour && colour !== void 0)
    $$bindings.colour(colour);
  return `<div><input type="radio" name="ColourOption"${add_attribute("value", colour, 0)}${add_attribute("id", colour, 0)} class="peer hidden"${add_attribute("this", radioButton, 0)}> <label${add_attribute("for", colour, 0)} class="paint-list-selector"><p class="text-sm md:text-lg">${escape(colour)}</p></label></div>`;
});
const ChooseColour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const colours = [
    "Black",
    "Blue",
    "Bone",
    "Brass",
    "Bronze",
    "Brown",
    "Copper",
    "Flesh",
    "Gold",
    "Green",
    "Grey",
    "Orange",
    "Pink",
    "Purple",
    "Red",
    "Silver",
    "Turquoise",
    "White",
    "Yellow"
  ];
  return `<div class="py-6 flex justify-center"><fieldset class="flex flex-col items-center px-4 py-2"><h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5" data-svelte-h="svelte-iphsup">Choose a Colour</h2> <legend class="sr-only" data-svelte-h="svelte-1v5rmq1">Choose a Colour</legend> <div class="flex flex-wrap justify-center gap-4 font-sans">${each(colours, (colour) => {
    return `${validate_component(ColourChooseButton, "ColourChooseButton").$$render($$result, { colour }, {}, {})}`;
  })}</div></fieldset></div>`;
});
const ColourSelectText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <p class="message" data-svelte-h="svelte-1u4rhk1">Please select a colour</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paintByColour, $$unsubscribe_paintByColour;
  $$unsubscribe_paintByColour = subscribe(paintByColour, (value) => $paintByColour = value);
  $$unsubscribe_paintByColour();
  return `<section class="flex-grow flex flex-col items-center px-3">${validate_component(ChooseColour, "ChooseColour").$$render($$result, {}, {}, {})} <div class="w-[80%]">${$paintByColour.length > 0 ? `${validate_component(PaintList, "PaintList").$$render($$result, { paints: $paintByColour }, {}, {})}` : `${validate_component(ColourSelectText, "ColourSelectText").$$render($$result, {}, {}, {})}`}</div></section>`;
});
export {
  Page as default
};
