import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        // 可以在这里添加全局scss变量文件
        // additionalData: '@import "./src/styles/variables.scss";',
      }
    }
  }
})
