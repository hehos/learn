import Vue from 'vue';

import router from './router';
import store from './store';

import '@/scss/comm.scss';
import 'mint-ui/lib/style.css';

import MintUI from 'mint-ui';
Vue.use(MintUI);

import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.root
  = process.env.NODE_ENV !== 'production'
  ? '/api/' : 'http://video.jc001.cn/';

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})



