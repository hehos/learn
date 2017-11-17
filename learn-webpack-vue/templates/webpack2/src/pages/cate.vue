<template>
  <div id="cate-page" class="mui-content first-page" style="padding-top: 50px;">

    <div class="margin-t-10 grid-box grid-col-3 block-wrap">

      <router-link class="grid-cell" v-for="(item, idx) in cateItems" :key="idx"
                 :to="{
                    name: 'list',
                    params: {
                      cid: item.id
                    }
                  }">
        <div class="ico-box">
          <i class="icon-video-camera"></i>
        </div>
        <div class="view-title">{{ item.name }}</div>
      </router-link>

    </div>


  </div>
</template>

<script>

  export default {
    name: 'cate',
    data () {
      return {
        cateItems: [{}]
      }
    },
    created: function () {

      // 设置header
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '频道',
        headerSearch: false,
        headerLeftIcon: false,
        headerRightIcon: false,
        headerRightText: '',
        headerRightRoute: ''
      });

      this.$http.get(this.$http.options.root + this.$store.state.url + 'cat')
        .then(data => {
        this.cateItems = data.body;
      }, data => {
        alert('获取数据失败！');
      });
    }
  }


</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #cate-page {
  .mui-grid-view.mui-grid-9 {
    background-color: #ffffff;
  }

  .grid-cell {
    padding: 10px 0;
  }
  .view-title { margin-top: 10px; }
  .ico-box {
    font-size: 30px;
    color: #ffffff;
    width: 60px;
    height: 60px;
    line-height: 60px;
    background-color: $orange-dark;
    border-radius: 100%;
  }
  }

  .grid-box {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding: 10px 5px;
    i { margin-right: 0; }
    .grid-cell {
      flex: 0 1 25%;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      align-items: center;
      margin-bottom: 15px;
    }
    .ico-box {
      font-size: 40px;
    &.isBg {
       color: #fff;
       width: 1.2em;
       height: 1.2em;
       line-height: 1.2em;
       border-radius: .3em;
     }
    }
    .view-title {
      margin-top: 5px;
    }
  }

  $cols: 3, 4, 5, 6;
  @each $col in $cols {
    .grid-col-#{$col} {
      .grid-cell { flex: 0 1 (1/$col)*100%; }
    }
  }


</style>