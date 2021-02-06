// 这个页面是全局的

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'

// vue中的bus   总线机制
// prototype  ---> 共有属性
Vue.prototype.eventBus = new Vue()

// 解决项目大的会莫名其妙的报错  
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 懒加载，在图片数据还没有更新之前显示的loding图片，----
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
// 第一种 小公司----弊端:图片是盗取的，稳定性差
// loading: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3266227385,3580863888&fm=26&gp=0.jpg",

// 第二种 引入内部的----常用
loading:'/a/loading-bubbles.svg'
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

