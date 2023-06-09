import adapter from "svelte-adapter-deno";
import preprocess from "svelte-preprocess";
import { importAssets } from "svelte-preprocess-import-assets";
// you don't need to do this if you're using generateSW strategy in your app
const generateSW = false;
/** @type {import('@sveltejs/kit').Config}*/
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess(), importAssets()],
  kit: {
    csp: {
      directives: {
        "script-src": [
          "self",
          "https://cdn.jsdelivr.net/npm/eruda",
          "https://jscdn.glitch.me/cdn/authflow.js",
          "https://unpkg.com/canvas-particle-network",
          "unsafe-inline",
        ],
        "object-src": ["none"],
        "base-uri": ["none"],
      },
    },
    adapter: adapter({
      precompress: true,
    }),
    serviceWorker: {
      register: false,
    },
    files: {
      // you don't need to do this if you're using generateSW strategy in your app
      serviceWorker: generateSW ? undefined : "src/prompt-sw.ts",
    },
    outDir: ".svelte-kit",
    alias: {
      $components: "src/lib/components",
      "$components/*": "src/lib/components/*",
    },
  },
  shadcn: {
    componentPath: "./src/lib/components/ui",
  },
};
export default config;
