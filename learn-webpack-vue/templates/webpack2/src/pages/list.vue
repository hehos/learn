<template>
  <div id="list-page" style="padding-top: 50px;">
    <header id="header" style="border-bottom: 1px solid #eeeeee;">

      <a @click="$router.go(-1)"
         class="header-item"><i class="icon-angle-left2"></i></a>

      <div class="header-item search-box">
        <span class="f-right ico-box"><i class="icon-search"></i></span>
        <div class="input-box">
          <input type="search" @search="search($event)" placeholder="搜索你要感兴趣的">
        </div>
      </div>

      <a @click="$router.push('/cate')"
         class="header-item">
        频道
      </a>

    </header>


    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
              :top-method="loadTop"
              :bottom-method="loadBottom"
               @bottom-status-change="handleBottomChange"
               :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="page-loadmore-list block-wrap">
          <div class="page-loadmore-listitem media-small-imgtxt"
              v-for="item in items">
            <router-link
                :to="{
                    name: 'video',
                    params: {
                      id: item.id
                    }
                  }">
              <span class="img"><img class="mui-media-object mui-pull-left" :src="item.img"></span>
              <div class="media-txt">
                <div class="media-title">{{ item.name }}</div>
                <p class="media-explain">{{ item.intro }}</p>
                <p class="sundry-info">
                  <span class="time f-right">
                    {{ new Date(item.date*1000).toLocaleDateString() }}
                  </span>
                  <span><i class="icon-eye"></i>{{ item.clicks }}</span>
                  <span><i class="icon-commenting-o">1883</i></span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="triple-bounce"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        items: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        currentPage: 1
      };
    },

    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadTop() {
        this.items = [];
        this.currentPage = 1;
        this.allLoaded = false;
        this.loadApiData();
      },
      loadBottom() {
        this.loadApiData();
      },

      loadApiData() {
        var routeParams = this.$route.params;
        var url = this.$http.options.root + this.$store.state.url + 'search';

        this.$http.get(url, {
          params: {
            cid: routeParams.cid,
            sk: routeParams.key,
            p: this.currentPage
          }
        }).then(data => {
          // 获取数据之后隐藏提示效果栏
          this.$refs.loadmore.onBottomLoaded();
          this.$refs.loadmore.onTopLoaded();

          const datas = data.body;

          if (datas.list.length <= 0) {
            this.allLoaded = true;
          }
          this.items = this.items.concat(...datas.list);

        }, data => {
          alert('获取数据失败！');
        });

        this.currentPage++;
      },

      goBack() {
        if(document.referrer) {
          this.$router.go(-1);
        } else {
          this.$router.push('/');
        }
      },
      search() {
        this.$router.push({
          name: 'search',
          params: {
            sk: e.target.value
          }
        });
      }
    },

    created() {

      this.loadApiData();

    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight
        - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>




<style lang="scss">
  #list-page {
    height: 100vh;
    .sundry-info {
      span { margin-right: 10px; }
    }

    .mui-table-view .mui-media-body {
      line-height: 1.8;
    }

    .media-small-imgtxt {
      padding: 10px;
      margin-bottom: 10px;
      .media-title {
        font-size: 14px;
        line-height: 1.5;
      }
      .img {
        display: inline-block;
        width: 80px;
        min-height: 60px;
        line-height: 60px;
        max-width: none;
        margin-top: 5px;
      }
    }
  }
</style>