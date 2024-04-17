/**
 * 笔记
 */
import { request } from '@/helper/request'

/**
 * 测试请求
 * @returns
 */
export const getTest = () => {
  const url = './'
  return request<unknown>({ url })
}
