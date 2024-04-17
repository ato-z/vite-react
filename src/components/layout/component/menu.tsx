import { useState } from 'react'
import { Layout, Menu } from 'antd'
import { DayTime } from './day-time'
import { routes } from '@/router'
import { useNavigate } from 'react-router-dom'
import { filterMenuItms } from '@/helper'
import { useTheme } from '@/store/theme'
const { Sider } = Layout

const items = filterMenuItms(routes)

/**
 * 左侧菜单
 */
export const SiderMenu = () => {
  const [themeJotai] = useTheme()
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  return (
    <Sider theme={themeJotai} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <DayTime />
      <Menu
        theme={themeJotai}
        defaultSelectedKeys={['1']}
        items={items}
        onSelect={(item) => {
          navigate(item.key)
        }}
      />
    </Sider>
  )
}
