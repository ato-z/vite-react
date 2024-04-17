import { createBrowserRouter } from 'react-router-dom'
import { IframeLayout } from '@/components/layout'
import { RequireAuth } from '@/components/auth'
import { ErrorElement } from './errorElement'
import { routeChildren, LoginElement, NotFoundElement } from './withItems'

const appRouter = createBrowserRouter([
  // 框架路由， 必须登录后才可访问
  {
    path: '/',
    element: (
      <RequireAuth>
        <IframeLayout />
      </RequireAuth>
    ),
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
