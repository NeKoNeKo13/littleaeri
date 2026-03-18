import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ❗ GitHub Pages repo name
  base: "/littleaeri/",

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",

    // Ensure index.html is the entry and paths are correctly resolved
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },

  // Optional: ensure asset URLs are relative for SPA routing
  // This is safer if you ever host under subpaths
  // assetsDir: "assets",
}));
