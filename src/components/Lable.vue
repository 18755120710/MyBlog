<template>
    <div class="box" ref="boxRef"
    :style="{ backgroundColor: bgColor}"
    >
        {{ title }}
    </div>
</template>

<script setup>
import {inject, onMounted, ref } from "vue"
// 引入api

import { useArticleListService } from "@/stores/articleList"

const title = inject('lableValue', ref('Default Title'))
const boxRef = ref()
const bgColor = ref('')


const { itemLabel, setLabel } = useArticleListService()
const listLabel = async (id) => {
    const { data } = await getListLabel(id)
    console.log("标签名为",data)
}

if (title.value === '日常生活') {
    bgColor.value = '#BEE9E6'
} else if (title.value === '学习文章') {
    bgColor.value = '#C2E9BE'
} else {
    bgColor.value = '#FFFFFF'
}

onMounted(async () => {
    await setLabel()
    await  itemLabel.forEach(async (item) => {
    listLabel(item)
})
})
</script>

<style lang="scss" scoped>
.box {
    width: 72px;
    text-align: center;
    font-size: 14px;
    font-weight: normal;
    // background-color: #e2f3ef;
    color: #000;
    border-radius: 4px;
}
</style>