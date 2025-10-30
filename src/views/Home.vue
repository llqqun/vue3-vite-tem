<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <div>
      <a href="/people-list">链接</a>
      <div @click="router.push('/people-list')">路由</div>
    </div>
    <p>这是一个使用Vue 3构建的项目</p>
    
    <div class="demo-section">
      <h2>不进行rem转换的示例</h2>
      
      <!-- 方法1: 使用选择器黑名单 -->
      <div class="demo-item">
        <h3>方法1: 使用选择器黑名单</h3>
        <div class="no-rem-box">
          这个div的padding和font-size不会转换为rem
        </div>
      </div>
      
      <!-- 方法2: 使用大写PX -->
      <div class="demo-item">
        <h3>方法2: 使用大写PX</h3>
        <div class="uppercase-px-box">
          这个div的padding和font-size不会转换为rem
        </div>
      </div>
      
      <!-- 方法3: 使用内联样式（注意：这不是postcss-pxtorem的特性，而是Vue的特性） -->
      <div class="demo-item">
        <h3>方法3: 使用内联样式</h3>
        <div style="padding: 30px; font-size: 20px; background-color: #f0f0f0; border: 1px solid #ccc;">
          这个div的内联样式不会被postcss处理
        </div>
      </div>
    </div>
    <div>{{ exampleStore.count }}</div>
    <div>{{ exampleStore.doubleCount }}</div>
    <button @click="exampleStore.increment">增加</button>
  </div>
</template>

<script setup>
import { useExampleStore } from '@/store/modules/example'
import { useRouter } from 'vue-router'
const exampleStore = useExampleStore()
const router = useRouter()
</script>

<style scoped lang="scss">
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.demo-section {
  max-width: 750px;
  margin: 0 auto;
  text-align: left;
}

.demo-section h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.demo-item {
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.demo-item h3 {
  color: #42b983;
  margin-bottom: 15px;
  font-size: 18px;
}

/* 方法1: 使用选择器黑名单 */
/* 选择器以 'no-rem-' 开头，会被排除在rem转换之外 */
.no-rem-box {
  padding: 30px;
  font-size: 20px;
  background-color: #e8f4fd;
  border: 1px solid #9dd3fa;
  color: #0366d6;
}

/* 方法2: 使用大写PX */
/* 单位使用大写PX，不会被转换为rem */
.uppercase-px-box {
  padding: 30PX;
  font-size: 20PX;
  background-color: #f0fdf4;
  border: 1px solid #86efac;
  color: #15803d;
}

/* 这是一个会被转换为rem的正常样式作为对比 */
.normal-box {
  padding: 30px;
  font-size: 20px;
  background-color: #fef2f2;
  border: 1px solid #fca5a5;
  color: #b91c1c;
}
</style>