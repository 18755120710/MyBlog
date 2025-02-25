import '@/style/index.css'
import { createApp, onMounted, onUpdated, ref } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue'
import router from './router'

import gsap from 'gsap';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
app.use(ElementPlus);

// 自定义指令

// 渐变显示指令
app.directive('opacity', (el) => {
    gsap.set(el, { opacity: 0 })
    gsap.to(el, {
        opacity: 1,
        duration: 1
    })
})

// 从上而下，或者上下往上指令
app.directive('OnSlipperyDown', (el, binding) => {
    const elAnime = () => {
        gsap.to(el, {
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        })
    }
    // 如果传递来的值是on则是从上而下的动画
    if(binding.value === 'on') {
        gsap.set(el, { y: -100 })
        elAnime()
    }
    // 如果传递来的值是down则是从下而上的动画
    if(binding.value === 'down') {
        gsap.set(el, { y: 100 })
        elAnime()
    }
})

// 弹性动画指令
app.directive('spring', (el) => {
    gsap.set(el, { y: -100 })
    gsap.to(el, {
        duration: 1.5,
        y: 0,
        ease: 'elastic.out(1,0.3)'
    })
})

// 标签指令
app.directive('label', {
    mounted(el, binding) {
      updateContent(el, binding.value);
    },
    updated(el, binding) {
      updateContent(el, binding.value);
    },
  });
  
  const updateContent = (el, value) => {
    let content = '';
    switch (value) {
      case 1:
        content = '学习文章';
        el.style.backgroundColor = '#C2E9BE'
        break;
      // 添加更多 case 来处理其他值
      default:
        content = '未知标签';
        break;
    }
    el.textContent = content;
  };
