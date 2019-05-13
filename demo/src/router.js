import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './views/recommend.vue'
import Article from './views/article.vue'

import Article_details from './views/article-details.vue'

import Discover from './views/faxian/discover.vue'
import Local from './views/local.vue'
import User from './views/user.vue'
import Son from './views/son/son.vue'
import Bar from './views/son/bar.vue'
import Tab from './views/son/tab.vue'
import Sous from './views/son/sous.vue'
import Rong from './views/son/rong.vue'

import Seek from './views/son/seek.vue'
import Menu from './views/son/menu.vue'
import Hottest from './views/son/hottest.vue'
import Newest from './views/son/newest.vue'
import Morning from './views/son/morning.vue'

import deng from './views/deng.vue'
import ShiCai from './views/faxian/shicai/shicai.vue'
import CaiDan from './views/faxian/caidan/caidan.vue'
import CaiDanZX from './views/faxian/caidan/caidanZX.vue'
import CaiDanZR from './views/faxian/caidan/caidanZR.vue'
import ZhuanTi from './views/faxian/zhuanti/zhuanti.vue'
import WenZhang from './views/faxian/wenzhang/wenzhang.vue'
import WenZhangYSJK from './views/faxian/wenzhang/wenzhangYSJK.vue'
import WenZhangGNXTL from './views/faxian/wenzhang/wenzhangGNXTL.vue'
import WenZhangRQSS from './views/faxian/wenzhang/wenzhangRQSS.vue'
import WenZhangJBTL from './views/faxian/wenzhang/wenzhangJBTL.vue'
import WenZhangPRJQ from './views/faxian/wenzhang/wenzhangPRJQ.vue'
import RiShiJi from './views/faxian/rishiji/rishiji.vue'
import zhu from './views/zhu.vue'
import info from './views/info.vue'
import vuejsonp from 'vue-jsonp'
import axios from 'axios'

Vue.use(vuejsonp)
Vue.use(Router)
Vue.prototype.axios = axios
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
      path: '/rong',
      name: 'rong',
      component: Rong
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      redirect: { "name": "bar" },
      children: [
        {
          path: '/menu/bar',
          name: 'bar',
          component: Bar
        },
        {
          path: '/menu/tab',
          name: 'tab',
          component: Tab
        }
      ]
    },
     {
      path: '/article/',
      name: 'article',
      component: Article,
    },
    {
      path: '/article-details/:id',
      name: 'Article_details',
      component: Article_details
    },
    {
      path: '/son',
      name: 'son',
      component: Son

    },
    {
      path: '/sous',
      name: 'sous',
      component: Sous
    },
    {
      path: '/morning',
      name: 'morning',
      component: Morning
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
          path: '/home/shicai',
          name: 'shicai',
          component: ShiCai
        },
        {
          path: '/home/zhuanti',
          name: 'zhuanti',
          component: ZhuanTi
        },
        {
          path:'/caidan',
          name:'caidan',
          redirect:{'name':'caidanZX'},
          component: CaiDan,
          children:[
            {
              path:'/caidan/caidanZX',
              name:'caidanZX',
              component: CaiDanZX
            },
            {
              path:'/caidan/caidanZR',
              name:'caidanZR',
              component: CaiDanZR
            }
          ]
        },
        
        {
          path:'/wenzhang',
          name:'wenzhang',
          redirect:{'name':'wenzhangYSJK'},
          component: WenZhang,
          children:[
            {
              path:'/wenzhang/wenzhangYSJK',
              name:'wenzhangYSJK',
              component: WenZhangYSJK
            },
            {
              path:'/wenzhang/wenzhangGNXTL',
              name:'wenzhangGNXTL',
              component: WenZhangGNXTL
            },
            {
              path:'/wenzhang/wenzhangRQSS',
              name:'wenzhangRQSS',
              component: WenZhangRQSS
            },
            {
              path:'/wenzhang/wenzhangJBTL',
              name:'wenzhangJBTL',
              component: WenZhangJBTL
            },
            {
              path:'/wenzhang/wenzhangPRJQ',
              name:'wenzhangPRJQ',
              component: WenZhangPRJQ
            }
          ]
        },
        {
          path:'/rishiji',
          name:'rishiji',
          component: RiShiJi
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
        }, {
          path : '/home/user/info',
          name : "info" ,
          component : info
        },
        {
          path: '/home/zhu',
          name: 'zhu',
          component: zhu,
          // redirect : { name : 'shouji'},
          // children : [
          //   {
          //     path : '/home/zhu/youxiang',
          //     name : 'youxiang',
          //     component : 'youxiang'
          //   },{
          //     path : '/home/zhu/shouji',
          //     name : 'shouji',
          //     component : 'shouji'
          //   },
          // ]
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