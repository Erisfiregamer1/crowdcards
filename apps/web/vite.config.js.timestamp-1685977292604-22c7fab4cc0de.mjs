// vite.config.js
import { sveltekit } from "file:///rbd/pnpm-volume/e9a1a2a9-a802-493c-977a-f8a6886544aa/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { ViteImageOptimizer } from "file:///rbd/pnpm-volume/e9a1a2a9-a802-493c-977a-f8a6886544aa/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import { terser } from "file:///app/apps/web/node_modules/rollup-plugin-terser/rollup-plugin-terser.mjs";
import { SvelteKitPWA } from "file:///rbd/pnpm-volume/e9a1a2a9-a802-493c-977a-f8a6886544aa/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
var config = {
  plugins: [sveltekit()],
  server: {
    host: "0.0.0.0",
    port: 3e3,
    strictPort: true,
    fs: {
      allow: ["/rbd"]
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvYXBwL2FwcHMvd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvYXBwL2FwcHMvd2ViL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9hcHAvYXBwcy93ZWIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBzdmVsdGVraXQgfSBmcm9tICdAc3ZlbHRlanMva2l0L3ZpdGUnO1xuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcbmltcG9ydCB7IHRlcnNlciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdGVyc2VyJztcbmltcG9ydCB7IFN2ZWx0ZUtpdFBXQSB9IGZyb20gXCJAdml0ZS1wd2Evc3ZlbHRla2l0XCI7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmNvbnN0IGNvbmZpZyA9IHtcbiAgcGx1Z2luczogW3N2ZWx0ZWtpdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgcG9ydDogMzAwMCxcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxuICAgIGZzOiB7XG4gICAgICBhbGxvdzogW1wiL3JiZFwiXSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLGlCQUFpQjtBQUNuUCxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLGNBQWM7QUFDdkIsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTSxTQUFTO0FBQUEsRUFDYixTQUFTLENBQUMsVUFBVSxDQUFDO0FBQUEsRUFDckIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osSUFBSTtBQUFBLE1BQ0YsT0FBTyxDQUFDLE1BQU07QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
