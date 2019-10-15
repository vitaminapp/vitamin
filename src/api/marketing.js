import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/campaign/list',
    method: 'post',
    data: query,
    baseURL: '/api'
  })
}

// export function fetchArticle(id) {
//   return request({
//     url: '/article/detail',
//     method: 'get',
//     params: { id }
//   })
// }
