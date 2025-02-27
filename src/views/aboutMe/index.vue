<template>
    <div class="index" v-opacity>
        <div class="body">
            <div class="my-card">
                <my-card></my-card>
            </div>
            <div class="study-progress">
                <study-progress v-for="index in 4" :key="index"></study-progress>
            </div>
            <div class="project-experience">
                <project-experience v-for="index in 2" :key="index+1"></project-experience>
            </div>
        </div>
    </div>
</template>

<script setup>
import StudyProgress from './components/StudyProgress.vue';
import MyCard from './components/MyCard.vue';
import ProjectExperience from './components/ProjectExperience.vue';


</script>

<style lang="scss" scoped>
.index {
    padding: 80px;

    .body {

        .my-card {
            margin-bottom: 24px;
        }

        .study-progress {
            display: flex;
            margin-bottom: 24px;
        }

        .project-experience {
            display: flex;
            justify-content: space-around;
        }
    }
}
</style>