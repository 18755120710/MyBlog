<template>
    <div class="wall">
        我是墙
        <el-progress :percentage="50" class="item"></el-progress>
        <el-button plain @click="open">open</el-button>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.wall {
    height: 100vh;
    .item {
        width: 200px;
    }
}
</style>