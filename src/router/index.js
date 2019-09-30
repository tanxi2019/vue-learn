import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import A from '@/components/A'
import Tab from '@/components/Tab'
import Animation from '@/components/animation'
import Page from '@/components/page'
import Fold from '@/components/fold'
import Login from '@/components/login'
import Message from '@/components/message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        needLogin:true,
        title: '首页'
      }
    },
    {
      path: '/a/:id',
      name: 'a',
      component: A,
      meta:{
        needLogin:true,
        title: '页面A'
      }
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab,
      meta:{
        needLogin:true,
        title: 'TAB切换'
      }
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation,
      meta:{
        needLogin:true,
        title: '动画页面'
      }
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
      meta:{
        needLogin:true,
        title: '分页'
      }
    },
    {
      path: '/fold',
      name: 'Fold',
      component: Fold,
      meta:{
        needLogin:true,
        title: '侧边栏效果'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        title: '登录'
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta:{
        needLogin:true,
        title: '提示'
      }
    }

  ]
})
