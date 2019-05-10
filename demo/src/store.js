import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banner: [
      { img: "https://s1.c.meishij.net/zt/images/ad/chufangreshi.png" },
      { img: "https://s1.c.meishij.net/zt/images/ad/huixiang.jpg" },
      { img: "https://s1.c.meishij.net/zt/images/ad/meishijgushi.jpg" },
      { img: "https://s1.c.meishij.net/zt/images/ad/huoguo.jpg" },
      { img: "https://s1.c.meishij.net/zt/images/ad/hongbei.jpg" },
      { img: "https://s1.c.meishij.net/zt/images/ad/chirou.jpg" },
      { img: "https://s1.c.meishij.net/zt/images/ad/meishiriji.jpg" }
    ],
    menu:[
      { 
        id:1,
        img: "https://static.meishij.net/wap/images/v6/zhms1.png" ,
        name:'餐桌食光'
      },
      { 
        id:2,
        img: "https://static.meishij.net/wap/images/v6/bake1.png" ,
        name:'玩转烘焙'
      },
      { 
        id:3,
        img: "https://static.meishij.net/wap/images/v6/question1.png" ,
        name:'美食课堂'
      },
      { 
        id:4,
        img: "https://static.meishij.net/wap/images/v6/exercise1.png" ,
        name:'最IN活动'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
