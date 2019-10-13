import Layout from '@/layout'
const memder = {
  path: '/memder',
  component: Layout,
  redirect: '/memder/memderCard',
  name: 'Memder',
  meta: {
    title: '会员',
    icon: 'nested'
  },
  children: [
    {
      path: 'memderCard',
      component: () => import('@/pages/memder/memderCard'),
      name: 'memderCard',
      meta: { title: '会员卡', noCache: true }
    },
    {
      path: 'binding',
      component: () => import('@/pages/memder/binding'),
      name: 'binding',
      meta: { title: '绑定会员卡设置', noCache: true }
    },
    {
      path: 'manage',
      component: () => import('@/pages/memder/manage'),
      name: 'manage',
      meta: { title: '自拓二维码设置', noCache: true }
    }
  ]
}

export default memder
