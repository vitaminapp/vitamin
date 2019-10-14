/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/card',
  name: 'Nested',
  meta: {
    title: '会员',
    icon: 'nested'
  },
  children: [
    {
      path: 'card',
      component: () => import('@/pages/member/card/index'), // Parent router-view
      name: 'card',
      meta: { title: '会员卡' }
    },
    {
      path: 'binding',
      name: 'binding',
      component: () => import('@/pages/member/binding/index'),
      meta: { title: '绑定会员卡设置' }
    },
    {
      path: 'selfExtension',
      name: 'selfExtension',
      component: () => import('@/pages/member/selfExtension/index'),
      meta: { title: '自拓二维码管理' }
    }
  ]
}

export default nestedRouter
