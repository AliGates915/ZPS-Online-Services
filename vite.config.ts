import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'components': ['./src/main.tsx'], // Ensure this file exists
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase the limit if needed
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
