import axios, { AxiosRequestConfig } from 'axios'
import { siteConfig } from '@/config'

/** axios实例 */
export const baseURL = siteConfig.domain
export const axiosInstance = axios.create({
  baseURL: siteConfig.domain,
  headers: {},
})

/**
 * 获取token
 */
let token = window.localStorage.getItem('token')
const getToken = async () => token
const getTokenByZerg = async () => ''

/** 发起请求前 */
axiosInstance.interceptors.request.use(async (config) => {
  const { url } = config
  if (url === '/master/v1/token' || url === '/master/v1/login') return config

  const { headers } = config
  const token = await getToken()
  headers.token = token

  return config
})

axiosInstance.interceptors.response.use(
  (res) => res.data,
  async (err) => {
    if (!err.response) return Promise.reject(err)

    const { response, code } = err
    const { url, method } = err.config
    const { status } = response
    if (response?.data) {
      const data: { errorCode: number } = response.data

      // sign失效， 重登
      if (data.errorCode === 3000 || data.errorCode === 3001) {
        const { location } = window
        window.localStorage.removeItem('sign')
        window.localStorage.removeItem('token')
        if (location.pathname !== '/login') {
          location.reload()
        }
      }

      // token失效, 刷新token并重发
      if (data.errorCode === 4000) {
        await getTokenByZerg()
        return axiosInstance(response.config)
      }

      return Promise.reject({ ...data, method, status, code, url })
    }

    return Promise.reject(err)
  }
)

/**
 * 发起请求
 * @param op
 */
export const request = <R>(op: AxiosRequestConfig) => {
  return <Promise<R>>axiosInstance(op)
}
