import { createBrowserRouter } from 'react-router-dom'
import { IframeLayout } from '@/components/layout'
import { ErrorElement } from './errorElement'
import { routeChildren, LoginElement, NotFoundElement } from './withItems'

const appRouter = createBrowserRouter([
  // 框架路由
  {
    path: '/',
    element: <IframeLayout />,
    children: routeChildren,
    errorElement: <ErrorElement />,
  },
  // 登录路由
  {
    path: '/login',
    element: LoginElement,
    errorElement: <ErrorElement />,
  },
  // 404路由
  {
    path: ':miss',
    element: NotFoundElement,
    errorElement: <ErrorElement />,
  },
])

export default appRouter
