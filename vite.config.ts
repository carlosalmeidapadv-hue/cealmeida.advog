// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static export for GitHub Pages: prerenders every route to plain HTML files
    // (no server needed at runtime).
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  // Skip Nitro entirely. By default this wrapper builds a Cloudflare Worker
  // bundle (server + wrangler.json) — that's why the last build had no HTML
  // pages, just JS/CSS + a server nothing can run on GitHub Pages.
  // With nitro off, TanStack Start's own prerenderer writes plain static
  // HTML into the client build output (dist/client).
  nitro: false,
});
