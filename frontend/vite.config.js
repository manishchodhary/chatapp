// filepath: vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [tailwindcss()],
})