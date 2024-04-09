import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { p as paintByRange } from "../../../../chunks/store.js";
import { C as ChooseRange, R as RangeSelectText } from "../../../../chunks/RangeSelectText.js";
import { P as PaintList } from "../../../../chunks/PaintList.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $paintByRange, $$unsubscribe_paintByRange;
  $$unsubscribe_paintByRange = subscribe(paintByRange, (value) => $paintByRange = value);
  const pageData = {
    name: "Vallejo",
    brand: "vallejo",
    ranges: ["Game Color", "Model Color"]
  };
  $$unsubscribe_paintByRange();
  return `<section class="flex-grow flex flex-col items-center"><h2 class="font-serif text-3xl md:text-6xl text-darkblue text-center py-3">${escape(pageData.name)}</h2> <img src="/assets/logos/logovallejo.jpg" width="150px" height="85" alt="Vallejo Logo"> ${validate_component(ChooseRange, "ChooseRange").$$render(
    $$result,
    {
      brand: pageData.brand,
      ranges: pageData.ranges
    },
    {},
    {}
  )} <div class="w-[80%]">${$paintByRange.length > 0 ? `${validate_component(PaintList, "PaintList").$$render(
    $$result,
    {
      paints: $paintByRange,
      isCompanyPage: true
    },
    {},
    {}
  )}` : `${validate_component(RangeSelectText, "RangeSelectText").$$render($$result, {}, {}, {})}`}</div></section>`;
});
export {
  Page as default
};
