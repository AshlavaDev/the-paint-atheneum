import * as server from '../entries/pages/news/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/news/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BhkaJ9ox.js","_app/immutable/chunks/scheduler.DQzrkqyK.js","_app/immutable/chunks/index.BpbkGuoE.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.D5ovwJGA.js","_app/immutable/chunks/index.D2W-D5RK.js"];
export const stylesheets = [];
export const fonts = [];
