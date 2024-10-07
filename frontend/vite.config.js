import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api" : {
        target: process.env.NODE_ENV === 'development' 
                 ? "http://localhost:5000" 
                 : "https://subhi-chat-app.onrender.com",  
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html', // Ensure this points to your main HTML file
      },
    },
  },
});