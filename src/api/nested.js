import request from '@/utils/request'
export function getCardType(query) {
  return request({
    url: '/membership-setting/card-bg-list', // 获取会员卡信息
    method: 'post',
    baseURL: '/api'
  })
}
export function getRegister() {
  return request({
    url: '/membership-setting/register-info', // 获取注册信息
    method: 'post',
    baseURL: '/api'
  })
}
export function getShopList() {
  return request({
    url: '/membership-setting/mall-store-list', // 获取注册信息
    method: 'post',
    baseURL: '/api'
  })
}
