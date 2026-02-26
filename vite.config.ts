import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/remote-app-v3/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      minify: false,
      devOptions: {
        enabled: true,
      },
      workbox: {
        navigateFallback: "/remote-app-v3/index.html",
        runtimeCaching: [
          {
            urlPattern: ({ url }) =>
              url.origin === "https://jsonplaceholder.typicode.com",
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteButton": "./src/components/RemoteButton.tsx",
        "./Todos": "./src/pages/todos.tsx",
      },
      shared: ["react", "react-dom", "@tanstack/react-query"],
    }),
  ],
  server: {
    cors: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5001,
    strictPort: true,
  },
});
