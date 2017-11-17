<template>
  <header id="header-search" class="mui-bar mui-bar-nav header">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
    <div class="mui-title search-box">
      <input type="search" placeholder="搜索课程"
             @search="search($event)">
    </div>
    <button class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">导航</button>
  </header>
</template>


<script>

  export default {
    computed: {
    },
    created: function () {

    },
    methods: {
      search (e) {
        this.$router.push({
          name: 'search',
          params: {
            key: e.target.value
          }
        });
      }
    }

  }

</script>