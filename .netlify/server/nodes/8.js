import * as server from '../entries/pages/portfolio/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portfolio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portfolio/+page.server.js";
export const imports = ["_app/immutable/nodes/8.YcXszTnD.js","_app/immutable/chunks/legacy.ntPbVVOV.js","_app/immutable/chunks/runtime.dN9BK6sr.js","_app/immutable/chunks/render.JDxcIra-.js","_app/immutable/chunks/store.BhvpMH-0.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/utils.DlPHdnEl.js","_app/immutable/chunks/svelte-head.D5RJ7fy0.js","_app/immutable/chunks/if.Cn2FZDQw.js","_app/immutable/chunks/each.CXnPg7tV.js","_app/immutable/chunks/attributes.DNYv2viV.js","_app/immutable/chunks/lifecycle.Dlg6fgJd.js","_app/immutable/chunks/props.vc5e-vQf.js","_app/immutable/chunks/index.Dv4mq4gu.js","_app/immutable/chunks/slot.Hg9Sb8Ni.js"];
export const stylesheets = ["_app/immutable/assets/8.BvUybauL.css"];
export const fonts = [];
