export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/.DS_Store","images/2023/.DS_Store","images/2023/foto-01-2023-min.jpg","images/2023/foto-02-2023-min.jpg","images/2023/foto-03-2023-min.jpg","images/2023/foto-04-2023-min.jpg","images/2023/foto-05-2023-min.jpg","images/2023/foto-06-2023-min.jpg","images/2024/.DS_Store","images/2024/foto-01-2024-min.jpg","images/2024/foto-02-2024-min.jpg","images/2024/foto-03-2024-min.jpg","images/2024/foto-04-2024-min.jpg","images/2024/foto-05-2024-min.jpg","images/2024/foto-06-2024-min.jpg","images/2024/foto-07-2024-min.jpg","images/2024/foto-08-2024-min.jpg","images/2024/foto-09-2024-min.jpg","images/2024/foto-10-2024-min.jpg","images/2024/foto-11-2024-min.jpg","images/2024/foto-12-2024-min.jpg","images/2024/foto-13-2024-min.jpg","images/2024/foto-14-2024-min.jpg","images/2024/foto-15-2024-min.jpg","images/2024/foto-16-2024-min.jpg","images/2024/foto-17-2024-min.jpg","images/2024/foto-18-2024-min.jpg","images/laptop_working.jpg","images/profile.jpg","logo-192.png","logo-512.png","projects/apert-web.png","projects/aptoix.svg","projects/bta-mobile.png","projects/bta-web.png","projects/bta.svg","projects/cemx.svg","projects/corupt-web-2.png","projects/corupt-web-3.png","projects/corupt-web.png","projects/crupt.png","projects/cso-web-2.png","projects/cso-web.png","projects/cso.png","projects/csus-web-2.png","projects/csus-web.png","projects/csus.svg","projects/cx-logos.png","projects/cx-mobile.png","projects/cx-web.png","projects/dk-web-2.png","projects/dk-web.png","projects/dk.svg","projects/eyen.svg","projects/eyevn.svg","projects/eyvn-design.png","projects/eyvn-web.png","projects/ix.svg","projects/qlmty.svg","projects/qlmy-web.png","projects/qlmy.svg","projects/revised-sig.svg","projects/revised-signum.svg","projects/samarok-web.png","projects/sem-mobile.png","projects/sem-web.png","projects/sgnum-web-2.png","projects/sgnum-web.png","projects/sgnum.svg","projects/sgum.svg","projects/sig-ds.png","projects/signum-website.png","projects/so.png","projects/so.svg","projects/staatd-web.png","social-icons/.DS_Store","social-icons/cp_icon.svg","social-icons/gh_icon.svg","social-icons/ig_icon.svg","social-icons/li_icon.svg","social-icons/mail_icon.svg","social-icons/yt_icon.svg","videos/.DS_Store","videos/dji_fly_video_clip.mp4"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".mp4":"video/mp4"},
	_: {
		client: {"start":"_app/immutable/entry/start.DJJXiQHx.js","app":"_app/immutable/entry/app.Ck8-j_MK.js","imports":["_app/immutable/entry/start.DJJXiQHx.js","_app/immutable/chunks/entry.CqiAj8uE.js","_app/immutable/chunks/runtime.dN9BK6sr.js","_app/immutable/chunks/utils.DlPHdnEl.js","_app/immutable/entry/app.Ck8-j_MK.js","_app/immutable/chunks/i18n.S3h9JN2c.js","_app/immutable/chunks/legacy.ntPbVVOV.js","_app/immutable/chunks/runtime.dN9BK6sr.js","_app/immutable/chunks/entry.CqiAj8uE.js","_app/immutable/chunks/utils.DlPHdnEl.js","_app/immutable/chunks/stores.D0rCKrjn.js","_app/immutable/chunks/render.JDxcIra-.js","_app/immutable/chunks/store.BhvpMH-0.js","_app/immutable/chunks/misc.B9QI8j-U.js","_app/immutable/chunks/svelte-head.D5RJ7fy0.js","_app/immutable/chunks/if.Cn2FZDQw.js","_app/immutable/chunks/props.vc5e-vQf.js","_app/immutable/chunks/index-client.spiJfc2E.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/demo",
				pattern: /^\/demo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/demo/paraglide",
				pattern: /^\/demo\/paraglide\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./entries/endpoints/experience/_server.js'))
			},
			{
				id: "/photography",
				pattern: /^\/photography\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: __memo(() => import('./entries/endpoints/photography/_server.js'))
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: __memo(() => import('./entries/endpoints/portfolio/_server.js'))
			},
			{
				id: "/portfolio/[slug]",
				pattern: /^\/portfolio\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
