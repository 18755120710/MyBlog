<template>
    <div class="layout">
        <div class="welcome">
            <!-- 上部分 -->
            <div class="top">
                <el-row>
                    <el-col :span="12">
                        <div class="right">
                            <!-- 滚动文字容器 -->
                            <div class="roll-container">
                                <span ref="roll" class="roll-item" v-for="(item, index) in rollText" :key="index">{{ item }}</span>
                            </div>
                            <!-- 第一段流式文字容器 -->
                            <div class="flow-container">
                                <span ref="flow1" class="flow-item" v-for="(item, index) in flowText1" :key="index">{{ item }}</span>
                            </div>
                            <!-- 第二段流式文字容器 -->
                            <div class="flow-container">
                                <span ref="flow2" class="flow-item" v-for="(item, index) in flowText2" :key="index">{{ item }}</span>
                            </div>
                        </div>
                    </el-col>
                    <!-- 左侧容器 -->
                    <el-col :span="12">
                        <div class="left" @click="changeContext">
                            <!-- 个人卡片样式 -->
                            <div ref="cardRef" class="onself-card" :style="{ cursor: canclick ? 'pointer' : 'default' }">
                                <div class="top">
                                    <div class="top-header">
                                        <img src="@/assets/微信头像.jpg" alt="">
                                    </div>
                                    <div class="top-lable">
                                        <p class="name">{{ myself.name }}</p>
                                        <p class="lable">{{ myself.myLabel }}</p>
                                    </div>
                                </div>
                                <div class="center">
                                    <div class="context" ref="contextRef">
                                        {{ myself.myDesc }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- 下部分 -->
            <div class="bottom">
                <div ref="textRef" class="text">
                    <p class="sentence">负担越重，我们的生命越贴近大地，它就越真切实在。</p>
                    <p class="form">米兰·昆德拉《生命不能承受之轻》发布于 2025/2/4</p>
                </div>
                <p ref="arrowRef" class="arrow" @click="toBody">
                    <el-icon><ArrowDownBold /></el-icon>
                </p>
            </div>
        </div>
        <!-- 主体部分 -->
        <div class="body">
            <!-- 头部分类卡片 -->
            <div class="category-card">
                <category-card v-for="index in 4" :key="index+1"></category-card>
            </div>
            <!-- 通用功能展示区 -->
            <div class="commonly">
                <el-row>
                    <el-col :span="18">
                        <!-- 左侧区域 -->
                        <div class="commonly-left">
                            <!-- 推荐文章 -->
                            <div class="recommended-articles">
                                <recommend-articles></recommend-articles>
                            </div>
                            <!-- 最新动态 -->
                             <div class="latest-news">
                                <latest-news></latest-news>
                             </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <!-- 右侧区域 -->
                        <div class="commonly-right">
                            <!-- 关于我 -->
                            <div class="about-my">
                                <about-my></about-my>
                            </div>
                            <!-- 文章分类 -->
                             <div class="acticle-category">
                                <article-category></article-category>
                             </div>
                             <!-- 学习进度 -->
                              <div class="study-progress">
                                <study-progress></study-progress>
                              </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoryCard from './components/CategoryCard.vue'
import RecommendArticles from './components/RecommendArticles.vue'
import LatestNews from './components/LatestNews.vue'
import AboutMy from './components/AboutMy.vue'
import ArticleCategory from './components/ArticleCategory.vue'
import StudyProgress from './components/StudyProgress.vue'
import { onMounted, ref, toRaw } from 'vue'
import gsap from 'gsap'
import { ArrowDownBold } from '@element-plus/icons-vue'
import { useNotesListService } from '@/stores/notesList'
import { getMySelfList } from '@/api/myself'


// 获取动态的Store实例
const { notesList } = useNotesListService()
// 获取个人卡数据信息
const myself = ref([])
const obtianMySeflf = async () => {
    const { data} = await getMySelfList()
    myself.value = data.data[0]
}


// 文字滚动动画区域
const roll = ref(null)
// 定义要展示的文字
const rollText = ref("ButVan's Blog")
const rollAnime = () => {
    // 检查 roll.value 是否存在且为数组
    if (roll.value && Array.isArray(roll.value)) {
        const rollDistance = -200
        // 遍历每个字符元素
        roll.value.forEach((item, index) => {
            // 设置元素的初始状态
            gsap.set(item, {
                x: rollDistance,
                rotation: -360,
                opacity: 0
            })
            // 创建动画，让元素滚动到最终状态
            gsap.to(item, {
                x: 0,
                rotation: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power4.out',
                // 为每个元素的动画添加延迟，实现逐个滚动效果
                delay: index * 0.1
            })
        })
    }
}
// 流式文字动画区域
const flow1 = ref()
const flow2 = ref()
const flowText1 = ref("Nothing but enthusiasm brightens up the endless years.")
const flowText2 = ref("总之岁月漫长，然而值得等待")
const flowAnime1 = () => {
    if (flow1.value) {
        gsap.to(flow1.value, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3
        })
    }
}
const flowAnime2 = () => {
    if (flow1.value) {
        gsap.to(flow2.value, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3
        })
    }
}
// 旋转卡片动画
const cardRef = ref()
let revloveAnime
const canclick = ref(false) // 控制卡片是否可以点击
const revloveCard = () => {
    const card = cardRef.value
    revloveAnime =  gsap.to(card, {
        rotationY: 360, // 旋转360度
        duration: 2.5, // 动画持续时间
        ease: 'power2.out', // 缓动效果
        //repeat: -1, // 无限重复
        //yoyo: true, // 往返动画
        onComplete: () => {
            canclick.value = true
        }
    })
}
// 点击卡片旋转动画
const isNewCount = ref(false) // 记录当前显示的是否是新内容
const context = '一个正在学习前端和后端的大一学生,喜欢折腾各种技术,对一些3d游戏引擎也比较感兴趣,希望我的博客能给你带来一些帮助。也希望能够和你交友!'
const newContextText = '我热爱技术探索，持续学习新的知识，不断提升自己的技能，期待和大家一起交流进步！'
const contextText = ref(context)
const contextRef = ref()
const changeContext = () =>{
    const card = cardRef.value
    if(canclick) {
        canclick.value = false // 点击后禁止点击
        let tween =  gsap.to(card, {
        rotationY: 360,
        duration: 2.5,
        ease: 'power2.out',
        onUpdate: () => {
            const rotation = gsap.getProperty(card, 'rotationY')
            if(rotation >= 175 && rotation <= 185) {
                 // 隐藏当前文字
                 gsap.to(contextRef.value, {
                        opacity: 0,
                        duration: 0.3,
                        onComplete: () => {
                            if (isNewCount.value) {
                                contextText.value = context
                            } else {
                                contextText.value = newContextText
                            }
                            isNewCount.value = !isNewCount.value
                            // 显示新文字
                            gsap.to(contextRef.value, {
                                opacity: 1,
                                duration: 0.3
                            })
                        }
                    })
                // 更换内容后移除onUpdate回调，放置重复执行
                tween.eventCallback('onUpdate', null)
            }
        },
        onComplete: () => {
            gsap.set(card, { rotationY: 0} )
            canclick.value = true // 动画完成后允许在点击
        }
    })
    }
} 
// 箭头动画
const arrowRef = ref()
const arrowAnime = () => {
    const arrow = arrowRef.value
    gsap.to(arrow, {
        y: 20,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
    })
}
// 下部分文字动画
const textRef = ref()
const textAnime = () => {
    const text = textRef.value
    gsap.set(text, { y: text.offsetHeight })
    gsap.to(text, {
        y:0,
        duration: 0.5,
        ease: 'power2.out'
    })
}
// 点击向下小箭头
const toBody = () =>{
    const windowHeight = window.innerHeight
    window.scrollTo({
        top: windowHeight,
        behavior: 'smooth'
    })
}

