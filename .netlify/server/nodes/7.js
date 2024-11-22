import * as universal from '../entries/pages/photography/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/photography/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/photography/+page.js";
export const imports = ["_app/immutable/nodes/7.BKuP4M0b.js","_app/immutable/chunks/legacy.DPWX_naR.js","_app/immutable/chunks/runtime.CA0KGdAn.js","_app/immutable/chunks/render.BcPAeTtW.js","_app/immutable/chunks/store.B_bTT4Eo.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/utils.BHWH0jEd.js","_app/immutable/chunks/svelte-head.Db-2A8uA.js","_app/immutable/chunks/each.fQkuu2uF.js","_app/immutable/chunks/attributes.CFHGPOXr.js","_app/immutable/chunks/props.M33brQBh.js","_app/immutable/chunks/props.CKdx6wN3.js","_app/immutable/chunks/slot.DwRCsVau.js"];
export const stylesheets = ["_app/immutable/assets/7.D5DQmZiu.css"];
export const fonts = [];
