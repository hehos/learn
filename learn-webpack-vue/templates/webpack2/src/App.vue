<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="header_search"></router-view>
    <router-view name="header_transparent"></router-view>

    <router-view></router-view>

    <keep-alive>
      <router-view name="index"></router-view>
    </keep-alive>

    <keep-alive>
      <router-view name="cate"></router-view>
    </keep-alive>

    <router-view name="not_cache"></router-view>

    <router-view name="footer"></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }

</script>

<style lang="scss">

  @import "scss/project-comm.scss";

</style>
