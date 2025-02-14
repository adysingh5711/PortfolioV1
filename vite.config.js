import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio",
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    sourcemap: true, // Enable source maps
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Create a separate chunk for vendor libraries
          }
        },
      },
    },
  },
});
