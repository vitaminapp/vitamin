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

export function storeList() {
    return request({
        url: '/campaign/store-list',
        method: 'post',
        baseURL: '/api'
    })
}
export function getpartPower() {
    return request({
        url: '/campaign/get-part-power',
        method: 'post',
        baseURL: '/api'
    })
}
export function getsave(query) {
    return request({
        url: '/campaign/save',
        method: 'post',
        baseURL: '/api',
        data: query
    })
}

export function getsearch(query) {
    return request({
        url: '/campaign/search-list',
        method: 'post',
        baseURL: '/api',
        data: query
    })
}
export function getrestrict(query) {
    return request({
        url: '/campaign-restrict/list',
        method: 'post',
        baseURL: '/api',
        data: query
    })
}
export function getpromotion(query) {
    return request({
        url: '/store/promotion-list',
        method: 'post',
        baseURL: '/api',
        data: query
    })
}