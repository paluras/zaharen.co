import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://my-project-n0jf.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
      '/zaharen-api': {
        target: 'https://www.zaharen.co/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zaharen-api/, '/api'),
      },
    }
  }
})
