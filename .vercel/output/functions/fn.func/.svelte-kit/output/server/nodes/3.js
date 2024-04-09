

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bq6y1HGE.js","_app/immutable/chunks/scheduler.DQzrkqyK.js","_app/immutable/chunks/index.BpbkGuoE.js","_app/immutable/chunks/store.D5ovwJGA.js","_app/immutable/chunks/index.D2W-D5RK.js"];
export const stylesheets = [];
export const fonts = [];
