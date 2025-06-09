import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.tsx"),
      formats: ["es"]
    },
    minify: false,
    copyPublicDir: false
  },
  // below is necessary to avoid React using process,
  // see the Environment Variables box under https://vite.dev/guide/build#css-support
  define: { 'process.env.NODE_ENV': '"production"' }
})
