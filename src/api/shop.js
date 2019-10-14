import request from '@/utils/request'

/**
 *
 * 获取店铺管理 楼层的数据
 */
export function floorList(query) {
  return request({
    url: '/store/floor-list',
    method: 'post',
    baseURL: '/api'
  })
}
/**
 *
 * 获取店铺管理 分类数据
 */
export function categoryList(query) {
  return request({
    url: '/store/category-list',
    method: 'post',
    baseURL: '/api'
  })
}
/**
 *
 * 获取店铺管理 店铺权限数据
 */
export function storePowerList(query) {
  return request({
    url: '/store/get-store-power-list',
    method: 'post',
    baseURL: '/api'
  })
}
/**
 *
 * 获取店铺管理 授权品牌数据
 */
export function brandList(query) {
  return request({
    url: '/store/brand-list',
    method: 'post',
    baseURL: '/api'
  })
}

