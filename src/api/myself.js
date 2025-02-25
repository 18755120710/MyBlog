import request from '@/utils/request'

//  获取个人信息卡片
export const getMySelfList = () => {
    return request.get('/mySelf')
}