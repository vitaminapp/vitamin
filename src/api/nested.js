import request from '@/utils/request'
export function getCardType(query) {
  return request({
    url: '/membership-setting/card-bg-list',
    method: 'post',
    params: query,
    baseURL: '/api'
  })
}
