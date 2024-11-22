import * as server from '../entries/pages/portfolio/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.CnVgjo1D.js","_app/immutable/chunks/legacy.DPWX_naR.js","_app/immutable/chunks/runtime.CA0KGdAn.js","_app/immutable/chunks/render.BcPAeTtW.js","_app/immutable/chunks/store.B_bTT4Eo.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/utils.BHWH0jEd.js","_app/immutable/chunks/svelte-head.Db-2A8uA.js","_app/immutable/chunks/props.CKdx6wN3.js","_app/immutable/chunks/slot.DwRCsVau.js"];
export const stylesheets = ["_app/immutable/assets/9.B73Mwm78.css"];
export const fonts = [];
