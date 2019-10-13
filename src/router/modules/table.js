/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/marketing',
  component: Layout,
  redirect: '/marketing/coupon',
  name: '营销',
  meta: {
    title: '营销',
    icon: 'example'
  },
  children: [
    {
      path: '/coupon',
      component: () => import('@/pages/marketing/coupon/index'),
      name: '优惠券',
      meta: { title: '优惠券', icon: 'edit' }
    },
    {
      path: '/price',
      component: () => import('@/pages/marketing/price/index'),
      name: '一口价',
      meta: { title: '一口价', noCache: true, activeMenu: '/example/list' },
      hidden: true
    },
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'ArticleList',
      meta: { title: '满减活动', icon: 'list' }
    },
    {
      path: '/edit',
      component: () => import('@/views/example/edit'),
      name: 'EditArticle',
      meta: { title: '限购活动', noCache: true, activeMenu: '/example/list' },
      hidden: true
    },
    {
      path: 'list',
      component: () => import('@/views/example/list'),
      name: 'ArticleList',
      meta: { title: '店内促销', icon: 'list' }
    }
  ]
}
export default tableRouter
