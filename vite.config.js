import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/moviehub/", 
  server:{
    port: 8086,
    host: true,
    open: true
  },
})
