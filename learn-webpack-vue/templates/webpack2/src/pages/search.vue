<template>
  <div id="list-page">
    <mt-search v-model="searchKey" @input="search">
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore
          :top-method="loadTop"
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="page-loadmore-list block-wrap">
            <div class="page-loadmore-listitem media-small-imgtxt"
                 v-for="(item, idx) in result" :key="idx">
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

    </mt-search>

  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchKey: '',
        result: [],
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
        this.result = [];
        this.currentPage = 1;
        this.allLoaded = false;
        this.loadApiData();
      },
      loadBottom() {
        this.loadApiData();
      },

      loadApiData(key) {
        var routeParams = this.$route.params;
        var url = this.$http.options.root + this.$store.state.url + 'search';

        this.$http.get(url, {
          params: {
            sk: this.searchKey,
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
          this.result = this.result.concat(...datas.list);

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
        this.currentPage = 1;
        this.loadApiData();
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



</style>