/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/order',
  component: Layout,
  redirect: 'order',
  name: 'order',
  meta: {
    title: '订单',
    icon: 'component'
  },
  children: [{
    path: 'orderManagement',
    component: () =>
                import('@/pages/order/orderManagement'),
    name: 'orderManagement',
    meta: { title: '订单管理' }
  },
  {
    path: 'shopOrder',
    component: () =>
                import('@/pages/order/shopOrder'),
    name: 'shopOrder',
    meta: { title: '店铺订单' }
  },
  {
    path: 'refundManagement',
    component: () =>
                import('@/pages/order/refundManagement'),
    name: 'refundManagement',
    meta: { title: '退款管理' }
  },
  {
    path: 'singleback',
    component: () =>
                import('@/pages/order/singleback'),
    name: 'singleback',
    meta: { title: '整单退' }
  },
  {
    path: 'invoicemanagement',
    component: () =>
                import('@/pages/order/invoicemanagement'),
    name: 'invoicemanagement',
    meta: { title: '发票管理' }
  },
  {
    path: 'refundAudit',
    component: () =>
                import('@/pages/order/refundAudit'),
    name: 'refundAudit',
    meta: { title: '退款审核' }
  },
  {
    path: 'financialRefund',
    component: () =>
                import('@/pages/order/financialRefund'),
    name: 'financialRefund',
    meta: { title: '财务退款' }
  }

  ]
}

export default componentsRouter
