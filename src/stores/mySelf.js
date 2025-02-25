import { getMySelfList } from "@/api/myself";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMySelfListService = defineStore('myselfList', () => {

    // 定义一个变量接收数据
    const mySelfList = ref([])

    const obtainMySelfList = async () => {
        const { data } = await getMySelfList()
        mySelfList.value = data.data
        console.log(mySelfList.value)
    }

    return {
        mySelfList,
        obtainMySelfList
    }
})