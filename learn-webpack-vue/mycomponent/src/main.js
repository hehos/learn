import gridBox from './components/grid-box.vue';
import gridCell from './components/grid-cell.vue';
import labelBox from './components/tab-box.vue';
import labelCell from './components/label-cell.vue';
import tabBox from './components/tab-box.vue';
import tabCell from './components/tab-cell.vue';
import tabPopupCell from './components/tab-popup-cell.vue';

// 引入第三方插件
// import vueAwesomeSwiper from 'vue-awesome-swiper';

const version = '2.2.1';
const install = function(Vue) {
  if (install.installed) return;

  Vue.component(gridBox.name, gridBox);
  Vue.component(gridCell.name, gridCell);
  Vue.component(labelBox.name, labelBox);
  Vue.component(labelCell.name, labelCell);
  Vue.component(tabBox.name, tabBox);
  Vue.component(tabCell.name, tabCell);
  Vue.component(tabPopupCell.name, tabPopupCell);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
  // vueAwesomeSwiper.install(window.Vue);
};

export default {
  install,
  gridBox,
  gridCell,
  labelBox,
  labelCell,
  tabBox,
  tabCell,
  tabPopupCell
}