/**
 * Created by hehui on 2017/3/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerTitle: '九正VR视频',
    headerSearch: false,
    headerLeftIcon: false,
    headerRightIcon: false,
    headerRightText: '',
    headerRightRoute: '',
    url: 'mobile/'
  },
  mutations: {
    setHeadInfo (state, obj) {
      window.Object.assign(state, obj);
    }
  }
})