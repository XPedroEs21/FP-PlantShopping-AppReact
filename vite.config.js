import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FP_PlantShopping_AppReact",
  plugins: [react()],
})
