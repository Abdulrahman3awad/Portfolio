import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// `BASE_PATH` lets the same build work on a root domain (Netlify/Vercel, default
// '/') or under a sub-path (GitHub Pages -> '/Portfolio/').
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
