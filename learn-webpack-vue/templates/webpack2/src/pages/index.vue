<template>
  <div id="index-page" class="mui-content first-page" style="padding-top: 50px;">

    <header id="header" style="border-bottom: 1px solid #eeeeee;">

      <div class="header-item search-box">
        <span class="f-right ico-box"><i class="icon-search"></i></span>
        <div class="input-box">
          <input type="search" @click="$router.push('/search')" placeholder="搜索你要感兴趣的">
        </div>
      </div>

    </header>

    <!-- banner -->
    <div id="banner">
      <mt-swipe :auto="4000" style="height: 200px;">
        <mt-swipe-item v-for="item in sliderItems" :key="item.id">
          <router-link
            :to="{
                name: 'video',
                params: {
                  id: item.id
                }
              }">
            <img :src="item.img">
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>


    <div class="margin-b-10 block-wrap top-func-items">
      <div class="avatar-box">
        <span class="img-box"><img src="../images/banner2.jpg" class="avatar" alt=""></span>
        <span class="avatar-text">欢迎<br>某某</span>
      </div>
      <div class="funcs-box">
        <span class="func-item" @click="$router.push('/apply')"><i class="icon-edit3"></i>主播申请</span>
        <span class="func-item" @click="$router.push('/yuyue')"><i class="icon-clock2-o"></i>直播预约</span>
      </div>
    </div>

    <!-- 正在直播 -->
    <div class="block-wrap playing-box">
      <div class="index-title">
        <strong>正在直播</strong>
      </div>
      <mt-cell :title="playing.name" is-link
             :to="{
                name: 'video',
                params: {
                  id: playing.id
                }
              }"><i slot="icon" class="icon-video-camera orange-dark"></i>
      </mt-cell>
    </div>

    <!-- 最新 -->
    <div class="block-wrap"
      v-for="(cate, idx) in cats">

      <div class="title-bar index-title">
        <strong>{{ cate.name }}</strong>
        <router-link class="more"
          :to="{
            name: 'list',
            params: {
              cid: cate.cid
            }
          }">
          更多</router-link>
      </div>

      <div class="block-cont media-base-items">
        <div class="media-base" v-for="item in cate.video.slice(1, 5)">
          <router-link
            :to="{
              name: 'video',
              params: {
                id: item.id
              }
            }">
            <span class="img"><img class="" :src="item.img"></span>
            <div class="media-title">{{ item.name }}</div>
          </router-link>
        </div>
      </div>

    </div>

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

    },

    methods: {


    }

  }

 
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  @import "../scss/index.scss";

</style>
