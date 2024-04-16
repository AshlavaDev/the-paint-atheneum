export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/fonts/Forum-Regular.ttf","assets/fonts/NotoSansJP-Bold.otf","assets/fonts/NotoSansJP-Regular.otf","assets/fonts/PlayfairDisplaySC-Bold.ttf","assets/fonts/PlayfairDisplaySC-Regular.ttf","assets/images/darker-background.jpg","assets/images/lighter-background.jpg","assets/images/sampler-background.jpg","assets/images/watery-background.jpg","assets/logos/gwlogo.png","assets/logos/logovallejo.jpg","favicon.png"]),
	mimeTypes: {".ttf":"font/ttf",".otf":"font/otf",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.D3GW3OBF.js","app":"_app/immutable/entry/app.BBtt4MWt.js","imports":["_app/immutable/entry/start.D3GW3OBF.js","_app/immutable/chunks/entry.D--Gd_Nw.js","_app/immutable/chunks/scheduler.DQzrkqyK.js","_app/immutable/chunks/index.D2W-D5RK.js","_app/immutable/entry/app.BBtt4MWt.js","_app/immutable/chunks/scheduler.DQzrkqyK.js","_app/immutable/chunks/index.BpbkGuoE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
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
				id: "/api/get-colour",
				pattern: /^\/api\/get-colour\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/get-colour/_server.ts.js'))
			},
			{
				id: "/api/get-range",
				pattern: /^\/api\/get-range\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/get-range/_server.ts.js'))
			},
			{
				id: "/api/get-type",
				pattern: /^\/api\/get-type\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/get-type/_server.ts.js'))
			},
			{
				id: "/companies",
				pattern: /^\/companies\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/companies/gamesworkshop",
				pattern: /^\/companies\/gamesworkshop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/companies/vallejo",
				pattern: /^\/companies\/vallejo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/paintcolours",
				pattern: /^\/paintcolours\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/painttypes",
				pattern: /^\/painttypes\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
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
