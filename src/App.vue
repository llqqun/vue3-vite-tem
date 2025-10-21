<template>
  <div class="app">
    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html.no-rem-mobile {
  font-size: 13.333vw;
}
@media screen and (min-width: 750px) {
  html.no-rem-mobile {
    font-size: 100px;
  }
}
</style>
