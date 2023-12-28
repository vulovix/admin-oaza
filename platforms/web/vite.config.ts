import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import tsConfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    viteCompression(),
    VitePWA({
      manifestFilename: "manifest.json",
      manifest: {
        name: "Oaza",
        short_name: "Oaza",
        description: "Welcome to Oasis",
        background_color: "#FFFFFF",
        display: "standalone",
        theme_color: "#000000",
        start_url: "/",
        icons: [
          { src: "/favicon192x192.png", type: "image/png", sizes: "192x192" },
          { src: "/favicon192x192.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
          { src: "/favicon512x512.png", type: "image/png", sizes: "512x512" },
          { src: "/favicon512x512.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
        ],
      },
      selfDestroying: true,
      strategies: "injectManifest",
      registerType: "autoUpdate",
      srcDir: "src",
      filename: "src-sw.js",
      injectRegister: "script",
      devOptions: {
        enabled: false,
        type: "module",
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        sourcemap: true,
        minifyInternalExports: true,
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          redux: ["redux", "react-redux", "redux-saga", "redux-injectors", "redux-persist", "@reduxjs/toolkit"],
          animator: ["react-ticker"],
          // equilibrius: ["@equilibrius/ui", "@equilibrius/ui-standalone", "@equilibrius/web-components"],
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
