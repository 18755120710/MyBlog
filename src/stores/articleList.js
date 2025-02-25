import { getArticleList } from "@/api/articleList";
import { defineStore } from "pinia";
import { ref, toRaw } from "vue";

export const useArticleListService = defineStore('articleList', () => {
    const articleList = ref([])
    const itemLabel = ref([])


    const obtainArticleList = async () => {
        const { data } = await getArticleList()
        articleList.value = data.data
    }

    const setLabel = () => {
        itemLabel.value = toRaw(articleList.value.map(item => item.label))

    }

    return {
        articleList,
        itemLabel,
        obtainArticleList,
        setLabel
    }
})