

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DHsdN52y.js","_app/immutable/chunks/scheduler.DQzrkqyK.js","_app/immutable/chunks/index.BpbkGuoE.js"];
export const stylesheets = [];
export const fonts = [];
