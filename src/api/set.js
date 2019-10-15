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