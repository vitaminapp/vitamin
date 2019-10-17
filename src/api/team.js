import request from '@/utils/request'


/**
 * 
 * 所属店铺
 */
export function grtStaffData(query) {
    return request({
        url: '/user/list-sreach',
        method: 'post',
        baseURL: '/api',
        data:{type:1}
    })
}

/**
 *
 * 获取员工管理的表格数据
 */
export function getTableData(query){
    return request({
        url: 'user/list',
        method: 'post',
        baseURL: '/api',
        data:query
    })
}

/**
 *
 * 获取邀请中的表格数据
 */
export function getyqData(query){
    return request({
        url: 'user/list',
        method: 'post',
        baseURL: '/api',
        data:{type: 1,
            page: query,
        }
    })
}


/**
 *
 * 状态
 */

/**
 *
 * 员工管理下的表格
 */

/**
 *
 * 所属店铺
 */

/**
 *
 * 所属店铺
 */