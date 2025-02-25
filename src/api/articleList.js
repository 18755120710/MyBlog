import request from '@/utils/request'
import qs from 'qs'

// 获取文章列表
export const getArticleList = (id) => {
    return request.get('/article/list', {
        params: {
            id: id
        }
    })
}

// 根据文章列表label查询标签名


// 根据传给后端id和index查询对应的列表
export const getListByIndex = (ids, index) => {
    return request.get('list/index', {
        params: {
            ids: ids,
            index: index
        },
        paramsSerializer: params => {
            return qs.stringify(params, { arrayFormat: 'repeat'})
        }
    })
}