import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills(), tailwindcss()],
  define: { "process.env": {} },

  base: "/",
  preview: {
    port: 8080,
    strictPort: true,
  },
});