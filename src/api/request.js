import axios from "axios";

// 创建axios实例
const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,// 从环境变量读取API地址
    timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 添加token
        const token = localStorage.getItem('token')
        if (token) {
            // 
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 统一处理响应数据格式（根据后端约定调整）
        return response.data
    },
    error => {
        // 统一处理错误（如401 跳转登录）
        if (error.response?.status === 401) {
            router.push('/login')
        }

        return Promise.reject(error)
    }
)

export default service