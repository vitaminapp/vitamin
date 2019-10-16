import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/campaign/list',
    method: 'post',
    data: query,
    baseURL: '/api'
  })
}

export function partPower(id) {
  return request({
    url: '/campaign/get-part-power',
    method: 'OPTIONS'
  })
}

export function store(id) {
  return request({
    url: '/campaign/store-list',
    method: 'OPTIONS'
  })
}
// x-org-id: 61500
// x-org-type: 5
// x-user-id: 963245015
export function storeList(query) {
  return request({
    url: '/campaign/store-list',
    method: 'POST',
    data: query
  })
}
