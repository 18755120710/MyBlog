<template>
    <div class="home">
        <!-- ai -->
         <el-affix position="top">
            <ChatAi></ChatAi>
         </el-affix>
        <!-- 顶部导航栏 -->
        <el-affix position="top">
            <div ref="navBarRef" class="nav-bar">
                <nav-bar active-class="active"></nav-bar>
            </div>
        </el-affix>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { h, onMounted, ref } from 'vue'
// 引入组件
import NavBar from '@/components/NavBar.vue'
import ChatAi from '@/components/ChatAi.vue'
// 引入包
import gsap from 'gsap'
import { ElMessage, ElNotification } from 'element-plus'
// 引入api

// 导航栏动画
const navBarRef = ref()
const navBarAnime = () => {
    const navBar = navBarRef.value
    // 将导航栏初始位置设置在页面上方不可见的位置
    gsap.set(navBar, { y: -navBar.offsetHeight, opacity: 0 })
    // 通过 GSAP 动画让导航栏向下滑动到顶部固定位置
    gsap.to(navBar, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
    })
}

const openNotification = () => {
    ElNotification({
        title: '今日大大已发表新的动态了快去看看吧!',
        message: h(
            'span', // 标签名
            {
                style: { cursor: 'pointer', color: 'teal' }, //样式
                onClick: () => {
                    ElMessage({
                        showClose: true,
                        message: '功能暂未开放',
                        type: 'warning'
                    })
                }
            },
            '点击前往查看'
        ),
        duration: 0
    })
}
onMounted(() => {
    navBarAnime()
    openNotification()
})
</script>

<style lang="scss" scoped>
.home {
    position: relative;

    .active {
        color: #3498eb;
    }
}
</style>