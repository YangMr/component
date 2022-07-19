/**
 * @author YangLing
 * @date 2022/7/19 12:55
 */
// 导入axios
import axios from 'axios'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 统一了传参处理
const request = (options) => {
  // if (options.method.toLowerCase() === 'get') {
  //   options.params = options.data || {}
  // }
  // console.log(options)
  return service(options)
}

// 导出axios实例对象
export default request
