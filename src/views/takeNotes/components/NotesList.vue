<template>
    <div class="index">
        <!-- 头部标题 -->
        <div class="head">
            <div class="title">{{ notesList.title }}</div>
            <div class="label">{{ notesList.label }}</div>
        </div>
        <!-- 内容 -->
         <div class="context" ref="contextRef">
            <span>
                {{ notesList.content.slice(0,242) }}...
            </span>
         </div>
         <!-- 底部功能区域 -->
          <div class="footer">
                <div class="item">
                    <el-icon><View /></el-icon>
                    <span class="count">1551</span>
                </div>
                <div class="item">
                    <el-icon><ChatDotRound /></el-icon>
                    <span class="count">5515</span>
                </div>
                <div class="item">
                    <span class="time">
                        2025-2-19
                    </span>
                </div>
          </div>
    </div>
</template>

<script setup>
import Lable from '@/components/Lable.vue';
import { provide, ref } from 'vue';
import { View, ChatDotRound } from '@element-plus/icons-vue';

defineProps({
    notesList: {
        type: Object
    }
})

</script>

<style lang="scss" scoped>
.index {
    min-height: 211px;
    padding: 20px;
    border-bottom: 0.3px solid #cfd0d2c7;
    cursor: pointer;
    border-radius: 12px;
    transition:all 0.3s;
    margin-bottom: 24px;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        background-color: rgb(242, 248, 255, 0.7);
    }

    .head {
        display: flex;
        height: 30px;
        line-height: 30px;

        .title {
            font-weight: bold;
            font-size: 20px;
            margin-right: 20px;
        }

        .label {
            width: 72px;
            text-align: center;
            font-size: 14px;
            font-weight: normal;
            background-color: #e2f3ef;
            color: #000;
            border-radius: 4px;
        }
    }

    .context {
        height:100px;
        padding: 20px;
        text-indent: 2em;
        color: #3d3d3d;
        margin-bottom:10px;

        span {
            background: linear-gradient(to right, #000,#000) no-repeat;
            background-size: 0 1px;
            background-position:right bottom;
            transition: background-size 1s;
        }

        &:hover span {
            background-size: 100% 1px;
            background-position:left bottom;
        }
    }

    .footer {
        display: flex;
        justify-content: space-between;
        padding: 0px 50px;

        .item {
            width: 87px;
            height: 32px;
            font-size: 15px;
            line-height: 32px;
            color: #a6a6a6;

            .count {
                margin-left:10px;
            }
        }
    }
}
</style>