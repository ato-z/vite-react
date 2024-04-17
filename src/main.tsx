import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import Loading from '@/components/loading/index.tsx'
import '@/assets/style/main.css'

const App = lazy(() => import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loading>
      <App />
    </Loading>
  </React.StrictMode>
)
