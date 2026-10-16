import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/three/build/three.core.js")) return "three-core";
          if (id.includes("/three/")) return "three-renderer";
          if (id.includes("/gsap/")) return "motion";
        },
      },
    },
  },
});
