import { defineConfig } from "astro/config";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

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
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});
