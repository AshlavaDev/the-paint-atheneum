import { c as create_ssr_component, h as add_attribute, e as escape, i as each, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { b as paintByType } from "../../../chunks/store.js";
import { P as PaintList } from "../../../chunks/PaintList.js";
const TypeChooseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let radioButton;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `<div><input type="radio" name="typeOption"${add_attribute("value", type, 0)}${add_attribute("id", type, 0)} class="peer hidden"${add_attribute("this", radioButton, 0)}> <label${add_attribute("for", type, 0)} class="paint-list-selector"><p class="text-sm md:text-lg">${escape(type)}</p></label></div>`;
});
const ChooseType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const types = ["Acrylic", "Acrylic Ink", "Air", "Contrast", "Special", "Spray", "Wash"];
  return `<div class="py-6 flex justify-center"><fieldset class="flex flex-col items-center px-4 py-2"><h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5" data-svelte-h="svelte-c7k0dr">Choose a Type of Paint</h2> <legend class="sr-only" data-svelte-h="svelte-3wt57y">Choose a Type of Paint</legend> <div class="flex flex-wrap justify-center gap-4 font-sans">${each(types, (type) => {
    return `${validate_component(TypeChooseButton, "TypeChooseButton").$$render($$result, { type }, {}, {})}`;
  })}</div></fieldset></div>`;
});
const TypeSelectText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <p class="message" data-svelte-h="svelte-19rr66w">Please select a type of paint</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paintByType, $$unsubscribe_paintByType;
  $$unsubscribe_paintByType = subscribe(paintByType, (value) => $paintByType = value);
  $$unsubscribe_paintByType();
  return `<section class="flex-grow flex flex-col items-center px-3">${validate_component(ChooseType, "ChooseType").$$render($$result, {}, {}, {})} <div class="lg:w-[80%] flex flex-col items-center">${$paintByType.length > 0 ? `${validate_component(PaintList, "PaintList").$$render($$result, { paints: $paintByType }, {}, {})}` : `${validate_component(TypeSelectText, "TypeSelectText").$$render($$result, {}, {}, {})}`}</div></section>`;
});
export {
  Page as default
};
