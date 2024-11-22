

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.T8mVU_ft.js","_app/immutable/chunks/legacy.DPWX_naR.js","_app/immutable/chunks/runtime.CA0KGdAn.js","_app/immutable/chunks/svelte-head.Db-2A8uA.js"];
export const stylesheets = ["_app/immutable/assets/3.BbZtBcPB.css"];
export const fonts = [];
