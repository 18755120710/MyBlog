<template>
    <div class="trends">
        <div class="detail-info">
            <div class="label">
                {{ notesList.label }}
            </div>
            <div class="data">2025-2-14</div>
            <div class="reading-volume">浏览 1234</div>
        </div>
        <div class="title">
            {{ notesList.title }}
        </div>
        <div class="context">
            {{ notesList.content.slice(0,82) }}...
        </div>
        <div class="muttally">
            <Mutually :like="notesList.like" :commentOn="notesList.commentOn"></Mutually>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import Mutually from './Mutually.vue';

defineProps({
    notesList: {
        type: Object
    }
})
const lableValue = ref('日常生活')
provide('lableValue', lableValue)
</script>

<style lang="scss" scoped>
.trends {
    width: 736px;
    height: 210px;
    padding: 25px;
    border-radius: 12px;
    border: 0.5px solid rgba(145, 144, 144, 0.3);
    margin-bottom: 24px;
    transition: all 0.3s;
    cursor: pointer;

    .detail-info {
        display: flex;
        width: 686px;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        .label {
            width: 72px;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            background-color: #e2f3ef;
            color: #000;
            border-radius: 4px;
        }

            div {
                margin-right: 12px;
            }
            .data {
                color: #6B7280;
            }
            .reading-volume {
                color: #6B7280;
            }
    }

    .title {
        margin: 10px 0px;
        height:36px;
        line-height: 36px;
        font-size: 18px;
        color: #000;
    }

    .context {
        width: 677px;
        height: 48px;
    }
}

.trends:hover {
    box-shadow: 5px 7px 15px rgba(165, 165, 165, 0.3);
}
</style>