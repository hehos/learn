<template>
  <div id="list-page" class="mui-content">

    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore
              :top-method="loadTop"
              :bottom-method="loadBottom"
               @bottom-status-change="handleBottomChange"
               :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list mui-table-view  ">
          <li class="mui-table-view-cell mui-media page-loadmore-listitem"
              v-for="item in items">
            <router-link
                :to="{
                    name: 'video',
                    params: {
                      id: item.id
                    }
                  }">
              <img class="mui-media-object mui-pull-left" :src="item.img">
              <div class="mui-media-body">
                <div class="title mui-ellipsis">{{ item.name }}</div>
                <p class='mui-ellipsis'>{{ item.intro ? item.intro: '&nbsp;' }}</p>
                <p class="sundry-info">
                  <span class="time mui-pull-right">
                    {{ new Date(item.date*1000).toLocaleDateString() }}
                  </span>
                  <span><i class="icon-eye"></i>{{ item.clicks }}</span>
                  <span><i class="icon-commenting-o">1883</i></span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
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

        this.$http.get(this.$http.options.root + this.$store.state.url + 'search', {
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
      }
    },

    created() {
      // 设置header
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '',
        headerSearch: true,
        headerLeftIcon: true,
        headerRightIcon: false,
        headerRightText: '频道',
        headerRightRoute: '/cate'
      });

      console.log(this.$store.state.headerSearch);
//        this.items = [
//            {name: 'zs1'},
//            {name: 'zs2'},
//            {name: 'zs3'},
//            {name: 'zs10'},
//            {name: 'zs11'}
//        ];

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
    .mui-media-object { margin-top: 10px; }
    .title { padding-right: 0; }
    .sundry-info {
      span { margin-right: 10px; }
    }

    .mui-table-view .mui-media-body {
      line-height: 1.8;
    }

    .mui-table-view {
      .title {
        font-size: 14px;
        line-height: 1.5;
      }
      .mui-media-object {
        width: 80px;
        min-height: 60px;
        max-width: none;
        margin-top: 5px;
      }
    }
  }
</style>