<template>
    <div class="card">
        <div class="title">推荐文章</div>
        <div class="articles">
            <!-- 首页展示的数据列表 -->
            <article-list 
                v-for="item in articleList" 
                :key="item.id" 
                :articleList="item"
            ></article-list>
        </div>
    </div>
</template>

<script setup>
import ArticleList from '@/components/ArticleList.vue';
import { onMounted, ref } from 'vue';
// 引入api
import { getListByIndex } from '@/api/articleList';

// 定义给后端传递需要将哪几条列表作为首页展示的
const idList = ref([ 1,2 ])
const articleList = ref([])
// 调用api接口将数组id传给后端
const obtainListByIndex = async (ids, index) => {
    const { data } = await getListByIndex(ids, index)
    articleList.value = data.data
}

onMounted(() => {
    obtainListByIndex(idList.value, 1)
})
</script>

<style lang="scss" scoped>
.card {
    width: 800px;
    height: 552px;
    padding: 32px;
    margin-bottom: 36px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(165, 165, 165, 0.3);

    .title {
        height: 32px;
        line-height: 32px;
        font-size: 24px;
        margin-bottom: 24px;
        font-weight: bold;
    }

    .articles {
        width: 736px;
        height: 432px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>