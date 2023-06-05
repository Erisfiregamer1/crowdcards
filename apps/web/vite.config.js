import { sveltekit } from '@sveltejs/kit/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { terser } from 'rollup-plugin-terser';
import { SvelteKitPWA } from "@vite-pwa/sveltekit";

const generateSW = true

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    fs: {
      allow: ["/rbd"],
    },
  },
};

export default config;
