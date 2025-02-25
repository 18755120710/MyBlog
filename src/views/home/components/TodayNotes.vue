<template>
    <div ref="bodyRef" class="index">
        <div class="top" @click="none">—</div>
        <div class="title">
            今日大大已发表新的动态了快去看看吧!
        </div>
        <div class="footer" @click="GoLookTodayNotes">
            点击前往查看
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref} from "vue"
import gsap from "gsap"

// 点击右上角最小化消除弹窗
const bodyRef = ref()
const none = () => {
    bodyRef.value.style.display = 'none'
    shadowAnime.kill()
}

// 弹窗发光动画
let shadowAnime
const indexAnime = () => {
    const body = bodyRef.value
    shadowAnime = gsap.to(body, {
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        keyframes: {
            'box-shadow': [
                '0 0 20px rgba(179, 225, 157,0.3)',
                '0 0 30px rgba(149, 212, 117)',
                '0 0 20px rgba(179, 225, 157)'
            ]
        }
    })
}

// 前往查看今日手记
const GoLookTodayNotes = () => {
    alert('功能还未实现')
}

onMounted(() => {
    indexAnime()
})
</script>

<style lang="scss" scoped>
.index {
    position: absolute;
    top: 45px;
    right:20px;
    width:298px;
    height: 103px;
    padding: 2px 15px;
    background: rgb(255, 255, 255, 0.7);
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    z-index: 9999;

    .top {
        float: right;
        font-size: 12px;
        font-weight: bold;
        color: gray;
        cursor: pointer;
    }

    .title {
        height: 56px;
        margin-top: 20px;
    }

    .footer {
        float: right;
        font-size: 12px;
        color: rgb(175, 173, 173);
        cursor: pointer;
    }
}
</style>