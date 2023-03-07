import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      outDir: 'build'
    },
    server: {
      port: Number(process.env.VITE_PORT_SERVE) || 8080,
      open: true
    }
  })
}
// https://vitejs.dev/config/
