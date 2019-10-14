/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const marketRouter = {
  path: '/marketing',
  component: Layout,
  redirect: '/marketing/coupon/type',
  name: '营销',
  meta: {
    title: '营销',
    icon: 'example'
  },
  children: [
    {
      path: 'coupon',
      redirect: '/marketing/coupon/type',
      component: () => import('@/pages/marketing/coupon/index'),
      name: '优惠券',
      meta: { title: '优惠券', icon: 'edit' },
      children: [
        {
          path: 'type',
          component: () => import('@/pages/marketing/coupon/type'),
          name: '优惠卷类型',
          meta: { title: '优惠卷类型', icon: 'edit' }
        },
        {
          path: 'record',
          component: () => import('@/pages/marketing/coupon/record'),
          name: '优惠卷记录',
          meta: { title: '优惠卷记录', icon: 'list' }
        },
        {
          path: 'grant',
          component: () => import('@/pages/marketing/coupon/grant'),
          name: '优惠卷发放记录',
          meta: { title: '优惠卷发放记录', icon: 'list' }
        },
        {
          path: 'use',
          component: () => import('@/pages/marketing/coupon/use'),
          name: '优惠卷使用记录',
          meta: { title: '优惠卷使用记录', icon: 'list' }
        }
      ]
    },
    {
      path: 'price',
      component: () => import('@/pages/marketing/price/index'),
      name: '一口价',
      meta: { title: '一口价', icon: 'list' }
    },
    {
      path: 'activity',
      component: () => import('@/pages/marketing/activity/index'),
      name: '满减活动',
      meta: { title: '满减活动', icon: 'list' }
    },
    {
      path: 'restriction',
      component: () => import('@/pages/marketing/restriction/index'),
      name: 'restriction',
      meta: { title: '限购活动', icon: 'list' }
    },
    {
      path: 'promotion',
      component: () => import('@/pages/marketing/promotion/index'),
      name: 'promotion',
      meta: { title: '店内促销', icon: 'list' }
    }
  ]
}
export default marketRouter
