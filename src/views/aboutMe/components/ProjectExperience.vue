<template>
    <div class="project">
        <h3>项目经历</h3>
        <el-timeline>
            <el-timeline-item v-for="index in 3" :key="index"
            placement="top" type="success" :icon="MoreFilled"
            >
                项目{{ index }}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script setup>
import { MoreFilled } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.project {
    h3 {
        height: 46px;
        line-height: 46px;
    }

    width: 36vw;
    height: 220px;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 1px 5px rgba(145, 144, 144, 0.3);
    border-radius: 16px;
}
</style>