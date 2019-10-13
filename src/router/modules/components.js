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
    path: 'storeManagement',
    component: () =>
                import('@/pages/order/storeManagement'),
    name: 'storeManagement',
    meta: { title: '订单管理' }
  },
  {
    path: 'singleback',
    component: () =>
                import('@/pages/order/singleback'),
    name: 'singleback',
    meta: { title: '整单退' }
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
    path: 'refundAudit',
    component: () =>
                import('@/pages/order/refundAudit'),
    name: 'refundAudit',
    meta: { title: '退款审核' }
  },
  {
    path: 'orderManagement',
    component: () =>
                import('@/pages/order/orderManagement'),
    name: 'orderManagement',
    meta: { title: '订单管理' }
  },
  {
    path: 'invoicemanagement',
    component: () =>
                import('@/pages/order/invoicemanagement'),
    name: 'invoicemanagement',
    meta: { title: '发票管理' }
  },
  {
    path: 'financialRefund',
    component: () =>
                import('@/pages/order/financialRefund'),
    name: 'financialRefund',
    meta: { title: '财务退款' }
  },
  {
    path: 'back-to-top',
    component: () =>
                import('@/views/components-demo/back-to-top'),
    name: 'BackToTopDemo',
    meta: { title: 'Back To Top' }
  },
  {
    path: 'drag-dialog',
    component: () =>
                import('@/views/components-demo/drag-dialog'),
    name: 'DragDialogDemo',
    meta: { title: 'Drag Dialog' }
  },
  {
    path: 'drag-select',
    component: () =>
                import('@/views/components-demo/drag-select'),
    name: 'DragSelectDemo',
    meta: { title: 'Drag Select' }
  },
  {
    path: 'dnd-list',
    component: () =>
                import('@/views/components-demo/dnd-list'),
    name: 'DndListDemo',
    meta: { title: 'Dnd List' }
  },
  {
    path: 'drag-kanban',
    component: () =>
                import('@/views/components-demo/drag-kanban'),
    name: 'DragKanbanDemo',
    meta: { title: 'Drag Kanban' }
  }
  ]
}

export default componentsRouter
