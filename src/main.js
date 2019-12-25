// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.use(animate)
Vue.use(ElementUI)

Vue.config.productionTip = false
// 全局守卫，路由拦截
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    // 动态 title
    window.document.title = to.meta.title
    // 当页面需要登录的时候判断浏览器是否有localStorage || sessionStorage
    if (window.localStorage.msg) {
      next()
    } else {
      // 如果没有，让页面进入登录页
      next('/login')
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
