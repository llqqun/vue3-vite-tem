import { createApp } from 'vue'
import './styles/global.scss'
import App from './App.vue'
import router from './router'
import pinia from './store'

// 引入rem适配脚本
// import './utils/rem.js'

// 创建Vue应用实例
const app = createApp(App)

// 使用路由
app.use(router)

// 使用状态管理
app.use(pinia)

// 全局错误处理
app.config.errorHandler = (err, instance, info) => {
  console.error('Vue全局错误:', err)
  console.log('错误信息:', info)
}

// 挂载应用
app.mount('#app')
