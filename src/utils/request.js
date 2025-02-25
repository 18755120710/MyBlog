import axios from "axios";

// 创建一个新的 axios 实例，并设置基地址
const axiosInstance = axios.create({
    baseURL: 'http://localhost:7071',
    headers: {
        'Content-Type': 'application/json'
    }
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 添加必要的请求头等
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

// 导出带有拦截器和基地址的 axios 实例
export default axiosInstance;