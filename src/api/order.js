import request from '@/utils/request'
/**
 *
 * 获取订单管理页面   下拉菜单数据
 */
export function orderSearch(query) {
  return request({
    url: '/order/get-order-search',
    method: 'post',
    baseURL: '/api',
    data: {
      org_id: 61500,
      org_type: 5,
      status: ''
    }
  })
}

/**
 *
 * 获取订单管理页面  获取表格数据  
 * status  必填
 */
export function orderList(query) {
  return request({
    url: '/order/get-main-order-list',
    method: 'post',
    baseURL: '/api',
    data: {
      org_id: 61500,
      org_type: 5,
      sort: '',
      ...query
    }
  })
}

