<template>
  <footer class="footer">

    <nav class="mui-bar mui-bar-tab">
      <div class="mui-tab-item" to="/"
                   :class="selected === 1? 'mui-active': ''"
                   @click.prevent="click_trigger(1)">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </div>
      <div class="mui-tab-item" to="/cate"
                   :class="selected === 2? 'mui-active': ''"
                   @click.prevent="click_trigger(2)">
        <span class="mui-icon icon-film"></span>
        <span class="mui-tab-label">频道</span>
      </div>
    </nav>

  </footer>
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
      click_trigger (val) {
        val === 1? this.$router.push('/') : this.$router.push('/cate');
        this.selected = val;
      }
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