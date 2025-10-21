import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api', // 基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 可以在这里添加token等认证信息
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // 显示加载状态
    // loadingInstance.show()
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // 隐藏加载状态
    // loadingInstance.hide()
    
    const res = response.data
    
    // 根据后端约定的响应格式进行处理
    if (res.code !== 200) {
      // 处理错误情况
      console.error('响应错误:', res.message || '服务器错误')
      
      // 可以根据不同的错误码进行不同的处理
      if (res.code === 401) {
        // 未授权，跳转到登录页
        // router.push('/login')
      }
      
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // 隐藏加载状态
    // loadingInstance.hide()
    
    console.error('响应错误:', error)
    
    // 处理网络错误等情况
    if (!error.response) {
      console.error('网络错误，请检查网络连接')
    }
    
    return Promise.reject(error)
  }
)

export default service

// 导出常用的请求方法
export const get = (url, params = {}) => {
  return service.get(url, { params })
}

export const post = (url, data = {}) => {
  return service.post(url, data)
}

export const put = (url, data = {}) => {
  return service.put(url, data)
}

export const del = (url) => {
  return service.delete(url)
}