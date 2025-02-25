import request from '@/utils/request'

export const chatAiService = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return request.get('/ai/generate', {
        params: {
            message: encodedMessage
        }
    })
}