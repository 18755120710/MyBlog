<template>
    <div ref="chatRef" class="chatAi" @mouseenter="chatAiOn" @mouseleave="chatAiLeave" @click="dialogShow = true">
        ai
    </div>
    <el-dialog v-model="dialogShow" title="你好我是ButVan" width="500" :alignCenter="true" :draggable="true">
        <div class="dialog" v-loading="loading" ref="answerRef" v-html="answerInfo"></div>
        <el-form>
            <el-form-item>
                <el-input type="textarea" v-model="message" 
                resize="none" :autosize="{ minRows: 1, maxRows: 10 }" maxlength="1000" show-word-limit
                ></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="getChatInfo">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import MarkdownIt from 'markdown-it';

import { chatAiService } from '@/api/zhipuai';

const md = new MarkdownIt()
const chatRef = ref()
const dialogShow = ref(false)

const answerRef = ref()
const message = ref('')
const loading = ref(false)
const answerInfo = ref('')

// 刚进入入页面ai的动画
const chatAnime = () => {
    const chat = chatRef.value
    gsap.set(chat, {
        x: chat.offsetWidth
    })
    gsap.to(chat, {
        x: 18,
        duration: 1,
        ease: 'power2.out'
    })
}

// 鼠标移入显示
const chatAiOn = () => {
    const chat = chatRef.value
    gsap.to(chat, {
        x: 0,
        duration: 0.3
    })
}

// 鼠标移除复原
const chatAiLeave = () => {
    const chat = chatRef.value
    gsap.to(chat, {
        x: 18,
        duration: 0.3
    })
}

const answerAnime = () => {
    const answer = answerRef.value
    gsap.set(answer, { height: 0 })
    gsap.to(answer, {
        height: 'auto',
        duration: 6
    })
}

// 点击按钮获取请求
const getChatInfo = async () => {
    loading.value = true
    answerInfo.value = ''
    const res = await chatAiService(message.value)
    const htmlContext = md.render(res.data.generation)
    answerInfo.value = htmlContext
    loading.value = false
    answerAnime()
    message.value = ''
}

onMounted(() => {
    chatAnime()
})

</script>

<style lang="scss" scoped>
.chatAi {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    background-color: #29a4f1;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    top: 420px;

    .dialog {
        height: 200px;
        overflow: hidden;
    }
}
</style>