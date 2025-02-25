<template>
    <div class="box">
        <el-icon><Star /></el-icon><span style="margin-right: 20px;">{{ like }}</span>
        <el-icon><ChatDotRound /></el-icon><span>{{ commentOn }}</span>
    </div>
</template>

<script setup>
import { Star, ChatDotRound } from '@element-plus/icons-vue';
defineProps({
    like: {
        type: Number
    },
    commentOn: {
        type: Number
    }
})
</script>

<style lang="scss" scoped>
.box {
    height: 20px;
    line-height: 20px;
    color: #6B7280;
}
</style>