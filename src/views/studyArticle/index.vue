<template>
    <div class="index">
        <div class="list" v-opacity>
            <el-timeline style="max-width: 600px;">
                <el-timeline-item center v-for="item in articleList" :key="item.id" 
                placement="top" :timestamp="item.createTime" size="large" type="primary" :icon="MoreFilled"
                >
                    <article-list class="list-item"
                    :articleList="item"
                    ></article-list>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script setup>
import { onMounted, provide, ref, toRaw } from 'vue';
import ArticleList from '@/components/ArticleList.vue';
import { MoreFilled } from '@element-plus/icons-vue'
import { useArticleListService } from '@/stores/articleList';

const { articleList, obtainArticleList} = useArticleListService()

const itemLabel = ref(articleList.map(item => item.label))
const rawArray = toRaw(itemLabel.value)
provide('labelArray',rawArray)

onMounted(() => {
    obtainArticleList()
})

</script>

<style lang="scss" scoped>
.index {
    width: 65vw;
    margin: 0 auto;
    padding: 50px 36px;


    .list {
        margin: 0 auto;
        margin-bottom:1.5px;

        .list-item {
            background: linear-gradient(to right, rgba(255, 255, 255),rgba(100, 176, 230));
            box-shadow: 1px 1px 5px rgba(145, 144, 144, 0.3);
            border-radius: 12px;
        }
    }
}

::v-deep .el-timeline-item__timestamp {
    color:#000;
    font-size: 18px;
}
</style>