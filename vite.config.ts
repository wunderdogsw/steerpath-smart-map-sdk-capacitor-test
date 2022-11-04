/// <reference types="vitest" />
/// <reference types="vite/client" />

/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  resolve: {
    // Workaround to fix inline dependency of a dependency, which is the case in @ionic/react
    mainFields: ["module"]
  },
  test: {
    globals: true,
    environment: "jsdom",
    threads: false,
    setupFiles: "./test/setup.ts",
    css: false
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
}));
