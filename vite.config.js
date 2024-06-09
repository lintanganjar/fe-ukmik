import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType:'prompt',
      includeAssests:['/favicon/favicon.ico'],
      manifest:{
        name:"UKMIK | Organization Management System",
        short_name:"UKMIK",
        description:"an management system for organization",
        icons:[{
          src: '/pwa/android-192.png',
          sizes:'192x192',
          type:'image/png',
          purpose:'favicon'
        },
        {
          src: '/pwa/android-512.png',
          sizes:'512x512',
          type:'image/png',
          purpose:'favicon'
        },
        {
          src: '/pwa/ios-180.png',
          sizes:'180x180',
          type:'image/png',
          purpose:'apple touch icon',
        },
      ],
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display:"standalone",
      scope:'/',
      start_url:"/",
      orientation:'portrait'
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
