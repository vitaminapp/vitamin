
import Layout from '@/layout'

const settingRouter = {
  path: '/set',
  component: Layout,
  redirect: '/set/index',
  name: 'set',
  meta: {
    title: '设置',
    icon: 'table',
    keepAlive: true
  },
  children: [
    {
      path: 'setUpShop',
      component: () => import('@/pages/set/setUpShop/index'),
      name: 'setUpShop',
      meta: { title: '店铺设置' }
    },
    {
      path: 'setOrder',
      component: () => import('@/pages/set/setOrder/index'),
      name: 'setOrder',
      meta: { title: '订单设置' },
      children: [
        {
          path: 'setOrdering',
          component: () => import('@/pages/set/setOrder/setOrdering/index'),
          name: 'setOrdering',
          meta: { title: '订单设置' }
        },
        {
          path: 'setRefund',
          component: () => import('@/pages/set/setOrder/setRefund/index'),
          name: 'setRefund',
          meta: { title: '退款设置' }
        },
        {
          path: 'setTemplate',
          component: () => import('@/pages/set/setOrder/setTemplate/index'),
          name: 'setTemplate',
          meta: { title: '运费模板设置' }
        }
      ]
    },
    {
      path: 'setCommodity',
      component: () => import('@/pages/set/setCommodity/index'),
      name: 'setCommodity',
      meta: { title: '商品设置',keepAlive: true }
    },
    {
      path: 'setLogin',
      component: () => import('@/pages/set/setLogin/index'),
      name: 'setLogin',
      meta: { title: '登录设置' }
    },
    {
      path: 'setOnline',
      component: () => import('@/pages/set/setOnline/index'),
      name: 'setOnline',
      meta: { title: '网店设置' }
    },
    {
      path: 'setServer',
      component: () => import('@/pages/set/setServer/index'),
      name: 'setServer',
      meta: { title: '服务设置' }
    },
    {
      path: 'setSystem',
      component: () => import('@/pages/set/setSystem/index'),
      name: 'setSystem',
      meta: { title: '系统设置' }
    }

  ]
}
export default settingRouter
