import request from '@/utils/request'

//商品设置数据
export function getDetail(query) {
  return request({
    url: '/prod/setting-detail', 
    method: 'post',
    baseURL:"api",
    param:query
  })
}
//登录设置数据
export function getLogin(query) {
  return request({
    url: '/org/scene-set', 
    method: 'post',
    baseURL:"api",
    param:query
  })
}
//店铺设置数据 菜单结构
export function getMenuData(query) {
  return request({
    url: '/estore-setting/get-org-menu-list', 
    method: 'post',
    baseURL:"api",
    param:query
  })
}

//店铺设置数据 基本信息
export function getMallData(query) {
  return request({
    url: '/mall/get-mall-data', 
    method: 'post',
    baseURL:"api",
    param:query
  })
}

//店铺设置数据 菜单结构
export function getLimtData(query) {
  return request({
    url: '/setting-service/access-limit-get', 
    method: 'get',
    baseURL:"api",
    param:query
  })
}