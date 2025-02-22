import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Shopping-Cart-React/",
  build: {
    outDir: 'dist',
    emptyOutDir: true // Șterge folderul vechi la fiecare build
  }
})
