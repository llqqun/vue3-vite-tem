<template>
  <div class="people-list">
    <h1>人员列表</h1>
    <ul>
      <li v-for="person in people" :key="person.id">
        {{ person.name }} - {{ person.age }}岁
      </li>
    </ul>
    <div>{{ exampleStore.count }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useExampleStore } from '@/store/modules/example'
const exampleStore = useExampleStore()

const people = ref([
  { id: 1, name: '张三', age: 25 },
  { id: 2, name: '李四', age: 30 },
  { id: 3, name: '王五', age: 35 },
])
</script>

<style lang="scss" scoped>
@use '../styles/variables.scss' as var;

.people-list {
  padding: var.$spacing-lg;
}

h1 {
  font-size: var.$font-size-xl;
  color: var.$text-primary;
  margin-bottom: var.$spacing-lg;
  
  &:hover {
    color: var.$primary-color;
    transition: color 0.3s ease;
  }
}

ul {
  list-style-type: none;
}

li {
  font-size: var.$font-size-lg;
  color: var.$text-secondary;
  margin-bottom: var.$spacing-base;
}
</style>
