/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const settingRouter = {
  path: '/setting',
  component: Layout,
  redirect: '/setting/shop-setting',
  name: '设置',
  meta: {
    title: '设置',
    icon: 'excel'
  },
  children: [
    {
      path: 'shop-setting',
      component: () => import('@/pages/setting/shop-setting'),
      name: '店铺设置',
      meta: { title: '店铺设置' }
    },
    {
      path: 'indent',
      name: 'SelectExcel',
      redirect: 'indent/indent-setting',
      meta: { title: '订单设置' },
      children: [
        {
          path: 'indent-setting',
          component: () => import('@/pages/setting/indent-setting'),
          name: '订单设置',
          meta: { title: '订单设置' }
        },
        {
          path: 'reimburse-setting',
          component: () => import('@/pages/setting/reimburse-setting'),
          name: 'UploadExcel',
          meta: { title: '退款设置' }
        },
        {
          path: 'freight-setting',
          component: () => import('@/pages/setting/freight-setting'),
          name: 'UploadExcel',
          meta: { title: '运费模板设置' }
        }
      ]
    },
    {
      path: 'commodity-setting',
      component: () => import('@/pages/setting/commodity-setting'),
      name: 'MergeHeader',
      meta: { title: '商品设置' }
    },
    {
      path: 'login-setting',
      component: () => import('@/pages/setting/login-setting'),
      name: 'UploadExcel',
      meta: { title: '登录设置' }
    },
    {
      path: 'online-setting',
      component: () => import('@/pages/setting/online-setting'),
      name: 'UploadExcel',
      meta: { title: '网店设置' }
    },
    {
      path: 'serve-setting',
      component: () => import('@/pages/setting/serve-setting'),
      name: 'UploadExcel',
      meta: { title: '服务设置' }
    },
    {
      path: 'system-setting',
      component: () => import('@/pages/setting/system-setting'),
      name: 'UploadExcel',
      meta: { title: '系统设置' }
    }
  ]
}
export default settingRouter

