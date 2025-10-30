import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) =>{
  const env = loadEnv(mode, process.cwd())
  return {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  plugins: [vue()],
  server: {
      host: '0.0.0.0',
      port: 8090,
      allowedHosts: true,
      cors: true,
      proxy: {
        // 配置API代理
        '/axiosApi': {
          target: env.VITE_API_BASE_URL || 'http://192.168.0.40:8097', // 目标API服务器
          changeOrigin: true, // 允许跨域
          rewrite: (path) => path.replace(/^\/axiosApi/, ''), // 重写路径，去掉/api前缀
          // 配置WebSocket支持
          ws: true,
          // 代理超时时间
          timeout: 30000,
          // 请求头配置
          headers: {
            'X-Proxy-By': 'Vite'
          }
        }
      },
      // 自动打开浏览器
      open: false
    },
  css: {
    preprocessorOptions: {
      scss: {
        // 可以在这里添加全局scss变量文件
        // additionalData: '@import "./src/styles/variables.scss";',
      }
    }
  }
}
})
