<template>
  <div id="list-page" class="mui-content">

    <div class="page-loadmore-wrapper" ref="wrapper"
         :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore
      :bottom-method="loadBottom"
      @bottom-status-change="handleBottomChange"
      :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="page-loadmore-list mui-table-view">
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
              <div class="title">{{ item.name }}</div>
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
        <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">
          ↑
        </span>
        <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="triple-bounce"></mt-spinner>
          </span>
      </div>
    </mt-loadmore>
    </div>

    <!--<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">-->
      <!--<mt-loadmore :bottom-method="loadBottom"-->
                   <!--@bottom-status-change="handleBottomChange"-->
                   <!--:bottom-all-loaded="allLoaded" ref="loadmore">-->
        <!--<ul class="page-loadmore-list">-->
          <!--<li v-for="item in list" style="line-height: 60px" class="page-loadmore-listitem">{{ item }}</li>-->
        <!--</ul>-->
        <!--<div slot="bottom" class="mint-loadmore-bottom">-->
          <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>-->
          <!--<span v-show="bottomStatus === 'loading'">-->
            <!--<mt-spinner type="snake"></mt-spinner>-->
          <!--</span>-->
        <!--</div>-->
      <!--</mt-loadmore>-->
    <!--</div>-->

  </div>
</template>


<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--return {-->
        <!--list: [],-->
        <!--allLoaded: false,-->
        <!--bottomStatus: '',-->
        <!--wrapperHeight: 0-->
      <!--};-->
    <!--},-->

    <!--methods: {-->
      <!--handleBottomChange(status) {-->
        <!--this.bottomStatus = status;-->
      <!--},-->

      <!--loadBottom() {-->
        <!--alert(88);-->
        <!--setTimeout(() => {-->
          <!--let lastValue = this.list[this.list.length - 1];-->
          <!--if (lastValue < 40) {-->
            <!--for (let i = 1; i <= 10; i++) {-->
              <!--this.list.push(lastValue + i);-->
            <!--}-->
          <!--} else {-->
            <!--this.allLoaded = true;-->
          <!--}-->
          <!--this.$refs.loadmore.onBottomLoaded();-->
        <!--}, 1500);-->
      <!--}-->
    <!--},-->

    <!--created() {-->
      <!--for (let i = 1; i <= 20; i++) {-->
        <!--this.list.push(i);-->
      <!--}-->
    <!--},-->

    <!--mounted() {-->
      <!--this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;-->
    <!--}-->
  <!--};-->
<!--</script>-->


<script>

  export default {
    name: 'list',

    data() {
      return {
        items: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,

        currentPage: 1
      };
    },

    created() {
      this.loadData();
    },

    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        alert(88);
//        this.loadData();

      },

      // 自定义加载数据
      loadData() {

        var routeParams = this.$route.params;

        this.$http.get(this.$http.options.root + this.$store.state.url + 'search', {
          params: {
            cid: routeParams.cid,
            sk: routeParams.key,
            p: this.currentPage
          }
        }).then(data => {
          this.$refs.loadmore.onBottomLoaded();

          const datas = data.body;

          if(datas.length <= 0) {
            this.allLoaded = true;
          }
          this.items = this.items.concat(...datas.list);

        }, data => {
          alert('获取数据失败！');
        });

        this.currentPage++;
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }

  }
</script>


<style lang="scss">
  #list-page {
    height: 100vh;
    .mui-media-object { margin-top: 10px; }
    .title { padding-right: 0; }
    .sundry-info {
      span { margin-right: 10px; }
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