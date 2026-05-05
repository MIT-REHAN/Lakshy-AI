import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base is '/' for Vercel. If deploying to GitHub Pages, set env var:
//   VITE_BASE_PATH=/LakshyDemo in your GH Actions workflow.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
