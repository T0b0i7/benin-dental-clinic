import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves project sites from /<repo-name>/. Keep the plain root
  // path for local development and let the deploy script set GITHUB_PAGES.
  base: process.env.GITHUB_PAGES ? "/benin-dental-clinic/" : "/",
});
