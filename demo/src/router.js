import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './views/recommend.vue'
import Article from './views/article.vue'
import Discover from './views/faxian/discover.vue'
import Local from './views/local.vue'
import User from './views/user.vue'
import Son from './views/son/son.vue'

import Seek from './views/son/seek.vue'
import Menu from './views/son/menu.vue'
import Hottest from './views/son/hottest.vue'
import Newest from './views/son/newest.vue'

import deng from './views/deng.vue'
import ShiCai from './views/faxian/shicai/shicai.vue'
import CaiDan from './views/faxian/caidan/caidan.vue'
import ZhuanTi from './views/faxian/zhuanti/zhuanti.vue'
import WenZhang from './views/faxian/wenzhang/wenzhang.vue'


Vue.use(Router)

var rorter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { "name": "home" },
    },
    {
      path: '/seek',
      name: 'seek',
      component: Seek
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu

    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/son',
      name: 'son',
      component: Son

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: { "name": "recommend" },
      children: [
        {
          path: '/home/recommend',
          name: 'recommend',
          component: Recommend
        },

        {
          path: '/home/discover',
          name: 'discover',
          component: Discover
        },
            {
              path:'/home/shicai',
              name:'shicai',
              component: ShiCai
            },
            {
              path:'/home/caidan',
              name:'caidan',
              component: CaiDan
            },
            {
              path:'/home/zhuanti',
              name:'zhuanti',
              component: ZhuanTi
            },
            {
              path:'/home/wenzhang',
              name:'wenzhang',
              component: WenZhang
            },
        
        {
          path: '/home/local',
          name: 'local',
          component: Local,
          redirect: { "name": "hewest" },
          children: [
            {
              path: '/home/local/hewest',
              name: 'hewest',
              component: Hottest,
            },
            {
              path: '/home/local/newest',
              name: 'newest',
              component: Newest,
            }
          ]
        },
        {
          path: '/home/user',
          name: 'user',
          component: User,
        }, {
          path: '/home/deng',
          name: 'deng',
          component: deng,
        }

      ]
    },

  ]
})
// router.beforeEach((to,from,next)=>{
//   if(to.meta&& to.meta.deng){
//     if(localStorage.uid){
//         next()
//     }else{
//       next({
//           path : '/login'
//       })
//     }
//   }else{
//     next()
//   }
// })
export default rorter