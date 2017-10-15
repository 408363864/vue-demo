//引入vue
import Vue from 'vue'
//引入vue主文件
import App from './App'
//引入vueresource 发起网络请求模块
//引入自定义路由
import router from './router'
//引入过滤器
import * as filters from './filters' // 全局filter
//引入store (vuex)
import store from './store'
//mockjs
import './mock'
//引入pub
// import IGT_PUB from 'IGT_PUB'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
