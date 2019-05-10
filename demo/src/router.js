import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './views/recommend.vue'
import Article from './views/article.vue'
import Discover from './views/discover.vue'
import Local from './views/local.vue'
import User from './views/user.vue'
import deng from './views/deng.vue'

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
          path: '/home/article',
          name: 'article',
          component: Article
        },
        {
          path: '/home/discover',
          name: 'discover',
          component: Discover
        },
        {
          path: '/home/local',
          name: 'local',
          component: Local
        },
        {
          path: '/home/user',
          name: 'user',
          component: User,
        },{
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