<template>
  <div id="log-page" class="mui-content">
    <div class="index-title">
      <strong>今天</strong>
    </div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in logItems">
        <router-link
          :to="{
            name: 'video',
            params: {
              id: item.id
            }
          }">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            <span class="mui-pull-right mui-badge mui-badge-warning channel-name">{{ item.cateName }}</span>
            <div class="mui-ellipsis title">{{ item.title }}</div>
            <p class='mui-ellipsis'>
              <i v-if="item.clientType == 'mobile'" class="icon-mobile-o"></i>
              <i v-if="item.clientType == 'pc'" class="icon-desktop"></i>
              <i v-if="item.clientType == 'tablet'" class="icon-tablet"></i>
              {{ item.progress == 100? '已完成' : '观看至' + item.progress + '%' }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="index-title">
      <strong>更早</strong>
    </div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media"
        v-for="item in logItems">
        <router-link
          :to="{
            name: 'video',
            params: {
              id: item.id
            }
          }">
          <img class="mui-media-object mui-pull-left" :src="item.img">
          <div class="mui-media-body">
            <span class="mui-pull-right mui-badge mui-badge-warning channel-name">{{ item.cateName }}</span>
            <div class="mui-ellipsis title">{{ item.title }}</div>
            <p class='mui-ellipsis'>
              <i v-if="item.clientType == 'mobile'" class="icon-mobile-o"></i>
              <i v-if="item.clientType == 'pc'" class="icon-desktop"></i>
              <i v-if="item.clientType == 'tablet'" class="icon-tablet"></i>
              {{ item.progress == 100? '已完成' : '观看至' + item.progress + '%' }}
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'cache-log',
    data () {
      return {
        logItems: [{}]
      }
    },
    created: function () {
      // 使用设置header信息
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '学习记录'
      })

      this.$http.get('/static/data/log.json',
        {isLog: true}).then(data => {
        const datas = data.body;

        this.logItems = datas.logItems;
      }, data => {
        alert('获取数据失败！');
      });
    }
  }
</script>