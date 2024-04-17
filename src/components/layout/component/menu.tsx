import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { DayTime } from './day-time'
import { routes } from '@/router'
import { useNavigate } from 'react-router-dom'
import { filterMenuItms } from '@/helper'
const { Sider } = Layout

const items = filterMenuItms(routes)

/**
 * 左侧菜单
 */
export const SiderMenu = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <DayTime />
      <Menu
        defaultSelectedKeys={['1']}
        items={items}
        onSelect={(item) => {
          navigate(item.key)
        }}
      />
    </Sider>
  )
}
