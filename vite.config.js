import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/],
    }),
    vueJsx(),
    Markdown()],
  build: {
    outDir: 'aloneUI',
    rollupOptions: {
      external: ["vue", "@element-plus/icons-vue"],
      output: {
        globals: {
          vue: "vue"
        }
      }
    },
    lib: {
      entry: './packages/index.js',
      name: 'alone-ui'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/assets/styles/style.scss" as *;'
      }
    }
  }
})