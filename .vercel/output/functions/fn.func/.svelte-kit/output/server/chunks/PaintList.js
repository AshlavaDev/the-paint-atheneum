import { c as create_ssr_component, e as escape, h as add_attribute, i as each, v as validate_component } from "./ssr.js";
const PaintCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paint } = $$props;
  if ($$props.paint === void 0 && $$bindings.paint && paint !== void 0)
    $$bindings.paint(paint);
  return `<div class="flex flex-col justify-between gap-2 min-w-full h-96 border-2 border-black py-4 px-3 rounded-lg bg-red-100 hover:shadow-2xl hover:shadow-slate-800 font-sans text-sm md:text-base"><div class="w-2/5 h-2/5 border border-black rounded self-center" style="${"background-color: " + escape(paint.hex_colour, true) + ";"}"></div> <h4 class="tmt-4 text-lg md:text-xl">${escape(paint.paint_name)}</h4> <div class="flex flex-col gap-1 items-start mt-2"><p>Company: ${escape(paint.company)}</p> <p>Range: ${escape(paint.range)}</p> <p>Colour: ${escape(paint.colour_category)}</p> <p>Metallic:
			${paint.is_metallic ? `<span data-svelte-h="svelte-956xxn">Yes</span>` : `<span data-svelte-h="svelte-ynuvkt">No</span>`}</p> <p>Paint Type: ${escape(paint.type)}</p> <p>Currently Made:
			${paint.is_current ? `<span data-svelte-h="svelte-956xxn">Yes</span>` : `<span data-svelte-h="svelte-ynuvkt">No</span>`}</p></div> <a${add_attribute("href", paint.link_url, 0)} target="_blank" class="self-center px-2 py-1 rounded-md block bg-darkblue border border-darkblue text-offwhite hover:bg-offwhite hover:text-darkblue">Find in Store</a></div>`;
});
const PaintList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paints } = $$props;
  let { isPaintTypePage = false } = $$props;
  let { isCompanyPage = false } = $$props;
  let { itemsPerPage = 15 } = $$props;
  let { currentPage = 1 } = $$props;
  let { sortBy = "paint_name" } = $$props;
  let filteredPaints;
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let currentPagePaints = [];
  if ($$props.paints === void 0 && $$bindings.paints && paints !== void 0)
    $$bindings.paints(paints);
  if ($$props.isPaintTypePage === void 0 && $$bindings.isPaintTypePage && isPaintTypePage !== void 0)
    $$bindings.isPaintTypePage(isPaintTypePage);
  if ($$props.isCompanyPage === void 0 && $$bindings.isCompanyPage && isCompanyPage !== void 0)
    $$bindings.isCompanyPage(isCompanyPage);
  if ($$props.itemsPerPage === void 0 && $$bindings.itemsPerPage && itemsPerPage !== void 0)
    $$bindings.itemsPerPage(itemsPerPage);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.sortBy === void 0 && $$bindings.sortBy && sortBy !== void 0)
    $$bindings.sortBy(sortBy);
  {
    {
      filteredPaints = paints.filter((paint) => {
        return true;
      });
      startIndex = (currentPage - 1) * itemsPerPage;
      endIndex = startIndex + itemsPerPage;
      currentPagePaints = filteredPaints.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1).slice(startIndex, endIndex);
    }
  }
  return `<div class="text-lg text-darkblue flex flex-col items-center gap-6"><div><label for="sortBy" data-svelte-h="svelte-t3n136">Sort by:</label> <select id="sortBy" class="bg-white text-darkblue px-1 py-1 hover:bg-darkblue hover:text-offwhite font-sans"><option value="paint_name" data-svelte-h="svelte-ox67r5">Paint Name</option><option value="colour_category" data-svelte-h="svelte-1xe0iwz">Colour Category</option>${!isPaintTypePage ? `<option value="type" data-svelte-h="svelte-16c2kxa">Paint Type</option>` : ``}${!isCompanyPage ? `<option value="company" data-svelte-h="svelte-3ek4h4">Company</option>` : ``}</select></div> <div class="flex flex-col items-center"><label for="metallicFilter" data-svelte-h="svelte-wqeplu">Metallic Options</label> <div id="metallicFilter" class="flex gap-4"><div><input type="radio" id="all" name="metallicFilter" value="all"${add_attribute("checked", true, 1)}> <label for="all" data-svelte-h="svelte-1baoy3r">All Paints</label></div> <div><input type="radio" id="non-metallic" name="metallicFilter" value="non-metallic"${""}> <label for="non-metallic" data-svelte-h="svelte-11kcdb0">No Metallic Paints</label></div> <div><input type="radio" id="metallic" name="metallicFilter" value="metallic"${""}> <label for="metallic" data-svelte-h="svelte-1xk164n">Only Metallic Paints</label></div></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-6 py-4 px-2 lg:px-8 min-w-full">${each(currentPagePaints, (paint) => {
    return `${validate_component(PaintCard, "PaintCard").$$render($$result, { paint }, {}, {})}`;
  })}</div> <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-7 gap-2 mt-4 pb-4 max-w-xs md:max-w-md xl:max-w-lg">${each(Array(Math.ceil(filteredPaints.length / itemsPerPage)).fill(0), (_, i) => {
    return `<button class="${[
      "mx-2 px-4 py-2 rounded-md border border-darkblue hover:bg-darkblue hover:text-offwhite transition flex items-center justify-center",
      currentPage === i + 1 ? "selected" : ""
    ].join(" ").trim()}">${escape(i + 1)} </button>`;
  })}</div>`;
});
export {
  PaintList as P
};
