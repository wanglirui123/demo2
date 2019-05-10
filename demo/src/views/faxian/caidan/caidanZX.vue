<template>
  <div>
     <div class="cd">
        <div class="cd_list">
          <div class="item_cd" v-for="(item,index) in list" :key="index">
              <router-link to="">
                <h2>{{item.h2}}</h2>
                <em>{{item.em}}</em>
                <ul>
                  <li><img :src="item.img1" /></li>
                  <li><img :src="item.img2" /></li>
                  <li><img :src="item.img3" /></li>
                  <li><img :src="item.img4" /></li>
                </ul>
                <img class="author_cd" :src="item.img5" />
              </router-link>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {
          h2:'我的菜单',
          em:'11篇菜谱',
          img1:'https://s1.st.meishij.net/r/41/203/113291/a113291_154277014567643.jpg',
          img2:'https://s1.st.meishij.net/r/41/203/113291/a113291_154285777846962.jpg',
          img3:'https://s1.st.meishij.net/r/41/203/113291/a113291_154036625030384.jpg',
          img4:'http://site.meishij.net/r/188/125/2281438/a2281438_01703.jpg',
          img5:'https://s1.c.meishij.net/images/default/tx2_2.png'
        },
        {
          h2:'我的菜单',
          em:'14篇菜谱',
          img1:'https://s1.st.meishij.net/r/85/84/8271085/a8271085_154518826487881.jpg',
          img2:'https://s1.st.meishij.net/r/126/246/9499126/a9499126_154460345963163.jpg',
          img3:'https://s1.st.meishij.net/r/85/84/8271085/a8271085_154502838359272.jpg',
          img4:'https://s1.st.meishij.net/r/117/193/2923367/a2923367_154408499664360.jpg',
          img5:'https://s1.c.meishij.net/images/default/tx2_3.png'
        },
        {
          h2:'我的菜单',
          em:'11篇菜谱',
          img1:'https://s1.st.meishij.net/r/157/47/3324407/a3324407_154011119338337.jpg',
          img2:'https://s1.st.meishij.net/r/62/147/599312/a599312_155534168154121.jpg',
          img3:'https://s1.st.meishij.net/r/231/13/6878481/a6878481_155395503828284.jpg',
          img4:'https://s1.st.meishij.net/r/106/232/3995606/a3995606_155616135763281.jpg',
          img5:'https://s1.c.meishij.net/images/default/tx2_3.png'
        },
        {
          h2:'我的菜单',
          em:'10篇菜谱',
          img1:'https://s1.st.meishij.net/r/109/27/13444359/a13444359_154641202139202.jpg',
          img2:'http://images.meishij.net/p/20100629/9de8074c39237840627f650a9bc9fdd3_150x150.jpg',
          img3:'http://site.meishij.net/r/163/225/2431413/a2431413_148648164906206.jpg',
          img4:'http://images.meishij.net/p/20120104/d74bc342b51a196242ec7e65ca1acd5c_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/91/165/st6228841_151711281462024.jpg'
        },
        {
          h2:'我的菜单',
          em:'10篇菜谱',
          img1:'http://site.meishij.net/r/195/139/8972445/a8972445_148505038825630.jpg',
          img2:'http://site.meishij.net/r/242/128/6532242/a6532242_147006602419530.jpg',
          img3:'http://site.meishij.net/r/67/36/4071567/a4071567_145965560137636.jpg',
          img4:'https://s1.st.meishij.net/r/78/92/13148078/a13148078_154578956141653.jpg',
          img5:'https://s1.c.meishij.net/images/default/tx2_1.png'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
  .cd_list{
    width: 100%;
  }
  .item_cd{
    position: relative;
    width: 100%;
    margin-top: .625rem;
    background-color: #fdfdfd;
    padding: .9375rem 5%;
    box-sizing: border-box;
  }
  .item_cd h2{
    font-size: 1rem;
    color: #000;
    display: block;
    text-align: center;
    line-height: 1.5rem;
  }
  .item_cd em{
    font-size: .75rem;
    color: #ff5151;
    display: block;
    text-align: center;
    line-height: 1.125rem;
  }
  .item_cd ul{
    font-size: 0;
    width: 100%;
    margin-top: .625rem;
  }
  .item_cd ul li{
    display: inline-block;
    vertical-align: top;
    width: 25%;
    padding: 0 .125rem;
    box-sizing: border-box;
  }
  .item_cd ul li img{
    display: block;
    width: 100%;
  }
  .author_cd{
    display: block;
    width: 2.5rem;
    border-radius: 100%;
    margin: -1.25rem auto 0;
  }
</style>