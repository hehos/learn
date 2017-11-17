<template>
  <div id="play-video-page" class="mui-content">

    <div class="top-back-btn" @click="goBack">
      <i class="mui-icon mui-icon-left-nav"></i>
    </div>

    <div class="play-wrap">
      <div class="play-window">
        <video :src="video.jz_watch_url"  width="100%" controls="controls">
          你的浏览器不支持
        </video>
      </div>
      <div class="block-wrap play-info">
        <h4 class="title">{{ video.name }}</h4>
        <div class="play-status">
          <span class="mui-badge mui-badge-warning" style="margin-right: 15px;">{{ video.catname }}</span>
          {{ video.clicks }}次播放</div>
        <div class="play-user-act">
          <span class="mui-pull-right">
            <!--<a class="act-btn" href=""><i class="icon-gift"></i></a>-->
            <!--<a class="act-btn" href=""><i class="icon-download"></i></a>-->
            <!--<a class="act-btn" href=""><i class="icon-share-square-o"></i></a>-->
          </span>
          <span><i class="icon-comment-o"></i>1823</span>
        </div>
      </div>
      <div class="block-wrap play-intro">
        <h4 class="title">简介</h4>
        <p>{{ video.intro ? video.intro: '视频介绍' }}</p>
      </div>

    </div>

    <div id="SOHUCS"></div>

  </div>
</template>

<script>
  export default {
    name: 'play-video',
    data () {
      return {
        video: {}
      }
    },
    created: function () {

      this.$http.get(this.$http.options.root + this.$store.state.url + 'detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(data => {
        this.video = data.body;
      }, data => {
        alert('获取数据失败！');
      });

    },
    methods: {
      goBack() {
        if(document.referrer) {
          this.$router.go(-1);
        } else {
          this.$router.push('/list');
        }
      }
    }
  }
</script>



<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";

  #play-video-page {

    .play-window video { display: block; }
    .play-info, .play-intro {
      line-height: 2;
      padding: 10px;
    }
    .play-info .title { line-height: 1.5; }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #444;
      margin-bottom: 10px;
    }
    .play-status {
      color: #999;
      font-size: 14px;
    }
    .play-user-act {
      color: #666;
      .act-btn {
        margin-left: 10px;
      }
    }
    .play-intro p {
      color: #666;
      line-height: 1.5;
    }
    .play-intro {
      .more {
        font-size: 14px;
        color: $btnColor;
      }
    }
  }
</style>