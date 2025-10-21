import { createPinia } from 'pinia'

// 创建pinia实例
const pinia = createPinia()

// 可以在这里添加全局插件
pinia.use(({ store }) => {
  // 可以添加持久化等功能
})

export default pinia

// 导出defineStore方法，方便在组件中使用
export * from 'pinia'