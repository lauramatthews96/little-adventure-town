// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { siteUrl } from "./src/config/site.ts";

export default defineConfig({
  site: siteUrl,
  trailingSlash: "never",
  redirects: {
    "/classes": "/",
    "/send": "/#sen",
    "/sen": "/#sen",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
