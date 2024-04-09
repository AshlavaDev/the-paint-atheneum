import { c as create_ssr_component } from "../../chunks/ssr.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex-grow flex flex-col items-center justify-center px-3 md:min-h-screen" data-svelte-h="svelte-h3d5qu"><h1 class="font-serif text-2xl md:text-4xl text-darkblue py-2 text-center">404 Page Not Found</h1></div>`;
});
export {
  Error as default
};
