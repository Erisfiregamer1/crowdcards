const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cclogo-layout.svg","cclogo.png","cclogo.svg","favicon.ico","favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3e2847fd.js","app":"_app/immutable/entry/app.d5b6d45d.js","imports":["_app/immutable/entry/start.3e2847fd.js","_app/immutable/chunks/index.5b37bd6f.js","_app/immutable/chunks/singletons.c185ea9d.js","_app/immutable/entry/app.d5b6d45d.js","_app/immutable/chunks/preload-helper.5e4dbdac.js","_app/immutable/chunks/index.5b37bd6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-83eabd0a.js'),
			() => import('./chunks/1-ebbc47de.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
