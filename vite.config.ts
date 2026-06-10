import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: `base` must match the GitHub repository name when hosting on
// GitHub Pages at https://<user>.github.io/<repo>/.
// When/if a custom domain (e.g. aenerzy.com) is connected, change this to "/".
export default defineConfig({
  base: "/anerzy-webiste/",
  plugins: [react()],
});
