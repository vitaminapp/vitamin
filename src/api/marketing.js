import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/campaign/list',
    method: 'post',
    data: query,
    baseURL: '/api'
  })
}

export function campaign(id) {
  return request({
    url: '/campaign/get-part-power',
    method: 'get',
    params: { id }
  })
}
