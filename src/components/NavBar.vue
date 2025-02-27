<template>
    <div class="box">
        <div class="nav-bar" v-if="isValue" v-OnSlipperyDown="'on'">
            <!-- 头像 -->
            <div class="header">
                <img src="../../src/assets/微信头像.jpg">
            </div>
            <!-- 导航栏 -->
            <div class="nav-text">
                <div v-for="item in navText" :key="item.id" class="nav-item" @click="To"><span> {{ item.item }}</span></div>
                <!--  右侧功能区 -->
            <div class="nav-search">
                <el-icon size="15"><Search /></el-icon>
                <el-icon><Sunny /></el-icon>
                <el-icon><User /></el-icon>
            </div>
            </div>
        </div>
        <!-- 鼠标下滑切换的内容 -->
        <div ref="articleRef" class="articleDetail" v-else v-opacity v-OnSlipperyDown="'down'">
            我是文章详情
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";
import { Search, Sunny, User } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { useEventListener } from "@vueuse/core";
import { useCodeSerivce } from "@/stores/code";
import request from '@/utils/request'
import { getNotesTitleByIdService } from "@/api/notesList";

// 根据点击导航栏不同的选项来控制跳转的不同路径
const To = (e) => {
    if(e.target.innerText == '首页') {
        router.push('/welcome')
    }
    if(e.target.innerText == '手记') {
        router.push('/notes')
    }
    if(e.target.innerText == '关于我') {
        router.push('/aboutMe')
    }
    if(e.target.innerText == '文章') {
        router.push('/article')
    }
    if(e.target.innerText == '留言板') {
        router.push('/wall')
    }
}

//定义一个变量控制导航栏内部数据的变化
const isValue = ref(true)
const has = ref(false) // 用来控制防止多次监听鼠标滚动使用

// 获取store实例
const codeStore = useCodeSerivce()

const router = useRouter()

// 定义一个变量控制是否开启检测滚轮
const switchWheel = ref(false)
// ！！！！！！！！！！！！！！！！！！！
codeStore.$subscribe((mutation,state) => {
    // switchWheel.value = mutation.events.newValue
    switchWheel.value = state.flag
    console.log(switchWheel.value)
    // 检测鼠标滚轮
    if(switchWheel.value === true) {
            useEventListener('wheel', async (e) => {
            if(e.deltaY > 0 && !has.value) {
                console.log(switchWheel.value)
                isValue.value = false
                has.value = true
            }
            if(e.deltaY < 0 && has.value === true) {
                console.log(switchWheel.value)
                isValue.value = true
                has.value = false
            }
        })
    } else {
        console.log('look me')
    }
})

const navText = ref({})

// 获取导航列表项
const getNavBarItem = async () => {
    const { data } = await request.get('/navBarItem')
    navText.value = data
}

// 获取导航栏滚动时显示的内容标题
const getNotesTitle = async (id) => {
    const res = await getNotesTitleByIdService(id)
    console.log(res)
}
onMounted(() => {
    getNavBarItem()
})
</script>

<style lang="scss" scoped>
.box {
    height: 60px;
    background-color:rgba(253, 253, 252, 0.7);
    border-bottom: 0.5px solid rgb(229, 229, 229);
    backdrop-filter: blur(3px);
    //opacity: 0.6;
    padding:9px 0px;

    .nav-bar {
    display: flex;

        // 头像样式
        .header {
            width: 42px;
            height:42px;
            margin-left:210px;
            img {
                height: 42px;
                width: 42px;
                border-radius: 15px;
            }
        }

        // 导航栏
        .nav-text {
            margin: 0 auto;
            display: flex;
            height: 42px;
            line-height: 42px;
            .nav-item {
                width: 70px;
                text-align: center;
                cursor: pointer;

                span {
                background: linear-gradient(to right, #1782e7,#1782e7) no-repeat;
                background-size: 0 2px;
                background-position:right bottom;
                transition: background-size 0.5s;
                }

                &:hover span {
                    background-size: 100% 2px;
                    background-position:left bottom;
                    text-shadow: 0 0 20px rgba(157, 217, 225, 0.3),
                    0 0 30px rgb(98, 206, 233),
                    0 0 20px rgba(98, 206, 233);
                    color: #1782e7;
                }
            }
            .nav-item::after {
                border-bottom: 2px solid #17e728;
            }

            // 右侧功能区
            .nav-search {
                margin-left: 260px;
                .el-icon {
                    width: 36px;
                    cursor: pointer;
                }
            }
        }
    }

    .articleDetail {
        line-height: 42px;
        text-align: center;
    }
}
</style>