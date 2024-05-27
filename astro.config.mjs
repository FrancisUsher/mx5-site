import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://mx5.usher.codes",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    clientPrerender: true,
  },
});
