import { c as create_ssr_component, e as escape, i as each, v as validate_component } from "../../../chunks/ssr.js";
const NewsPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="block rounded-md border border-darkblue bg-darkblue p-8 shadow-xl text-offwhite"><h3 class="mt-3 text-xl md:text-2xl font-bold">${escape(post.title)}</h3> <p class="mt-4 md:text-lg">${escape(post.content)}</p> <p class="mt-4 md:text-lg">Date Posted: ${escape(post.date)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex-grow max-w-3/5 px-3"><h2 class="font-serif text-2xl md:text-4xl text-darkblue text-center py-5" data-svelte-h="svelte-1afssph">Latest News</h2> <div class="flex flex-col-reverse gap-6 py-4 md:px-20">${each(data.news, (newsItem) => {
    return `${validate_component(NewsPost, "NewsPost").$$render($$result, { post: newsItem }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
