<template>
    <div class="box">
        <div class="title">
            <span>前端开发</span>
            <span><img src="@/assets/8_3前端开发.png" alt=""></span>
        </div>
        <div class="list">
            <div class="item" v-for="(item,index) in arr" :key="index">
                <span class="name">Vue3</span>
                <span>
                    <el-progress :percentage="item.count" class="progress"
                    :stroke-width="8"
                    striped
                    striped-flow
                    :color="item.color"
                    ></el-progress>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// const data = [
//     {
//         id: '',
//         title: '',
//         progress: [
//             name,
//             count,
//             color
//         ]
//     }
// ]
const arr = ref([
    {count: 64, color: '#59cd55'},
    { count: 57, color: '#4ecad3'},
    { count: 76, color: '#c0e88e'},
    { count: 93, color: '#cfef70'}
])
</script>

<style lang="scss" scoped>
.box {
    margin: 0 auto;
    padding: 18px;
    width: 220px;
    height: 220px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(145, 144, 144, 0.3);
    border-radius: 16px;

    .title {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        height: 30px;
        line-height: 30px;

        img {
            width: 26px;
        }
    }

    .list {

        .item {
            line-height: 42px;
            display: flex;
            justify-content: space-between;
            .name {
                margin-right: 5px;
            }

            .progress {
                width:166px;
                height: 42px;
            }
        }
    }
}
</style>