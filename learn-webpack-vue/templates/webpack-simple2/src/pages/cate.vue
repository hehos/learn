<template>
  <div id="cate-page" class="mui-content first-page" style="padding-top: 50px;">
    <ul class="mui-table-view mui-grid-view mui-grid-9">

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        v-for="item in cateItems">
        <router-link
          :to="{
            name: 'list',
            params: {
              cid: item.id
            }
          }">
          <span class="mui-icon icon-video-camera"></span>
          <div class="mui-media-body">{{ item.name }}</div></a>
        </router-link>

      </li>

    </ul>
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

    .mui-icon {
      font-size: 30px;
      color: #ffffff;
      width: 60px;
      height: 60px;
      line-height: 60px;
      background-color: $orange-dark;
      border-radius: 100%;
    }
  }

</style>