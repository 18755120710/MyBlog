<template>
    <div class="container">
      <h2>倒计时</h2>
      
      <!-- 今日进度 -->
      <div class="progress-item">
        <div class="label-group">
          <span>今日已经过去 {{ hoursPassed.toFixed(1) }} 小时</span>
          <span class="percentage day">{{ dayProgress.toFixed(0) }}%</span>
        </div>
        <el-progress 
          :percentage="dayProgress" 
          :stroke-width="20" 
          :show-text="false"
          class="day-progress"
        ></el-progress>
      </div>
  
      <!-- 本周进度 -->
      <div class="progress-item">
        <div class="label-group">
          <span>这周已经过去 {{ daysPassedWeek }} 天</span>
          <span class="percentage week">{{ weekProgress.toFixed(0) }}%</span>
        </div>
        <el-progress 
          :percentage="weekProgress" 
          :stroke-width="20" 
          :show-text="false"
          class="week-progress"
        ></el-progress>
      </div>
  
      <!-- 本月进度 -->
      <div class="progress-item">
        <div class="label-group">
          <span>本月已经过去 {{ daysPassedMonth }} 天</span>
          <span class="percentage month">{{ monthProgress.toFixed(0) }}%</span>
        </div>
        <el-progress 
          :percentage="monthProgress" 
          :stroke-width="20" 
          :show-text="false"
          class="month-progress"
        ></el-progress>
      </div>
  
      <!-- 今年进度 -->
      <div class="progress-item">
        <div class="label-group">
          <span>今年已经过去 {{ monthsPassed }} 个月</span>
          <span class="percentage year">{{ yearProgress.toFixed(0) }}%</span>
        </div>
        <el-progress 
          :percentage="yearProgress" 
          :stroke-width="20" 
          :show-text="false"
          class="year-progress"
        ></el-progress>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
  
  const hoursPassed = ref(0)
  const daysPassedWeek = ref(0)
  const daysPassedMonth = ref(0)
  const monthsPassed = ref(0)
  
  const dayProgress = ref(0)
  const weekProgress = ref(0)
  const monthProgress = ref(0)
  const yearProgress = ref(0)
  
  const currentDate = ref(new Date())
  let timer
  
  const updateProgress = () => {
    currentDate.value = new Date()
  }
  
  watch(currentDate, () => {
    const now = currentDate.value
    // 今日进度
    const totalHours = 24
    const currentHours = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600
    hoursPassed.value = currentHours
    dayProgress.value = (currentHours / totalHours) * 100
  
    // 本周进度
    const dayOfWeek = now.getDay() || 7
    daysPassedWeek.value = dayOfWeek - 1
    weekProgress.value = ((dayOfWeek - 1) / 7) * 100
  
    // 本月进度
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
    daysPassedMonth.value = now.getDate()
    monthProgress.value = (daysPassedMonth.value / daysInMonth) * 100
  
    // 今年进度
    monthsPassed.value = now.getMonth() + 1
    yearProgress.value = (monthsPassed.value / 12) * 100
  })
  
  onMounted(() => {
    updateProgress()
    timer = setInterval(updateProgress, 1000)
  })
  
  onBeforeUnmount(() => {
    clearInterval(timer)
  })
  </script>
  
  <style lang="scss" scoped>
  .container {
    padding: 25px;
    background: rgb(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    width: 360px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }
  
  h2 {
    color: #2c3e50;
    margin: 0 0 28px 8px;
    font-size: 22px;
    font-weight: 600;
  }
  
  .progress-item {
    margin-bottom: 28px;
  }
  
  .label-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    padding: 0 4px;
  }
  
  .percentage {
    font-weight: 600;
    &.day { color: #409EFF; }
    &.week { color: #E6A23C; }
    &.month { color: #F56C6C; }
    &.year { color: #67C23A; }
  }
  
  /* 进度条全局样式 */
  :deep(.el-progress-bar__outer) {
    background-color: #f0f2f5 !important;
    border-radius: 10px !important;
    height: 20px !important;
  }
  
  /* 今日进度条渐变 */
  .day-progress :deep(.el-progress-bar__inner) {
    background: linear-gradient(90deg, 
      #409EFF 0%, 
      #67C23A 70%, 
      #F56C6C 100%
    ) !important;
  }
  
  /* 本周进度条渐变 */
  .week-progress :deep(.el-progress-bar__inner) {
    background: linear-gradient(90deg, 
      #E6A23C 0%,
      #67C23A 70%,
      #F56C6C 100%
    ) !important;
  }
  
  /* 本月进度条渐变 */
  .month-progress :deep(.el-progress-bar__inner) {
    background: linear-gradient(90deg, 
      #F56C6C 0%,
      #67C23A 70%,
      #409EFF 100%
    ) !important;
  }
  
  /* 今年进度条渐变 */
  .year-progress :deep(.el-progress-bar__inner) {
    background: linear-gradient(90deg, 
      #67C23A 0%,
      #409EFF 70%,
      #F56C6C 100%
    ) !important;
  }
  /* 添加充能动画效果 */
:deep(.el-progress-bar__inner) {
  position: relative;
  overflow: hidden;
  animation: energy-flow 2s linear infinite;
}

/* 能量流动动画 */
@keyframes energy-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 能量光晕效果 */
:deep(.el-progress-bar__inner)::after {
  content: "";
  position: absolute;
  top: -50%;
  left: 0;
  width: 60px;
  height: 200%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: rotate(25deg);
  animation: glow-move 1.5s ease-in-out infinite;
}

@keyframes glow-move {
  0% {
    transform: translateX(-150%) rotate(25deg);
  }
  100% {
    transform: translateX(300%) rotate(25deg);
  }
}

/* 调整各进度条渐变背景 */
.day-progress :deep(.el-progress-bar__inner) {
  background: linear-gradient(
    90deg,
    #409EFF 0%,
    #67C23A 40%,
    #F56C6C 80%
  );
  background-size: 200% 100%;
}

.week-progress :deep(.el-progress-bar__inner) {
  background: linear-gradient(
    90deg,
    #E6A23C 0%,
    #67C23A 40%,
    #F56C6C 80%
  );
  background-size: 200% 100%;
}

.month-progress :deep(.el-progress-bar__inner) {
  background: linear-gradient(
    90deg,
    #F56C6C 0%,
    #67C23A 40%,
    #409EFF 80%
  );
  background-size: 200% 100%;
}

.year-progress :deep(.el-progress-bar__inner) {
  background: linear-gradient(
    90deg,
    #67C23A 0%,
    #409EFF 40%,
    #F56C6C 80%
  );
  background-size: 200% 100%;
}

  </style>