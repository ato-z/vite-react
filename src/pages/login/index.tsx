import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import './index.css'
import { LoginForm, LoginEvent } from './component/login-form'
import { upDocumentTitle } from '@/helper'
import { useSign } from '@/store/auth'

/**
 * 登录页面
 */
export const Login = () => {
  upDocumentTitle('Authorized Login')

  const [, setSign] = useSign()
  const navigate = useNavigate()

  const [messageApi, contextHolder] = message.useMessage()

  const onSubmit: LoginEvent = async (_post) => {
    messageApi.open({
      type: 'loading',
      content: 'Trying to log in',
      duration: 0,
    })

    console.log('登录信息', _post)

    try {
      setSign('登录之后的密钥')
      navigate('/')
    } catch (err: unknown) {}

    messageApi.destroy()
  }

  return (
    <main className="login-view">
      {contextHolder}
      <i className="top"></i>
      <i className="bottom"></i>
      <LoginForm onSubmit={onSubmit} />
    </main>
  )
}

export default Login
