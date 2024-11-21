import * as server from '../entries/pages/portfolio/_slug_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.CINZKLEx.js","_app/immutable/chunks/legacy.ntPbVVOV.js","_app/immutable/chunks/runtime.dN9BK6sr.js","_app/immutable/chunks/render.JDxcIra-.js","_app/immutable/chunks/store.BhvpMH-0.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/utils.DlPHdnEl.js","_app/immutable/chunks/svelte-head.D5RJ7fy0.js","_app/immutable/chunks/props.vc5e-vQf.js","_app/immutable/chunks/slot.Hg9Sb8Ni.js"];
export const stylesheets = ["_app/immutable/assets/9.B73Mwm78.css"];
export const fonts = [];
