import { useNavs } from '@/store/navs'
import { HomeOutlined } from '@ant-design/icons'
import { Layout, Avatar, Space, Typography, Breadcrumb } from 'antd'
import { useEffect, useState } from 'react'

export const Header = ({ backgroundColor }: { backgroundColor: string }) => {
  const [navs] = useNavs()
  const [breadcrumb, setBreadcrumb] = useState<Array<{ title: string | JSX.Element }>>([])

  /** 面包屑 */
  useEffect(() => {
    const items = [
      {
        href: '/',
        title: <HomeOutlined />,
      },
      ...navs.map((nav) => ({ title: nav.title })),
    ]
    setBreadcrumb(items)
  }, [])

  return (
    <Layout.Header style={{ backgroundColor }}>
      <Space style={{ justifyContent: 'space-between', width: '100%' }}>
        <Breadcrumb items={breadcrumb}></Breadcrumb>
        <Space>
          <Avatar size={40}>昵称</Avatar>
          <Typography.Text>系统管理员</Typography.Text>
        </Space>
      </Space>
    </Layout.Header>
  )
}
