import { lazy } from 'react'
import { HomeOutlined } from '@ant-design/icons'

const Home = lazy(() => import('@/pages/other'))

export const otherRouter: RouteItem = {
  label: '其他页面',
  icon: <HomeOutlined />,
  path: '/other',
  element: <Home />,
  meta: {
    title: '首页',
    paths: [
      { title: '首页', path: '/' },
      { title: '其他页面', path: '/other' },
    ],
  },
}
