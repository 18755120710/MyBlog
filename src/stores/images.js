import { defineStore } from "pinia";
import { ref } from 'vue'

export const useImagesService = defineStore('images', () => {

    const imagesUrl = ref([
        'https://vue-wj.oss-cn-beijing.aliyuncs.com/images/IMG_3772.png',
        'https://vue-wj.oss-cn-beijing.aliyuncs.com/images/bgc2.jpg',
        'https://vue-wj.oss-cn-beijing.aliyuncs.com/images/home.jpeg',
        'https://vue-wj.oss-cn-beijing.aliyuncs.com/images/notes.jpg'
    ])

    return {
        imagesUrl
    }
})