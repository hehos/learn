<template>

  <header id="header" class="mui-bar mui-bar-nav header">

    <a v-if="state.headerLeftIcon" @click="goBack"
       class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>

    <div v-if="state.headerSearch" class="mui-title search-box">
      <input type="search" placeholder="搜索课程"
             @search="search($event)">
    </div>

    <h1 v-if="state.headerTitle" class="mui-title">{{ state.headerTitle }}</h1>

    <button v-if="state.headerRightText" @click="$router.push(state.headerRightRoute)"
            class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">
      {{ state.headerRightText }}
    </button>

  </header>

</template>

<script>

  export default {
    data() {
      return {
        state: {}
      }
    },
    methods: {
      goBack() { 
        if(document.referrer) {
          this.$router.go(-1);
        } else {
          this.$router.push('/');
        }
      },

      search (e) {
        this.$router.push({
          name: 'search',
          params: {
            key: e.target.value
          }
        });
      }
    },
//    computed: {
//      headerTitle () { return this.$store.state.headerTitle },
//      headerSearch () { return this.$store.state.headerSearch },
//      headerLeftIcon () { return this.$store.state.headerLeftIcon },
//      headerRightIcon () { return this.$store.state.headerRightIcon },
//      headerRightText () { return this.$store.state.headerRightText }
//    },
    mounted: function () {
      this.state = this.$store.state;
    }
  }
 
</script>
