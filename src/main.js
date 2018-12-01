// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
// import '../static/editor.md/css/editormd.min.css'
// import '../assets/less/iview.less';
import vueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import loading from 'components/common/loading'
import store from './vuex1/index'
import animate from 'animate.css'
import VueLazyload from 'vue-lazyload'
import $ from 'jquery'

import './assets/css/common.css'

import {request} from './utils/api.js'
import './assets/js/scrollReveal.js';
// 引入富文本编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// Vue.config.productionTip = false

// elementui组件
import {Row,Col,Menu,MenuItem,Carousel,CarouselItem,Tabs,TabPane,Steps,Step,Table,TableColumn,Collapse,CollapseItem,Form,FormItem,Input,Button,Notification,Popover,DatePicker} from 'element-ui';
Vue.use(Row).use(Col).use(Menu).use(MenuItem).use(Carousel).use(CarouselItem).use(Tabs).use(TabPane).use(Steps).use(Step).use(Table).use(TableColumn).use(Collapse).use(CollapseItem).use(Form).use(FormItem).use(Input).use(Button).use(Popover).use(DatePicker);
// elementui组件入坑，message和notification必须用下面这种引入方法，不能用vue.use()
Vue.component(Notification.name, Notification)
Vue.prototype.$notify = Notification

// iview组件
import {Icon} from 'iview'
Vue.component('Icon', Icon);

Vue.use(mavonEditor)

Vue.use(loading);
Vue.use(vueRouter)
Vue.use(VueLazyload,{
    loading: require('./assets/image/loading.gif')
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
