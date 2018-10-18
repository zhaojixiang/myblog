// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './assets/less/iview.less';
import vueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import loading from 'components/common/loading'
import store from './vuex1/index'
import animate from 'animate.css'
import VueLazyload from 'vue-lazyload'

import {request} from './utils/api.js'
import './assets/js/scrollReveal.js';

// Vue.config.productionTip = false

Vue.use(iView);
Vue.use(ElementUI);
Vue.use(loading);
Vue.use(vueRouter)
Vue.use(VueLazyload,{
    loading: './assets/image/loading.jpg'
})

Vue.prototype.$api = request
//
// // 注册全局组件  v-focus
// Vue.directive('focus',{
//   inserted(el){
//       console.log(el,'=======');
//     el.focus()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
