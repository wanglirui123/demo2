<template>
  <div class="hander_wz">
    <Hander/>
    <div class="main_wz">
      <div class="main_news_nav">
        <ul>
          <li>
            <router-link to="/wenzhang/wenzhangYSJK" class="list_zw">饮食健康</router-link>
          </li>
           <li>
            <router-link to="/wenzhang/wenzhangGNXTL" class="list_zw">功能性调理</router-link>
          </li>
           <li>
            <router-link to="/wenzhang/wenzhangRQSS" class="list_zw">人群膳食</router-link>
          </li>
           <li>
            <router-link to="/wenzhang/wenzhangJBTL" class="list_zw">疾病调理</router-link>
          </li>
           <li>
            <router-link to="/wenzhang/wenzhangPRJQ" class="list_zw">烹饪技巧</router-link>
          </li>
        </ul>
      </div>
      <div class="main_news_banner">
        <div class="main_banner">
          <mt-swipe :auto="3000">
            <mt-swipe-item><img src="https://dn-mdpic.qbox.me/pic/201507/02/KJBWCcaeMtVOBqh_2171493369.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="https://dn-mdpic.qbox.me/pic/201508/21/aCrnCwIlyuFjYSF_1634446249.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="https://dn-mdpic.qbox.me/pic/201508/25/PAOjSEhmlJpMlAE_221275201.jpg" /></mt-swipe-item>
            <mt-swipe-item><img src="https://dn-mdpic.qbox.me/pic/201507/16/nbIfgKTnoTEmVve_458298016.jpg" /></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';
import Hander from './wenzhanghander'
export default {
  data(){
    return{
      list:[]
    }
  },
  components:{
    Hander
  }
}
</script>
<style lang="scss" scoped>
$sc : 25;
  .hander_wz{
    width: 100%;
  }
  .main_wz{
    width: 100%;
    padding-top: 88/$sc+rem;
  }
  .main_news_nav{
    width: 100%;
    height:  44/$sc+rem;
    line-height:  44/$sc+rem;
    position: fixed;
    left: 0px;
    top:  44/$sc+rem;
    background: #fefefe;
    box-sizing: border-box;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 1000;
  }
  .main_news_nav ul{
    padding: 0px 0px;
    font-size: 0px;
    width:500/$sc+rem;
  }
  .main_news_nav ul li{
    display: inline-block;
    vertical-align: top;
    width:  100/$sc+rem;
    text-align: center;
    overflow: hidden;
  }
  .list_zw{
    color: #666;
    font-size: 14px;
    display: inline-block;
    vertical-align: top;
  }
  .router-link-active{
    color: #ff4c35;
  }
  .main_banner{
    width: 100%;
    height:  260/$sc+rem;
  }
  .main_banner img{
    width: 100%;
  }
</style>