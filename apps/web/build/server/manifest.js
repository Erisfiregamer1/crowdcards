const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cclogo-layout.svg","cclogo.png","cclogo.svg","favicon.ico","favicon.svg","robots.txt","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".ico":"image/vnd.microsoft.icon",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.65de0e7a.js","app":"_app/immutable/entry/app.84e20cb5.js","imports":["_app/immutable/entry/start.65de0e7a.js","_app/immutable/chunks/index.5b37bd6f.js","_app/immutable/chunks/singletons.eb597214.js","_app/immutable/entry/app.84e20cb5.js","_app/immutable/chunks/index.5b37bd6f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-83eabd0a.js'),
			() => import('./chunks/1-f0a6bbc5.js')
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
