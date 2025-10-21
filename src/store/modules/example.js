import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', {
  // 状态
  state: () => ({
    count: 0,
    userInfo: null,
    loading: false
  }),

  // Getters
  getters: {
    doubleCount: (state) => state.count * 2,
    isLoggedIn: (state) => !!state.userInfo
  },

  // Actions
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    async fetchUserInfo() {
      this.loading = true
      try {
        // 模拟异步请求
        // const res = await api.getUserInfo()
        // this.userInfo = res.data
        this.userInfo = { name: '测试用户', id: 1 }
      } catch (error) {
        console.error('获取用户信息失败', error)
      } finally {
        this.loading = false
      }
    },
    reset() {
      this.count = 0
      this.userInfo = null
    }
  }
})