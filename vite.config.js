import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    host: '0.0.0.0',  // or use your local IP (e.g., '192.168.x.x')
    port: 3001,       // Or whatever port your Vite server uses
  }, 

})
