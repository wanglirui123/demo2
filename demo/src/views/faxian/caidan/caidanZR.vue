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
          h2:'老公的胃',
          em:'25篇菜谱',
          img1:'http://images.meishij.net/p/20121030/24205a0211370919edd7177fdbe32c40_150x150.jpg',
          img2:'http://images.meishij.net/p/20121025/2f843ccb6417a0bea09cbc410fef7acd_150x150.jpg',
          img3:'http://images.meishij.net/p/20120730/d0daef9808525c63645640c6078f015b_150x150.jpg',
          img4:'http://images.meishij.net/p/20120724/b4999d71487ccd4d46c29d4db3ac697b_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/70/21/st880320_146917243060714.jpg'
        },
        {
          h2:'宝贝爱吃',
          em:'36篇菜谱',
          img1:'http://images.meishij.net/p/20121031/d5a90b861d4f743e81b8028eda94e670_150x150.jpg',
          img2:'http://images.meishij.net/p/20121030/24205a0211370919edd7177fdbe32c40_150x150.jpg',
          img3:'http://images.meishij.net/p/20120830/41d7f6c56cafe6f715f63f030ca771b3_150x150.jpg',
          img4:'http://images.meishij.net/p/20120816/27686059392903bcd496f7e6f7d4a296_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/156/121/st30406_39911.jpg'
        },
        {
          h2:'家常主食',
          em:'25篇菜谱',
          img1:'http://images.meishij.net/p/20130815/1e10efe5c0994c4708956bc1b3c020e9_150x150.jpg',
          img2:'http://images.meishij.net/p/20130820/c7a081c33ad3c074e74f5567d520b885_150x150.jpg',
          img3:'http://images.meishij.net/p/20130828/5cdfe17c21d389d19a3881a8585cd981_150x150.jpg',
          img4:'http://images.meishij.net/p/20130829/4257fe708aa960f336a35b1eafa80365_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/97/224/st1368597_70604.jpg'
        },
        {
          h2:'蔬菜',
          em:'14篇菜谱',
          img1:'http://images.meishij.net/p/20120213/f83fc04d786a558dcfb9b4d77a4f8ef5_150x150.jpg',
          img2:'http://images.meishij.net/p/20120717/b0f7815f41ef8fa3bf0c175015e8d92a_150x150.jpg',
          img3:'http://images.meishij.net/p/20130320/e630bd45826fd5ccac4fabdf61a5d5c1_150x150.jpg',
          img4:'http://images.meishij.net/p/20120615/6df7a228eeba397057ba02d0f22e5e7f_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/73/24/st943573_52757.jpg'
        },
        {
          h2:'我爱烘焙',
          em:'19篇菜谱',
          img1:'http://images.meishij.net/p/20120427/47117f1d34d0f8a34bdaf9b8dd89e3ea_150x150.jpg',
          img2:'http://images.meishij.net/p/20120426/7ed047cab8b40d5bb3944be986fe8feb_150x150.jpg',
          img3:'http://images.meishij.net/p/20120411/072189f3e2dace73ba2f2ea054f15aaf_150x150.jpg',
          img4:'http://images.meishij.net/p/20120217/1c67a9cc6ea63b8f81c07b387a72abdf_150x150.jpg',
          img5:'https://s1.st.meishij.net/user/191/92/st1273191_27427.jpg'
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