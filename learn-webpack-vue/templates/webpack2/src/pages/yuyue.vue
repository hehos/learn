<template>
  <div id="apply-page" class="mui-content">

    <mt-field label="姓名" placeholder=""></mt-field>
    <mt-field label="性别" placeholder=""></mt-field>
    <mt-field label="公司" placeholder=""></mt-field>
    <mt-field label="手机" placeholder="" type="tel"></mt-field>
    <mt-field label="微信" placeholder=""></mt-field>
    <mt-field label="擅长" placeholder="" type="textarea"></mt-field>

    <div class="margin-t-40 padding-10">
      <mt-button class="active-btn" type="primary" size="large">预约</mt-button>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'cate',
    data () {
      return {
      }
    },
    created: function () {

      // 设置header
      this.$store.commit({
        type: 'setHeadInfo',
        headerTitle: '主播申请',
        headerSearch: false,
        headerLeftIcon: true,
        headerRightIcon: false,
        headerRightText: '',
        headerRightRoute: ''
      });

    }
  }


</script>

<style lang="scss">

  @import "../scss/_variables.scss";
  @import "../scss/_mixins.scss";


</style>