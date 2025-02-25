<template>
    <div class="card">
        <div class="head">
            <div class="title">最新动态</div>
            <div class="btn">
                <el-button>最新发布</el-button>
                <el-button>最多阅读</el-button>
            </div>
        </div>
        <!-- 动态列表 -->
        <div class="list">
            <trends v-for="index in [0,1]" 
            :key="notesList[index].id"
            :notesList="notesList[index]"></trends>
        </div>
    </div>
</template>

<script setup>
import Trends from '@/components/Trends.vue';
import { useNotesListService } from '@/stores/notesList';

const { notesList } = useNotesListService()
</script>

<style lang="scss" scoped>
.card {
    width: 800px;
    height: 568px;
    padding: 32px;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(165, 165, 165, 0.3);

    .head {
        display: flex;
        justify-content: space-between;
        width: 736px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 24px;

            .title {
                font-size: 24px;
                font-weight: bold;
        }
    }

    // 动态列表
    
}
</style>