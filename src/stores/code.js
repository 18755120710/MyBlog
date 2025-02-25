import { defineStore } from "pinia";
import { ref } from "vue";

export const useCodeSerivce = defineStore('code', () => {

    const flag = ref(false)

    const setFlag = (value) => {
        flag.value = value
    }

    return {
        flag,
        setFlag
    }
})