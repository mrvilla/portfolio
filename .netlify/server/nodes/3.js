

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Dp_BTp-1.js","_app/immutable/chunks/legacy.ntPbVVOV.js","_app/immutable/chunks/runtime.dN9BK6sr.js","_app/immutable/chunks/svelte-head.D5RJ7fy0.js"];
export const stylesheets = ["_app/immutable/assets/3.BbZtBcPB.css"];
export const fonts = [];
