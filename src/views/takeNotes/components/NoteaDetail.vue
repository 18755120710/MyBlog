<template>
    <div class="detail">
            <div class="body" v-spring>
                <!-- 头顶面包屑 -->
            <div class="head">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/notes'}">手记</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ notesDetail.title }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <!-- 标题 -->
             <div class="title">
                <h1>{{ notesDetail.title }}</h1>
             </div>

            <div class="context">
                <p ref="contextRef">{{ notesDetail.content }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';
import { useCodeSerivce } from '@/stores/code';
// 引入api
import { getNotesListByIdService } from '@/api/notesList';

// 获取路由传递来的参数
const id = ref('')
const route = useRoute()
const router = useRouter()
// 定义接收id查询后的数据
const notesDetail = ref([])

// 控制导航栏的状态
const { setFlag } = useCodeSerivce()

// 调用接口获取请求数据
const obtainNotesListByIdList = async (id) => {
    const { data } = await getNotesListByIdService(id)
    notesDetail.value = data.data[0]
}

onMounted(() =>{
    id.value = route.params.id
    setFlag(true)
    obtainNotesListByIdList(id.value)
})
</script>

<style lang="scss" scoped>
.detail {
    padding: 100px 150px;

    .body {
        width: 100%;
        min-height:250px;
        padding: 20px;
        background: rgb(255, 255, 255, 0.9);
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08);
        position: relative;

        /* 面包屑 */
        .head {
        height: 42px;
        line-height: 42;
        }

        /* 标题 */
        .title {
            text-align: center;
            margin: 24px 0;
        }

        /* 内容 */
        .context {
            padding: 0 24px;
            p {
                letter-spacing:2px;
                font-size: 20px;
                text-indent: 2em;
                line-height: 42px;
            }
        }
    }
}
</style>