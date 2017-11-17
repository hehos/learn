<template>
  <mt-tabbar v-model="selected" fixed id="footer">
    <mt-tab-item id="1">
      <div @click="$router.push('/')">
        <i class="icon-home2-o"></i>
        首页
      </div>

    </mt-tab-item>
    <mt-tab-item id="2">
      <div @click="$router.push('cate')">
        <i class="icon-film"></i>
        频道
      </div>

    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    name: 'template',

    data () {
      return {
        selected: 0
      }
    },

    methods: {
    },

    components: {
    }
  }
</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  .footer {
    .mui-bar-tab .mui-tab-item.mui-active {
      color: $orange-dark;
    }
  }
</style>