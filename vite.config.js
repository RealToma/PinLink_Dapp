import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import ViteAutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteAutoImport({
    imports:["react"],
    dirs:["./src/utils"],
    dts: "./src/auto-imports.d.ts",
  })],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
})
