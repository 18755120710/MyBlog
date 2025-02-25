<template>
    <div class="list">
        <div class="left">
            <img src="@/assets/notes.jpg" alt="">
        </div>
        <div class="right">
            <div class="detail-info">
                <div class="lable">
                    {{ articleList.label }}
                </div>
                <div class="data">{{ articleList.createTime }}</div>
                <div class="reading-volume">浏览 {{ articleList.skimThrough }}</div>
            </div>
            <div class="title">{{ articleList.title }}</div>
            <div class="context">
                {{ articleList.content.slice(0,100) }}...
            </div>
            <div class="mutually">
                <Mutually :like="articleList.like" :commentOn="articleList.commentOn"></Mutually>
            </div>
        </div>
    </div>
</template>

<script setup>
import Mutually from './Mutually.vue';

// 接收父组件传递来的数据
defineProps({
    articleList: {
        type: Object
    }
})


</script>

<style lang="scss" scoped>
.list {
    width: 737px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        background-color: rgb(242, 248, 255, 0.7);
    }
    .left {
        width: 280px;
        height: 200px;
        border-radius: 12px;

        img {
            width: 280px;
            height: 200px;
            border-radius: 12px;
        }
    }

    .right {
        width: 436px;
        height: 200px;
        padding: 10px 0px;

        .detail-info {
            display: flex;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            div {
                margin-right: 12px;
            }
            .lable {
                width: 72px;
                text-align: center;
                font-size: 14px;
                font-weight: normal;
                background-color: #e2f3ef;
                color: #000;
                border-radius: 4px;
            }
            .data {
                color: #6B7280;
            }
            .reading-volume {
                color: #6B7280;
            }
        }

        .title {
            height: 28px;
            line-height: 28px;
            font-size: 20px;
            font-weight:550;
        }

        .context {
            margin-top: 10px;
            height: 72px;
            font-size: 16px;
            color: #4B5563;
        }
    }
}
</style>