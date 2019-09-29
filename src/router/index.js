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
      component: HelloWorld
    },
    {
      path: '/a/:id',
      name: 'a',
      component: A
    },
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/fold',
      name: 'Fold',
      component: Fold
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }

  ]
})
