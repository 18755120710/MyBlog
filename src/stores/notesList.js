import { getNotesListService } from "@/api/notesList";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotesListService = defineStore('notesList',() => {

    // 这是初始化的动态数据
    const notesList = ref([])

    // 调用api接口获取数据
    const obtainNotesList = async () => {
        const { data } = await getNotesListService()
        notesList.value = data.data
    }

    return {
        notesList,
        obtainNotesList
    }
})