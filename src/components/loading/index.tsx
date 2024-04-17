import React, { Suspense } from 'react'
import './index.css'

export const Loading = () => {
  return (
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

/**
 * 包裹一个异步组件，加载成功前显示loading状态
 */
export default ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