onMounted(async () => {
    rollAnime() // 开启流失文字‘动画
    flowAnime1() // 旋转文字动画
    await setTimeout(() => {
        flowAnime2() // 4s后在开启底下文字动画
    }, 4000)
    revloveCard() // 开启旋转卡片动画
    arrowAnime() // 箭头动画
    textAnime() // 下部分文字动画
    // 调用请求个人卡片的api
    obtianMySeflf()
})
</script>

<style lang="scss" scoped>
.welcome {
        min-height: 500px;
        padding: 20px;
        padding-top: 60px;

        // 上部分
        .top {
            .right {
                width: 100%;
                height: 500px;
                padding: 100px;
                // 滚动文字容器样式
                // .roll-container {
                    
                // }

                // 流式文字容器样式
                .flow-container {
                    margin-top: 50px;
                }

                .roll-item {
                    display: inline-block;
                    font-size: 42px;
                    font-weight: bold;
                    transform-origin: center;
                    transform: translateY(20px);
                }

                .flow-item {
                    display: inline-block;
                    font-size: 32px;
                    opacity: 0;
                    transform: translateY(30px);
                }
            }

            // 左侧卡片样式
            .left {
                width: 100%;
                height: 500px;
                padding: 100px;
                perspective:1000px;

                // 整体卡片样式
                .onself-card {
                    width: 440px;
                    height: 263px;
                    padding: 50px;
                    background-color: rgba(255, 255, 255, 0.7);
                    border-radius: 25px;
                    box-shadow: 1px 1px 20px rgba(145, 144, 144, 0.3);
                    transform-style: preserve-3d;
                    
                    // 头部区域
                    .top {
                        display: flex;
                        .top-header {
                            width: 60px;
                            height: 60px;
                            box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
                            border-radius: 5px; 
                            img {
                                width: 60px;
                                height: 60px;
                                border-radius: 5px;
                            }
                        }
                        .top-lable {
                            margin-left: 20px;
                            .name {
                                height: 30px;
                                line-height: 30px;
                                font-size: 24px;
                                font-weight: bold;
                            }
                            .lable {
                                height: 30px;
                                line-height: 30px;
                                font-weight: 200;
                                color:gray;
                            }
                        }
                    }
                    // 中间文字区域
                    .center {
                        padding: 10px;
                        .context {
                            line-height: 23px;
                            color: #333;
                        }
                    }
                } 
            }
        }
        //下部分
        .bottom {
            height: 230px;
            padding: 50px 0px;
            text-align: center;
            .sentence {
                height: 50px;
                line-height: 50px;
            }
            .form {
                height: 50px;
                line-height: 50px;
                font-size: 15px;
                color: rgb(44, 44, 44);
            }
            .arrow {
                height: 70px;
                line-height: 70px;
                font-size: 36px;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    // 主体部分
    .body {

        // 头部分类卡片
        .category-card {
            display: flex;
            margin: 0 auto;
            margin-top: 220px;
            width: 1323px;
            height: 188px;
            justify-content: space-between;
        }

        // 通用功能展示区
        .commonly {
            padding: 130px;

            // 左侧区域
            .commonly-left {
                width:100%;
                height: 1332px;
                padding:0px 0px 0px 20px;

                // 推荐文章
                .recommended-articles {
                }

                // 最新动态
                .latest-news {
                }
            }

            // 右侧区域
            .commonly-right {
                width:100%;
                height: 1332px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                // 关于我
                .about-my {
                }

                // 文章分类
                .acticle-category {
                }

                // 学习进度
                .study-progress {
                }
            }
        }
    }
</style>