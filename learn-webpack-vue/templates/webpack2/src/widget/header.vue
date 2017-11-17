<template>

  <header id="header">

    <a v-if="state.headerLeftIcon" @click="goBack"
       class="header-item"><i class="icon-angle-left2"></i></a>

    <div v-if="state.headerSearch" class="header-item search-box">
      <span class="f-right ico-box"><i class="icon-search"></i></span>
      <div class="input-box">
        <input type="search" @search="search($event)" placeholder="搜索你要感兴趣的">
      </div>
    </div>

    <h1 v-if="state.headerTitle" class="header-item header-title">{{ state.headerTitle }}</h1>

    <a v-if="state.headerRightText" @click="$router.push(state.headerRightRoute)"
            class="header-item">
      {{ state.headerRightText }}
    </a>

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
            sk: e.target.value
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
