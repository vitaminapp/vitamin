/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const commodityRouter = {
  path: '/commodity',
  component: Layout,
  redirect: 'noRedirect',
  name: 'commodity',
  meta: {
    title: '商品',
    icon: 'chart'
  },
  children: [{
    path: 'commodityManagement',
    component: () => import('@/pages/commodity/commodityManagement'),
    name: 'commodityManagement',
    meta: { title: '商品管理', noCache: true }
  },
  {
    path: 'inventoryManagement',
    component: () => import('@/pages/commodity/inventoryManagement'),
    name: 'inventoryManagement',
    meta: { title: '库存管理', noCache: true }
  },
  {
    path: 'specificationManagement',
    component: () => import('@/pages/commodity/specificationManagement'),
    name: 'specificationManagement',
    meta: { title: '规格值管理', noCache: true }
  }, {
    path: 'commodityGroup',
    component: () => import('@/pages/commodity/commodityGroup'),
    name: 'commodityGroup',
    meta: { title: '商品分组', noCache: true }
  }
  ]
}

export default commodityRouter
