<template>
  <div id="special-page" class="mui-content">
    <div class="special-intro">
      <img :src="datas.img" alt="">
      <div class="block-wrap">
        <p class="intro-text">
          {{ datas.detail }}
        </p>
      </div>
    </div>
    <div class="special-list">
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6"
            v-for="item in datas.otherItems">
          <router-link
            :to="{
              name: 'video',
              params: {
                id: item.id,
                cateId: item.cateId
              }
            }">
            <img class="mui-media-object" :src="item.img">
            <div class="mui-media-body">{{ item.title }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'special',
    data () {
      return {
        datas: {}
      }
    },
    created: function () {
      this.$http.get('/static/data/special.json',
        { id: this.$route.params.id }).then(data => {
        const datas = data.body;

        this.datas = datas;

        // 使用设置header信息
        this.$store.commit({
          type: 'setHeadInfo',
          headerTitle: datas.title,
          headerRightIcon: 'icon-share2'
        })
      }, data => {
        alert('获取数据失败！');
      });
    }
  }
</script>

<style lang="scss">
  #special-page {
    .intro-text { 
      padding: 5px 10px 10px;
    }
  }
</style>