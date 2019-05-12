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
      
    
       { 'id':0,
        'title':'吃10瓶钙片不如吃它，健脑又补钙，价格实惠，孩子常吃个头猛窜',
        'amount':'868925',
        'date':'2018-09-11',
        'url':'http://site.meishij.net/r/115/223/4868365/a4868365_151625751555588.jpg'
      },
      {
        'id':1,
        'title':'这菜再贵，冬天也要隔三差五给孩子吃，不仅涨劲，还提高免疫力',
        'amount':'164480',
        'date':'2018-12-29',
        'url':'http://site.meishij.net/r/43/125/6906293/a6906293_150882780542500.jpg'
      },
      {
        'id':2,
        'title':'春天减肥就靠它，2块钱一斤，没有比它更容易减肥的蔬菜了',
        'amount':'138784',
        'date':'2018-04-23',
        'url':'http://site.meishij.net/r/191/82/9145691/a9145691_150193619270595.jpg'
      },
      {
        'id':3,
        'title':'冬天的菜就炒“它”，钙是鸡蛋的9倍，却只要5毛1斤',
        'amount':'111723',
        'date':'2018-12-21',
        'url':'https://s1.st.meishij.net/r/92/193/9360842/a9360842_154182995417748.jpg'
      },
      {
        'id':4,
        'title':'它是便秘“死对头”，每天吃一点，清肠道排宿便，还能防口臭',
        'amount':'134436',
        'date':'2019-03-19',
        'url':'https://s1.st.meishij.net/r/10/120/30010/a30010_154656757701754.jpg'
      },
      {
        'id':5,
        'title':'婆婆隔三差五做1次，全家都馋这道菜，次次都被儿孙疯抢',
        'amount':'692961',
        'date':'2018-12-10',
        'url':'https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799612795865.jpg'
      },
      {
        'id':6,
        'title':'它是天然“消食片”，家里常备点好吃又好做，孩子吃易消化吃饭香',
        'amount':'223582',
        'date':'2019-03-11',
        'url':'https://s1.st.meishij.net/r/168/44/9198668/a9198668_154702740532413.jpg'
      },
      {
        'id':7,
        'title':'做红烧肉时，掌握这2个技巧，肉又香又软还不腻，不懂就亏了',
        'amount':'129344',
        'date':'2018-08-15',
        'url':'https://s1.st.meishij.net/r/169/107/12964419/a12964419_153136023402222.jpg'
      },
      {
        'id':8,
        'title':'二月二一定要吃的这道菜，再不吃又要等一年！你还不知道吗？',
        'amount':'629715',
        'date':'2018-03-15',
        'url':'https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011081105766.jpg'
      },
      {
        'id':9,
        'title':'起床后口苦、口干、有异味？是身体这个地方需要“灭火”！要重视',
        'amount':'133154',
        'date':'2018-12-30',
        'url':'http://site.meishij.net/r/115/32/1008115/a1008115_150946102516961.jpg'
      },
      {
        'id':10,
        'title':'海带不要再炒了！隔壁大姐：每次这么做一大盆，全家老少都抢着吃',
        'amount':'164321',
        'date':'164321',
        'url':'https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639401890097.jpg'
      },
    ],
    "details":[
      {
        "id":0,
        "h1":"吃10瓶钙片不如吃它，健脑又补钙，价格实惠，孩子常吃个头猛窜",
        "p1":"孩子处在青春期，总担心他智力跟不上，个头跟不上，寻思要不要买点钙片给他补补。听有经验的朋友说，与其吃钙片补，不如从日常的饭菜上给他补。买来的钙片中钙含量不一定有多高，但是自己挑钙含量多的食材做给孩子吃，他总能吸收够。于是朋友向我推荐了一种食材，吃10瓶钙片不如吃它，健脑又补钙，价格实惠，孩子常吃个头猛窜。这菜就是黄豆，黄豆富含丰富的营养物质，蛋白质、钙等，把黄豆搭配着肉类、蛋类来吃，它的营养能和蛋、奶的营养相比，甚至会超过蛋和奶的营养。大家都知道，现在很多豆制品、食用油等都会用豆子来制作。今天小编教大家一道五花肉烧黄豆，吃10瓶钙片不如吃它，健脑又补钙，价格实惠，孩子常吃个头猛窜。赶紧学起来。",
        "p2":"五花肉烧黄豆",
        "url1":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625789710619.jpg",
        "p3":"By  草海(来自腾讯.)",
        "p4":"五花肉 500克、黄豆 500克、八角 1个、八角 1个、老抽 2勺、生抽 1勺",
        "p5":"1.备好食材",
        "url2":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625759583631.jpg",
        "p6":"2.锅中倒油炒八角大料肉",
        "url3":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625759338055.jpg",
        "p7":"3.加老抽生抽炒",
        "url4":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625759086490.jpg",
        "p8":"4.炒香",
        "url5":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625758527654.jpg",
        "p9":"5.加入黄豆炒",
        "url6":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625758299806.jpg",
        "p10":"6.加2碗水大火烧开中小火烧大概30分钟",
        "url7":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625757996245.jpg",
        "p11":"7.汤汁收干",
        "url8":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625757656917.jpg",
        "p12":"8.出锅",
        "url9":"https://s1.st.meishij.net/rs/115/223/4868365/n4868365_151625757364860.jpg",
        "p13":"1、黄豆营养全面，其中蛋白质的含量比猪肉高2倍，是鸡蛋含量的2.5倍。蛋白质的含量不仅高，而且质量好。2、把黄豆搭配着肉类、蛋类来吃，它的营养能和蛋、奶的营养相比，甚至会超过蛋和奶的营养。3、黄豆脂肪具有很高的营养价值，它的脂肪中含有很多不饱和脂肪酸，容易被人体消化吸收。",
        "p14":"你喜欢吃五花肉烧黄豆吗？"
      },
      {
        "id":1,
        "h1":"这菜再贵，冬天也要隔三差五给孩子吃，不仅涨劲，还提高免疫力",
        "p1":"随着天气的越来越冷了，尤其是在冬至过后，更是冷的不行！但是我们在饮食上面还是要非常的注重营养的均衡，经常给孩子补充一定的营养。冬天的时候我们也是经常家庭聚会，这个时候就要准备一些菜，今天就要跟大家介绍一款家庭聚会必备菜，超级好吃下饭，孩子最爱吃了，经常吃个子也是长得非常高！尤其是在冬至过后，这菜再贵也要常做给孩子吃，冬天也要隔三差五给孩子吃，不仅涨劲，还提高免疫力，很值得宝妈们学习！特别推荐给大家！",
        "p2":"红烧鸡爪",
        "url1":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882783018100.jpg",
        "p3":"By SH4377",
        "p4":"鸡爪 10个、细香葱 少量、姜 4片、蒜 4瓣、八角 2个、老抽 少许、生抽 少许、白酒 少许、食盐 2勺、白糖 2勺",
        "p5":"1.洗干净鸡爪，剪掉鸡爪的指甲。",
        "url2":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882780867665.jpg",
        "p6":"2.将鸡爪切成两段，鸡爪棍和鸡爪分开。我们家习惯这样，也可以不切。",
        "url3":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882781066386.jpg",
        "p7":"3.冷水把鸡爪下锅，第一滚就可以捞出来，过凉水，晾干水分。",
        "url4":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882781344597.jpg",
        "p8":"4.蒜头、姜片、干辣椒入冷油中爆香。",
        "url5":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882781624282.jpg",
        "p9":"5.鸡爪下锅炒制一分钟加入少许白酒去腥。",
        "url6":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882781931700.jpg",
        "p10":"6.加老抽上色，少许生抽调味。",
        "url7":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882782167795.jpg",
        "p11":"7.加水没过鸡爪，放入两个八角，大火烧开，小火慢炖。",
        "url8":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882782491502.jpg",
        "p12":"8.15分钟之后，大火收汁。装盘，撒葱花。",
        "url9":"https://s1.st.meishij.net/rs/43/125/6906293/n6906293_150882782762108.jpg",
        "p13":"1、鸡爪的营养价值颇高,含有丰富的钙质及胶原蛋白,多吃能软化血管。同时,还具有美容功效,胶原蛋白在酶的作用下,能提供皮肤细胞所需要的透明质酸,使皮肤水分充足保持弹性,从而防止皮肤松弛起皱纹；2、鸡爪中还富含铜,对于血液、中枢神经和免疫系统,头发、皮肤和骨骼组织以及脑子和肝、心等内脏的发育和功能有重要影响；3、胶原蛋白在人体酶的催化下，分解出人体需要的透明质酸，使皮肤水分充足保持弹性，从而防止皮肤松弛起皱纹，具有美容功效。",
        "p14":"你喜欢吃鸡爪吗？"
      },
      {
        "id":2,
        "h1":"春天减肥就靠它，2块钱一斤，没有比它更容易减肥的蔬菜了",
        "p1":"萝卜在中国民间素有“小人参”的美称。萝卜可增强肌体免疫力，并能抑制癌细胞的生长，对防癌、抗癌有重要意义。一到冬天，便成了家家户户饭桌上的常客，不仅是冬天能吃，春天也能吃。冬天吃萝卜养生，春天吃萝卜刮油，女孩子多吃萝卜可以排毒养颜，利于减肥，关键是萝卜特别便宜，一根白白胖胖，水分超多的萝卜才2块钱一斤，都能做出好大一碗 ，实在划算。萝卜也能和排骨一起熬汤，熬出来的汤非常清淡，不油，很适合女孩子喝，没有比萝卜更容易减肥的菜了。今天给大家分享这道排骨白萝卜汤，清淡好喝，快来尝试一下吧!",
        "p2":"排骨白萝卜汤",
        "url1":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193624793734.jpg",
        "p3":"By 深念(来自腾讯.)",
        "p4":"白萝卜 500克、排骨 300克、精盐 5克、葱 适量、姜 四片、生抽 适量",
        "p5":"1.排骨切段洗净",
        "url2":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193619682090.jpg",
        "p6":"2.少一些开水",
        "url3":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193620138863.jpg",
        "p7":"3.將排骨焯热水，焯掉血水，排骨变色",
        "url4":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193620628542.jpg",
        "p8":"4.焯水的排骨放入冷水中，放入几片生姜",
        "url5":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193621178610.jpg",
        "p9":"5.白萝卜洗净去皮,切成萝卜块",
        "url6":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193621947907.jpg",
        "p10":"6.把萝卜放入锅中",
        "url7":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193622348075.jpg",
        "p11":"7.开大火到水开，盖上砂锅盖，小火煲一个小时",
        "url8":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193622754288.jpg",
        "p12":"8.出锅时加入盐和生抽调味，撒上适量葱花，排骨萝卜汤就好了",
        "url9":"https://s1.st.meishij.net/rs/191/82/9145691/n9145691_150193623299853.jpg",
        "p13":"1、在处理排骨的时候，我觉得排骨焯水前用冷水浸泡，能将排骨中的血水清理得更加干净，炖出来的汤完全无腥味。2、这是一道非常清淡的汤，调味料建议只加盐，才能保持汤的原汁原味，才能达到减肥的效果。3、炖汤的水一定要加足，中途不建议添加水。4、全程保持小火慢炖一小时左右。",
        "p14":"大家还知道哪些可以减肥的蔬菜呢？"
      },
      {
        "id":3,
        "h1":"冬天的菜就炒“它”，钙是鸡蛋的9倍，却只要5毛1斤",
        "p1":"佛手瓜含有丰富的的营养，既可以做菜又可以当做水果生吃，再加上佛手瓜的形状就像是双掌合十，好似佛教祝福的意思，深受人们喜爱。如果说冬天的北方，白菜、萝卜、土豆便宜，那南方佛手瓜的价格也不算是贵，因为佛手瓜的生命力十分顽强，每年种上一颗，就足够一家人吃的了。冬天的才就炒“它”，钙是鸡蛋的9倍，却只要5毛1斤。佛手瓜虽然长的多，几个也便宜，但营养可不“便宜”。它的蛋白质含量是黄瓜的3倍，钙是鸡蛋的9倍，维生素和矿物质含量也显著高于其他瓜类，特别是硒的含量是多种蔬菜不能比拟的。，实在划算。萝卜也能和排骨一起熬汤，熬出来的汤非常清淡，不油，很适合女孩子喝，没有比萝卜更容易减肥的菜了。今天给大家分享这道排骨白萝卜汤，清淡好喝，快来尝试一下吧!",
        "p2":"清炒佛手瓜",
        "url1":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183013240691.jpg",
        "p3":"By 行小丫",
        "p4":"佛手瓜 1个、干辣椒 2个、植物油 适量、味极鲜 适量、食盐 适量、花椒粉 适量",
        "p5":"1.佛手瓜洗净去核",
        "url2":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183004049210.jpg",
        "p6":"2.切丝",
        "url3":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183005520732.jpg",
        "p7":"3.平底锅中放适量植物油，加热，油五成热时，加入掰开的干辣椒，小火加热",
        "url4":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183006229049.jpg",
        "p8":"4.油热后倒入佛手瓜，翻炒几下",
        "url5":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183008009836.jpg",
        "p9":"5.加入适量花椒面、味极鲜，继续翻炒",
        "url6":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183009239210.jpg",
        "p10":"6.翻炒至佛手瓜变软后，加入适量食盐，出锅",
        "url7":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183009921210.jpg",
        "p11":"7.起锅！",
        "url8":"https://s1.st.meishij.net/rs/92/193/9360842/n9360842_154183010792234.jpg",
        "p12":"",
        "url9":"",
        "p13":"1、佛手瓜的食用方法有很多，新鲜的佛手瓜可以切片、切丝，作荤炒、素炒、凉拌，做汤、涮火锅、优质饺子馅等。还可以加工成腌制品或做罐头。在国外，佛手瓜以蒸制、烘烤、油炸、嫩煎等方法食用。除了果实以外，根茎也可以食用，方法和风味与土豆相似，含维生素A、C较多。嫩叶和新梢也可作为蔬菜食用。2、佛手瓜食用时最好选择幼果，以果肩部位光泽及果皮表面纵沟较浅者，且果皮鲜绿色、细嫩、未硬化为佳。佛手瓜每年的上市期为秋末，可长期储存，常温下可由10月一直放到翌年3月~4月，风味基本不变。",
        "p14":"佛手瓜还可以怎么做呢？"
      },
      {
        "id":4,
        "h1":"它是便秘“死对头”，每天吃一点，清肠道排宿便，还能防口臭",
        "p1":"它是便秘“死对头”，每天吃一点，清肠道排宿便，还能防口臭。便秘/宿便堆积，简直成现代人的通病，尤其是妇女和老人经常被其困扰着。如果宿便经常在体内长时间堆积，就会当值肠胃新陈代谢紊乱，短期的话，并不会对身体产生明显的影响，但是一旦时间过长，就会出现皮肤暗沉、出现色斑、冒痘等症状，如果情节严重还会上升到肠胃方面的疾病。今天给大家介绍的这道菜，里面的主要材料可以说是便秘的“死对头”，对缓解便秘排除宿便有非常显著的效果，而且还能预防口臭。那么具体是什么菜，是怎样的做法就让我们一起来看看吧。",
        "p2":"甘醇黄瓜嫩鸡片",
        "url1":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656777091379.jpg",
        "p3":"By 孔老师教做菜",
        "p4":"鸡胸肉150克 适量、小黄瓜120克  适量、胡萝卜80克 适量、干木耳30克 适量、万字甘醇酱油2大匙 适量、料酒适量 适量、淀粉30克 适量、蒜少许 适量",
        "p5":"1.胡萝卜去皮切薄片；黄瓜切片，木耳泡发后改小刀。（干木耳泡发，期间换水2-3次，去除杂质。）",
        "url2":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656766570579.gif",
        "p6":"2.鸡胸肉切薄片。",
        "url3":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656766778599.gif",
        "p7":"3.碗中倒入1大匙万字酱油",
        "url4":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656766857984.gif",
        "p8":"4.再倒入淀粉，料酒，用筷子搅拌均匀，腌渍片刻。",
        "url5":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656767058094.gif",
        "p9":"5.锅中底油烧至7分热，放入蒜片爆香，再倒入肉片，翻炒变色。",
        "url6":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656767252703.gif",
        "p10":"6.倒入黄瓜、胡萝卜、木耳翻炒2分钟。",
        "url7":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656767393838.gif",
        "p11":"7.再倒入1大匙万字酱油。",
        "url8":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656767453174.gif",
        "p12":"8.翻炒均匀，即可出锅。咸鲜可口，颜色看起来也颇有食欲啊",
        "url9":"https://s1.st.meishij.net/rs/10/120/30010/n30010_154656767870925.gif",
        "p13":"1、美容，黄瓜是一味可以美容的菜蔬，被称为“厨房里的美容剂”，经常食用或贴在皮肤上可有效地抗皮肤老化，减少皱纹的产生，并可防止唇炎、口角炎。因此，黄瓜是很好的减肥品。2、减肥，它有一种可以防止脂肪的作用，黄瓜是很好的减肥品。爱吃甜食得人，可以吃些黄瓜，会帮助我们达到减肥的目的。但是要吃新鲜的黄瓜哦。3、加速新陈代谢，黄瓜含相当多的蛋白质及钾盐等。钾盐具有加速血液新陈代谢、排泄体内多余盐份的作用。幼儿吃后能促进肌肉组织的生长发育，成人常食对保持肌肉弹性和防止血管硬化有一定的作用。",
        "p14":"大家喜欢吃黄瓜吗？"
      },
      {
        "id":5,
        "h1":"婆婆隔三差五做1次，全家都馋这道菜，次次都被儿孙疯抢",
        "p1":"对于很多人来说，每天能吃到肉食是一件很兴奋很开心的事情。而牛肉作为营养价值很高，而且味道很鲜美的食材来说，是餐桌上常客，今天给大家分享一款凉拌牛肉。这道菜不仅色泽红亮，味道更是又麻又辣，吃起来牛头肉口感也是相当的劲道，而且不肥腻，好吃过瘾，每次我们回农村老家，婆婆隔三差五做1次，全家都馋这道菜，次次都被儿孙疯抢，老公更是还要打包回家，除了对婆婆的厨艺的肯定，更是为这道菜品独特的美味倾心，让它成为整个餐桌上的主角，而且经常吃也一点都不会吃腻。我要给婆婆做的这个菜打满分。",
        "p2":"凉拌牛肉",
        "url1":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799612795865.jpg",
        "p3":"By 格子07",
        "p4":"牛腱子 800克、五花肉 200克、香味 3片、老抽 适量、老干妈 适量、芝麻油 少许、八角 3个、干辣椒 一小把、桂皮 2段、姜 一小块、蒜蓉 适量、小米椒 2个、葱，香菜 一小把、生抽 适量",
        "p5":"1.将香料泡洗干净。",
        "url2":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611230690.jpg",
        "p6":"2.取一锅，倒入清水，加入香料煮开。",
        "url3":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611322851.jpg",
        "p7":"3.加入适量老抽，冰糖，料酒，放入五花肉。加入五花肉可以增加汤水油脂，会让牛肉口感更好。",
        "url4":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611435758.jpg",
        "p8":"4.放入牛腱子，盖上盖子，卤制1个钟。熄火闷4个小时后便可切片食用",
        "url5":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611566825.jpg",
        "p9":"5.热锅，倒入适量食用油，放入蒜蓉，小米椒爆香。",
        "url6":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611761959.jpg",
        "p10":"6.将爆香蒜蓉，辣椒米放入碗中，放入葱花，香菜。",
        "url7":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799611812952.jpg",
        "p11":"7.加入生抽，老干妈，一点点白糖，芝麻油拌匀。",
        "url8":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799612068039.jpg",
        "p12":"8.淋到切好的牛肉上便可食用。",
        "url9":"https://s1.st.meishij.net/rs/64/103/9963314/n9963314_150799612291650.jpg",
        "p13":"1、注意牛肉不要煮的的太烂，否则到时不好切片；2、爱吃辣的朋友油辣子可以多放点；3、料汁可以根据个人喜好增添，老干妈油辣子都可以，不喜欢葱花香菜的朋友可以不放；4、中医认为：牛肉有补中益气、滋养脾胃、强健筋骨、化痰息风、止渴止涎的功能，冬季吃牛肉进补正是时候；5、牛肉煮熟后加少量的醋会让肉更香，之后加盖闷的越久越入味；6、加入五花肉是为了增加汤水油脂，让牛肉口感更好，家里没有五花肉的小伙伴可以跳过这一步。",
        "p14":"小伙伴们试过自己做凉拌牛肉吗？"
      },
      {
        "id":6,
        "h1":"它是天然“消食片”，家里常备点好吃又好做，孩子吃易消化吃饭香",
        "p1":"它是天然“消食片”，家里常备点好吃又好做，孩子吃易消化吃饭香。它就是杏鲍菇。杏鲍菇蛋白质含量丰富，有人体所需的8种氨基酸，而且脂肪含量相当低，每100克只有0.1克的脂肪。此外，杏鲍菇还富含丰富的膳食纤维，有润肠道，防止便秘的作用，其灰分含量同样丰富，可参与机体的代谢调节，维持人体的体液平衡，对于孩子的生长发育和免疫调节都非常重要。隔三差五吃点杏鲍菇，助消化，增强抵抗力，对大人孩子都好。未烹饪前，杏鲍菇有杏仁香味，烹饪后有如鲍鱼的口感，再加上其价格实惠，深受大众喜爱。",
        "p2":"干煸杏鲍菇",
        "url1":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702830492008.jpg",
        "p3":"By 小圆食记",
        "p4":"杏鲍菇 400克、香菜 20克、洋葱 50克、孜然粉  5克、孜然粒  5克、芝麻 3克、辣椒粉 10克、生抽  15克、精盐 0.5克",
        "p5":"1.杏鲍菇撕成条",
        "url2":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816440316.jpeg",
        "p6":"2.洋葱切丝备用",
        "url3":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816598194.jpg",
        "p7":"3.热锅起油，爆香洋葱",
        "url4":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816551858.jpg",
        "p8":"4.再下杏鲍菇干煸",
        "url5":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816798426.jpeg",
        "p9":"5.收干水分后，加入生抽、辣椒粉、孜然粉、孜然粒、白芝麻、香菜，炒匀",
        "url6":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816828649.jpeg",
        "p10":"6.出锅前加入少许盐调味即可",
        "url7":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816969458.jpeg",
        "p11":"7.开动啦~",
        "url8":"https://s1.st.meishij.net/rs/168/44/9198668/n9198668_154702816994789.jpg",
        "p12":"",
        "url9":"",
        "p13":"1、手撕杏鲍菇之前可用刀拍杏鲍菇，把杏鲍菇用力拍散，接着撕成小条，尽量不要太大，炒的时候方便受热均匀。2、烹饪前，杏鲍菇要焯水，否则会带有一股菇腥味，也可以在烹饪的时候，放点米酒或者是料酒。3、干煸杏鲍菇的时候，宜全程大火爆炒，这样可以最大程度的保留营养，味道也会更好。4、洋葱不仅可以起到增鲜的作用，还能去除一些异味，让菜肴香味更鲜美纯正。此外患有皮肤病、患有眼睛类疾病、和患有肠胃疾病等人不宜吃洋葱，所以大家要根据具体情况加洋葱当配料。",
        "p14":"大家还喜欢怎样做杏鲍菇吃呢？"
      },
      {
        "id":7,
        "h1":"做红烧肉时，掌握这2个技巧，肉又香又软还不腻，不懂就亏了",
        "p1":"红烧肉是小编最爱吃的一道菜，满足了肉食动物的所有要求，还超级下饭。但是小编对自己做的红烧肉却不太满意，试了很多方法做出来还是会又腻又柴。我爹就不一样了，每次做出来的红烧肉又香又软还不腻，所以小编专门找老爹讨教了做法。老爹告诉我，做红烧肉时，要掌握这2个技巧，就能做好。首先盐要最后加，因为盐会让蛋白质变硬，做出来的肉自然会又柴又腻。其次最好用砂锅或者电饭煲，因为这样会让火候更小，温度更均匀。做出来的肉自然更入味啦。小编学会了这2个技巧，果然做出了完美的红烧肉，真是不懂就亏了！大家也快来学一学吧~",
        "p2":"下雨天，就特别想吃红烧肉",
        "url1":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136155356026.jpg",
        "p3":"By Susie的老巢",
        "p4":"五花肉 500克、杏鲍菇 200克、食用油 10克、姜片 5片、蒜 6瓣、冰糖 20克、香叶 3片、桂皮 3克、青花椒 3克、八角 3个、食盐 一小勺",
        "p5":"1.先将五花肉洗净，切方块",
        "url2":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136066978112.jpg",
        "p6":"2.平底锅加油烧热，将五花肉块煎至两面微黄后起锅",
        "url3":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136070216575.jpg",
        "p7":"3.用锅底剩余的油炒糖色，将冰糖放锅里，小火炒化至微焦",
        "url4":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136081019795.jpg",
        "p8":"4.再将煎好的红烧肉放入炒好的糖色锅中，加入老抽，姜片，蒜，香叶，花椒，桂皮，八角，一起翻炒。",
        "url5":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136088547762.jpg",
        "p9":"5.炒匀后加水刚好没过肉，大火烧开。这个时候就要用到我的红烧肉神奇了，因为不想时刻关注火候，还怕水烧干。到这一步了我就用电饭煲来完成接下来的步骤。省心省力！如果你不想用电饭锅就在大火烧开后改小火慢炖1小时。",
        "url6":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136100330874.jpg",
        "p10":"6.大火烧开后倒入电饭煲里，上面放的是我切条的杏鲍菇，盖上盖子，选择慢炖模式，中途可以搅拌一次，2小时后就好了。",
        "url7":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136122682365.jpg",
        "p11":"7.这样就好了，再加点盐调味，如果觉得汤汁多了，就倒出来放到锅里收汁，调味。",
        "url8":"https://s1.st.meishij.net/rs/169/107/12964419/n12964419_153136135669535.jpg",
        "p12":"",
        "url9":"",
        "p13":"1、红烧肉制作比较费时间，要有充足的耐心。在炒糖色的时候一定要小火，一不小心就会炒糊锅了！希望这个菜谱能帮到喜欢吃红烧肉又不会的你。2、猪肉进行烹调前，不要用热水清洗，因为猪肉含有肌溶蛋白，会在15摄氏度以上的水中溶解，所以用热水浸泡就会散失很多营养，同时口味也会欠佳；猪肉应当煮熟，因为猪肉偶尔会有寄生虫，如果生吃或料理不完全时，可能会在肝脏或脑部中寄生钩绦虫。猪肉属于酸性食物，为保持膳食的平衡，烹调时可适量搭配些豆类和蔬菜类的碱性食物，比如土豆、海带、芋头、藕、木耳、豆角等。",
        "p14":"你是怎么做红烧肉的？"
      },
      {
        "id":8,
        "h1":"二月二一定要吃的这道菜，再不吃又要等一年！你还不知道吗？",
        "p1":"二月二快到了，人们不光是有剪头发的习惯，吃上面也有讲究，各地风习俗不同，相同的地方在于无论是吃什么、做什么多数都和“龙”字相关其中天津的习惯就是吃焖子，因为银白色的焖子切成扁块状，排在一起很像龙的鳞片。表面煎的焦黄表示对“懒龙”的惩罚，督促它好带来丰收，也寓意煎除害虫。焖子原材料是绿豆，绿豆有着降血脂、降胆固醇、抗过敏、抗菌、抗肿瘤、增强食欲、保肝护肾的功效，绿豆淀粉的热量也低于普通淀粉，同时，这道菜外焦里嫩，再配上麻酱酱汁更是美味无比。这道菜和时令搭配切合，是不可多得的时令美食。~",
        "p2":"割舍不掉的小吃情节之煎焖子",
        "url1":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011081105766.jpg",
        "p3":"By 小闹and小牛",
        "p4":"焖子 250克、食用油 适量、芝麻酱 一勺、酱油 一勺、香菜 少量、糖 5克、精盐 适量、鸡精 适量、蒜 2瓣、麻椒油 适量",
        "p5":"1.大蒜切碎，加适量水，做成大蒜水",
        "url2":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011081474663.jpg",
        "p6":"2.一勺芝麻酱，吃饭的勺子就好，喜欢吃芝麻酱可以多放，自己在家做想吃多少放多少",
        "url3":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011081582878.jpg",
        "p7":"3.加入一勺酱油，五克糖，适量盐，鸡精",
        "url4":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082388888.jpg",
        "p8":"4.加适量水，把芝麻酱调成稀稀的糊状，可以流淌的状态",
        "url5":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082478166.jpg",
        "p9":"5.焖子切块",
        "url6":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082544907.jpg",
        "p10":"6.不粘锅放入适量油，不能太少",
        "url7":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082662568.jpg",
        "p11":"7.把焖子放入锅中，小火煎",
        "url8":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082743284.jpg",
        "p12":"8.煎的过程中用铲子把焖子弄碎，如果发现油少了，这个时候可以再放点油，煎到焖子变成透明的就可以了，煎好的焖子，放入调好的芝麻酱，大蒜水，麻油，喜欢吃辣的可以放辣椒油，放点香菜，就可以吃了",
        "url9":"https://s1.st.meishij.net/rs/175/226/8619175/n8619175_149011082915354.jpg",
        "p13":"1、焖子要趁热吃，不宜久放2、焖子切四方块，以一口吃掉为标准3、焖子色泽黄白，带有轻微t透明感，经过小火煎制之后变透明并带有轻微四面焦黄即可，一定要煎出金黄的焦底才好吃4、最好使用不粘锅，避免清洁时的困难5、是否添加配菜、添加何种类型配菜可根据个人喜好自行选择  焖子是中国北方地区的传统特色小吃，定州人“上到九十九，下到刚会走，都吃过焖子”。不同地方，焖子的做法有差异。焖子的原材料不同，成品也有差异哦",
        "p14":"二月二到了，大家那天准备做什么呢？"
      },
      {
        "id":9,
        "h1":"起床后口苦、口干、有异味？是身体这个地方需要“灭火”！要重视",
        "p1":"不知道大家有没有以下情况：起床后口苦、口干、口臭的现象。如果在刷牙、喝水后状况消失，是正常的情况，如果一整天症状都没有得到缓解，那就要注意了！是身体这个地方需要“灭火”！要重视。营养师大乔告诉我们，这是因为你肝火旺。肝火旺还分为实火和虚火。虚火还表现为双目干涩、视物模糊，双眼疲倦、烟花，声音尖细、像蝉鸣，身体潮热盗汗、腰膝酸软等。给大家推荐一款饮品，常喝远离肝火虚火旺，让身体更健康。这款饮品就是菊花茶，赶紧学起来吧，记得转发收藏哦。营养师大乔，推荐大家常喝哦。",
        "p2":"雪梨麦冬菊花茶",
        "url1":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946117776785.jpg",
        "p3":"By 緣豆兒",
        "p4":"雪梨 1个、麦冬 10克、菊花 5克、冰糖 适量",
        "p5":"1.准备好材料",
        "url2":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946107844581.jpg",
        "p6":"2.雪梨去皮去芯并切成小块",
        "url3":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946108459589.jpg",
        "p7":"3.麦冬洗净和雪梨一起放锅中加水约1800ml",
        "url4":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946109240256.jpg",
        "p8":"4.煮开后转小火熬1小时",
        "url5":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946109627037.jpg",
        "p9":"5.菊花洗净放入锅中",
        "url6":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946110122236.jpg",
        "p10":"6.再加入冰糖搅拌煮至融化",
        "url7":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946110821069.jpg",
        "p11":"7.然后关火放凉至室温就可以喝了",
        "url8":"https://s1.st.meishij.net/rs/115/32/1008115/n1008115_150946111351630.jpg",
        "p12":"",
        "url9":"",
        "p13":"1、清肝火，在常喝菊花茶的基础上，也不要忘记少熬夜，温水泡脚哦。2、白菊味偏甘，具有平肝明目、滋阴降火的功效，可以通过益肝补阴来平降相对亢进的“虚火”，并且对心脑血管有保护作用。3、雪梨是很好的养生食材，具有清热生津的功效，清炖或煮汤后其寒性会减少而润性增加，很能对抗秋燥。麦冬可以生津解渴、润肺止咳。菊花具有养肝明目、润喉生津等功效。三者搭配在一起，功效更佳。",
        "p14":"你平时喝菊花茶吗？"
      },
      {
        "id":10,
        "h1":"海带不要再炒了！隔壁大姐：每次这么做一大盆，全家老少都抢着吃",
        "p1":"海带不要再炒了！隔壁大姐：每次这么做一大盆，全家老少都抢着吃！营养师大乔介绍过：海带含有大量的碘，它具有“碱性食物之冠的美称”，碘可以促使甲状腺的机能提升，对於热量消耗及身体的新陈代谢相当有帮助，进而达到减重及控制体重的目的。而且海带中还含有大量的不饱合脂肪酸及食物纤维，它可以迅速清除血管管壁上多余的胆固醇，并且帮助胃液进行分泌，达到消化的目的，对于肠胃蠕动有很大帮助。海带的烹调方法很多，如海带炖排骨、海带烧肉、肉丝海带、海带汤等等，小编今天为大家介绍的是凉拌海带，一起来看看吧！",
        "p2":"拌海带",
        "url1":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639401890097.jpg",
        "p3":"By 飘渺02",
        "p4":"海带 200克、辣椒油 适量、糖 适量、精盐 适量、酱油 适量",
        "p5":"1.海带泡发,切成丝",
        "url2":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639371279312.jpg",
        "p6":"2.锅中放入水,烧热放入海带煮熟",
        "url3":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639371599483.jpg",
        "p7":"3.过凉水后的海带放入盐",
        "url4":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639371986189.jpg",
        "p8":"4.放入酱油",
        "url5":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639372281432.jpg",
        "p9":"5.放入糖",
        "url6":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639372505417.jpg",
        "p10":"6.放入鸡精",
        "url7":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639372997826.jpg",
        "p11":"7.放入辣椒油",
        "url8":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639373263635.jpg",
        "p12":"8.拌好后的海带,成品",
        "url9":"https://s1.st.meishij.net/rs/148/188/1484648/n1484648_149639373997044.jpg",
        "p13":"1、海带热量低且充满胶质、矿物质。海带中还富含可溶性纤维，比一般纤维更容易消化吸收，帮助身体顺畅排便。而且我们可以把海带作为宵夜或点心，因为海带不会长胖。2、海带不仅营养价值颇高，除了含有多种维生素，纤维素和矿物质外，而且，还是防治甲状腺肿的良药。海带中的碘极为丰富，此元素为体内合成甲状腺素的主要原料。而头发的光泽就是由于体内甲状腺素养发挥作用而形成的。3、海带富含钙元素与碘元素，有助于甲状腺素合成，这两种元素搭配，不仅能美容，，还有延缓衰老的作用。",
        "p14":"这道凉拌海带你喜欢吗？"
      }
    ]

  },
  mutations: {
    
  },
  actions: {

  }
 
})
