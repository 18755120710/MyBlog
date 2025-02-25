import request from '@/utils/request'

// 查询所有的动态列表
export const getNotesListService = () => {
    return request.get('/notes/list')
}

// 根据id查询动态列表
export const getNotesListByIdService = (id) => {
    return request.get(`/notes/list/${id}`)
}