import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import orderRouter from './modules/order'
import commodityRouter from './modules/commodity'
import marketRouter from './modules/market'
import settingRouter from './modules/set'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/homePage',
    children: [
      {
        path: 'homePage',
        component: () => import('@/pages/homepage/index'),
        name: '首页',
        meta: { title: '首页', icon: 'link', affix: true }
      }
    ]
  },
  {
    path: '/survey',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/pages/survey/index'),
        name: '概况',
        meta: { title: '概况', icon: 'documentation', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: '店铺',
      icon: 'icon',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'manageShops',
        component: () => import('@/pages/shop/manageShops'),
        name: 'manageShops',
        meta: {
          title: '店铺管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'navigation',
        component: () => import('@/pages/shop/navigation'),
        name: 'navigation',
        meta: {
          title: '专柜导航管理'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },

  {
    path: '/page',
    component: Layout,
    meta: { title: '页面', icon: 'icon', noCache: true },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/page/management/index'),
        name: '页面管理',
        meta: { title: '页面管理', icon: 'icon', noCache: true }
      },
      {
        path: 'index',
        component: () => import('@/pages/page/management/index'),
        name: '页面',
        meta: { title: '页面', icon: 'icon', noCache: true }
      }
    ]
  },
  orderRouter,
  commodityRouter,
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/index',
    name: 'customer',
    meta: {
      title: '顾客',
      icon: 'example'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/customer/manage/index'),
        name: '顾客',
        meta: { title: '顾客管理', icon: 'icon', noCache: true }
      },
      {
        path: 'create',
        component: () => import('@/pages/customer/manage/index'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      }
    ]
  },
  nestedRouter,
  marketRouter,

  {
    path: '/team',
    component: Layout,
    redirect: '/team/staff',
    name: '团队',
    meta: {
      title: '团队',
      icon: 'excel'
    },
    children: [
      {
        path: 'staff',
        component: () => import('@/pages/team/staff'),
        name: '员工管理',
        meta: { title: '员工管理' }
      },
      {
        path: 'shopping',
        component: () => import('@/pages/team/shopping'),
        name: '导购管理',
        meta: { title: '导购管理' }
      }
    ]
  },
  settingRouter,

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: { title: 'Error Log', icon: 'bug' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
