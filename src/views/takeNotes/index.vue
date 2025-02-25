<template>
    <div class="notes">
        <el-row>
            <!-- 左侧区域 -->
            <el-col :span="6">
                <div class="left">
                    <!-- 进度条 -->
                    <div class="count-down" ref="countDownRef" v-opacity>
                        <count-down></count-down>
                    </div>
                    <!-- 日历 -->
                     <div class="calendar" ref="canlender" v-opacity>
                        <Calendar></Calendar>
                     </div>
                </div>
            </el-col>
            <!-- 右侧区域 -->
            <el-col :span="18">
                <div class="right">
                    <div class="banner">
                        <carousel-diagram></carousel-diagram>
                    </div>
                    <div class="body" v-opacity>
                        <notes-list @click="goNotesDetail(item.id)" v-for="item in notesList" :key="item.id"
                        :notesList="item"
                        ></notes-list>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

import CountDown from './components/CountDown.vue';
import Calendar from './components/Calendar.vue';
import CarouselDiagram from './components/CarouselDiagram.vue';
import NotesList from './components/NotesList.vue';
import { useRouter } from 'vue-router';
import { useNotesListService } from '@/stores/notesList';
import { onMounted } from 'vue';


const router = useRouter()

// 前往动态详情页
const goNotesDetail = (id) => {
    router.push(`/notes/detail/${id}`)
}

const { notesList, obtainNotesList } = useNotesListService()
onMounted(() => {
    // obtainNotesList()
})
</script>

<style lang="scss" scoped>
.notes {
    height: 100vh;
    padding: 80px;

    // 左侧区域
    .left {
        width: 100%;
        min-height:800px;

        // 进度条组件
        .count-down {
            margin-bottom: 50px;
        }

        // 日历组件

    }

    //  右侧区域
    .right {
        width: 100%;
        min-height: 800px;
        margin-left: 36px;
        
        .banner {
            height: 30vh;
            margin-bottom: 24px;
        }

        .body {
            min-height: 70vh;
            padding: 20px;
            background: rgb(255, 255, 255, 0.9);
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        }
    }
}
</style>