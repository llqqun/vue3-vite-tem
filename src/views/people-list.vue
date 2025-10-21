<template>
  <div class="people-list">
    <h1>人员列表</h1>
    <ul>
      <li v-for="person in people" :key="person.id">
        {{ person.name }} - {{ person.age }}岁
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PeopleList',
    data() {
      return {
        people: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 35 },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.people-list {
  padding: $spacing-lg;
}

h1 {
  font-size: $font-size-xl;
  color: $text-primary;
  margin-bottom: $spacing-lg;
  
  &:hover {
    color: $primary-color;
    transition: color 0.3s ease;
  }
}

ul {
  list-style-type: none;
}

li {
  font-size: $font-size-lg;
  color: $text-secondary;
  margin-bottom: $spacing-base;
}
</style>
