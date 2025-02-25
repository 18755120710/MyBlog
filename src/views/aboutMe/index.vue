<template>
    <div class="index">
        <div class="body">
            <div class="my-card">
                <my-card></my-card>
            </div>
            <div class="study-progress">
                <study-progress v-for="index in 4" :key="index"></study-progress>
            </div>
        </div>
    </div>
</template>

<script setup>
import StudyProgress from './components/StudyProgress.vue';
import MyCard from './components/MyCard.vue';
</script>

<style lang="scss" scoped>
.index {
    padding: 80px;

    .body {
        border: 1px solid black;

        .my-card {
            margin-bottom: 24px;
        }

        .study-progress {
            
            display: flex;
        }
    }
}
</style>