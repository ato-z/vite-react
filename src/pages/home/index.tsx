import { getTest } from '@/api'
import { AnimaView } from '@/components/animaRouter'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    getTest().then(console.log)
  }, [])

  return (
    <AnimaView>
      <div>其他页面</div>
    </AnimaView>
  )
}
