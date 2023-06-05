import { sveltekit } from '@sveltejs/kit/vite';

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
