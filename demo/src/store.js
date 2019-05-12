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
    menu: [
      {
        id: 1,
        img: "https://static.meishij.net/wap/images/v6/zhms1.png",
        name: '餐桌食光'
      },
      {
        id: 2,
        img: "https://static.meishij.net/wap/images/v6/bake1.png",
        name: '玩转烘焙'
      },
      {
        id: 3,
        img: "https://static.meishij.net/wap/images/v6/question1.png",
        name: '美食课堂'
      },
      {
        id: 4,
        img: "https://static.meishij.net/wap/images/v6/exercise1.png",
        name: '最IN活动'
      }
    ],
    article: [
      {
        'id': 0,
        'title': '我请朋友吃饭，仅做了这样1道菜，不到5分钟就没了，一直抱怨我',
        'amount': '100730',
        'date': '2018-07-20',
        'url': 'http://s1.st.meishij.net/r/232/219/6617482/a6617482_151980409520222.jpg'
      },
      {
        'id': 1,
        'title': '女人不想变成黄脸婆，秋补就吃它，满满的胶原蛋白，比贴面膜管用',
        'amount': '241979',
        'date': '2018-10-26',
        'url': 'https://s1.st.meishij.net/r/12/100/12837512/a12837512_152827702734907.jpg'
      },
      {
        'id': 2,
        'title': '花生别再油炸了，3勺蜂蜜做出绝味花生，这香脆，让你停不下嘴！',
        'amount': '90946',
        'date': '2018-07-04',
        'url': 'https://s1.st.meishij.net/r/157/47/3324407/a3324407_152532965832538.jpg'
      },
      {
        'id': 3,
        'title': '老公隔三差五就馋“它”，1斤5元，比红烧肉香，1周必吃1次',
        'amount': '117777',
        'date': '2018-10-29',
        'url': 'http://site.meishij.net/r/216/197/6174466/a6174466_150747457081680.jpg'
      },
      {
        'id': 4,
        'title': '豆腐这做法简直绝了，喷香可口，我家1周做4次，儿子都吃上瘾了',
        'amount': '152510',
        'date': '2018-06-05',
        'url': 'http://s1.st.meishij.net/r/54/59/1702304/a1702304_151723359676278.jpg'
      },
      {
        'id': 5,
        'title': '它是宿便“天敌”，维生素比苹果高10倍，常吃轻松排出黑臭宿便',
        'amount': '808645',
        'date': '2019-04-06',
        'url': 'http://site.meishij.net/r/153/225/5493903/a5493903_151317138980623.jpg'
      },
      {
        'id': 6,
        'title': '面食这么做，孩子们的最爱！比包子简单10倍，解春懒还好消化',
        'amount': '131172',
        'date': '2019-04-08',
        'url': 'https://s1.st.meishij.net/r/118/00/13187618/a13187618_154336761579015.jpg'
      },
      {
        'id': 7,
        'title': '大虾别光用水煮，一道快手菜，10分钟搞定，好吃到舌头都要化了',
        'amount': '114311',
        'date': '2018-03-28',
        'url': 'http://site.meishij.net/r/25/20/10817525/a10817525_151584505839086.jpg'
      },
      {
        'id': 8,
        'title': '它被称为“穷人的阿胶”，6元一碗，每周吃两次，补血益气身体棒',
        'amount': '210777',
        'date': '2019-04-25',
        'url': 'https://s1.st.meishij.net/rs/157/47/3324407/n3324407_155341517173712.jpg'
      },
      {
        'id': 9,
        'title': '睡前喝杯它，一觉醒来皮肤光滑，小腹也变平坦了！以后天天喝！',
        'amount': '1294956',
        'date': '2018-03-23',
        'url': 'http://site.meishij.net/r/234/05/2251484/a2251484_150460427479481.jpg'
      },
      {
        'id': 10,
        'title': '立冬了，再贵都要买“它”，小孩吃了强筋骨、身体棒，可别舍不得',
        'amount': '247046',
        'date': '2018-11-12',
        'url': 'https://s1.st.meishij.net/r/78/128/13032078/a13032078_153293131725964.jpg'
      }
    ],
    list: [
      {
        'qq': "https://s1.ig.meishij.net/p/20190508/fbabcf79e24a6f4a6ff6001611e6fb8b.jpg",
        'ww': '糊塌子',
        'ee': '快手晶座 营养美味'
      },
      {
        'qq': "https://s1.ig.meishij.net/p/20190508/a0496dd794ac81959c81cb543adc0d7d.jpg",
        'ww': '鸡蛋灌饼',
        'ee': '外焦里嫩 零失败早餐'
      },
      {
        'qq': "https://s1.ig.meishij.net/p/20190508/1437e8dc0fc983b8b1136aa5859775ab.jpg",
        'ww': '懒人早餐',
        'ee': '制作简便 香甜美味'
      }
    ],

    arr: [
      {
        'rr': 'https://s1.c.meishij.net/wap6/images/v6/quanbunew.png',
        'tt': '菜谱分类'
      },
      {
        'rr': 'https://s1.c.meishij.net/wap6/images/v6/shipincaipunew.png',
        'tt': '视频菜谱'
      },
      {
        'rr': 'https://s1.c.meishij.net/wap6/images/v6/kuaishoucainew.png',
        'tt': '早餐'
      },
      {
        'rr': 'https://s1.c.meishij.net/wap6/images/v6/fujinnew.png',
        'tt': '附近'
      }
    ],
    cai: [
      {
        'ii': 'https://t12.baidu.com/it/u=1857008354,3246514386&fm=76',
        'oo': '六个月胎儿彩超'
      },
      {
        'ii': 'https://t11.baidu.com/it/u=1978432705,3415818999&fm=76',
        'oo': '学习煲仔饭'
      },
      {
        'ii': 'https://f11.baidu.com/it/u=247848361,1671294164&fm=76',
        'oo': '制作蛋糕培训'
      },
      
    
    ],
    cai1: [
      {
        'iii': 'https://t11.baidu.com/it/u=1978432705,3415818999&fm=76',
        'ooo': '学习煲仔饭'
      },
      {
        'iii': 'https://t12.baidu.com/it/u=1973745269,3414193612&fm=76',
        'ooo': '学酸辣粉'
      },
      {
        'iii': 'https://f11.baidu.com/it/u=411186904,3259317644&fm=76',
        'ooo': '孕妇四个月'
      },
      
    
    ],
    cai2: [
      {
        'iii': 'http://images.meishij.net/p/20190510/d4c5cece638911cf7a9f1ac10431a915.jpg',
        'ooo': '兼职牛排餐'
      },
      {
        'iii': 'http://images.meishij.net/p/20190510/6b5c7742fc50c23e03e3eb040d017721.jpg',
        'ooo': '番茄鱼丸堡'
      },
      {
        'iii': 'http://images.meishij.net/p/20190510/5fda1ec6fe910402dfe67e74978ad89e.jpg',
        'ooo': '奖项油焖笋'
      },
      
    
    ],
    cai3: [
      {
        'iii': 'https://t11.baidu.com/it/u=1978432705,3415818999&fm=76',
        'ooo': '学习煲仔饭'
      },
      {
        'iii': 'https://t11.baidu.com/it/u=2024310535,2873586026&fm=76',
        'ooo': '七个月胎儿'
      },
      {
        'iii': 'https://t12.baidu.com/it/u=320149619,2690408377&fm=76',
        'ooo': '学做早点'
      },
      
    
    ]

  },
  mutations: {

  },
  actions: {

  }
 
})
