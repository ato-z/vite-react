import { ConfigProvider } from 'antd'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Loading } from './components/loading'

const App = () => {
  const [router, setRouter] = useState(null as unknown as ReturnType<typeof createBrowserRouter>)

  useEffect(() => {
    import('@/components/router').then((res) => {
      setRouter(res.default)
    })
  }, [setRouter])

  return <ConfigProvider>{router ? <RouterProvider router={router} /> : <Loading />}</ConfigProvider>
}

export default App
