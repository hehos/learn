<template>
  <div id="index-page" class="mui-content first-page" style="padding-top: 50px;">

    <!-- banner -->
    <div class="block-wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in sliderItems" :key="item.id">
          <router-link
            :to="{
                name: 'video',
                params: {
                  id: item.id
                }
              }">
            <img :src="item.img">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 正在直播 -->
    <div class="block-wrap playing-box">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <router-link class="mui-navigate-right"
            :to="{
                name: 'video',
                params: {
                  id: playing.id
                }
              }">
            <i class="icon-video-camera orange-dark"></i>{{ playing.name }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 最新 -->
    <div class="block-wrap"
      v-for="(cate, idx) in cats">

      <div class="index-title">
        <strong>{{ cate.name }}</strong>
        <router-link class="mui-pull-right more"
          :to="{
            name: 'list',
            params: {
              cid: cate.cid
            }
          }">
          更多</router-link>
      </div>

      <div class="block-cont">
        <ul class="mui-table-view mui-grid-view">
          <li class="mui-table-view-cell mui-media mui-col-xs-6"
            v-for="item in cate.video.slice(1, 5)">
            <router-link
              :to="{
                name: 'video',
                params: {
                  id: item.id
                }
              }">
              <img class="mui-media-object" :src="item.img">
              <div class="mui-media-body">{{ item.name }}</div>
            </router-link>
          </li>
        </ul>
      </div>

    </div>

    <!-- 热门 -->

  </div>
</template>

<script>

  export default {
    name: 'index',
    data () {
      return {
        sliderItems: [{}],
        playing: {},
        cats: [],
        // 幻灯片
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          loop: true
        }

      }
    },
    created: function () {

      // 设置header
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '',
        headerSearch: true,
        headerLeftIcon: false,
        headerRightIcon: false,
        headerRightText: '',
        headerRightRoute: ''
      });

      this.$http.get(this.$http.options.root + this.$store.state.url + 'index')
        .then(data => {
        const datas = data.body;

        this.sliderItems = datas.banner;
        this.playing = datas.cats[0].video[0];
        this.cats = datas.cats;
      }, data => {
        alert('获取数据失败！');
      }); 
    },

    mounted: function () {
      //  分享
//      var wxSharer = new WXShare();
//      wxSharer.ready({
//        title : "中文分享测试",
//        desc : '我这里是中文的描述',
//        link : 'http://m.jc001.cn',
//        img : 'http://ui.jc001.cn/images/logo.gif'
//      });

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

<style lang="scss">
  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #index-page {


    .mui-table-view {
      &:before,
      &:after {
         background-color: transparent;
      }
    }
    .playing-box {
      .mui-navigate-right {
        padding-right: 30px;
      }
    }
  }

</style>
