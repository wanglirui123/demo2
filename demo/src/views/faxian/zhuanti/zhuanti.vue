<template>
  <div class="hander_zt">
    <Hander/>
    <div class="main_zt">
      <div class="item_zt" v-for="(item,index) in list" :key="index">
        <router-link to="">
          <div class="item_num_zt">
            <img :src="item.imgnum" />
            <span>{{item.num}}</span>
          </div>
          <img :src="item.img" />
          <div class="item_desc_zt">
            <div class="item_author_zt">
              <img :src="item.imgdesc" />
              <em>{{item.descname}}</em>
            </div>
            <h2>{{item.title}}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Hander from './zhuantihander'
export default {
  data(){
    return{
      list:[
        {
          imgnum:'https://s1.c.meishij.net/wap5/images/zt_star@3x.png',
          num:'1070',
          img:'http://images.meishij.net/p/20170913/05cfea3ce597edb068ac6bed7ba8ff0a.jpg',
          imgdesc:'https://s1.st.meishij.net/user/111/194/st111111_09983.jpg',
          descname:'duduMA',
          title:'古法腌制咸鸭蛋'
        },
        {
          imgnum:'https://s1.c.meishij.net/wap5/images/zt_star@3x.png',
          num:'720',
          img:'http://images.meishij.net/p/20170306/9df3aaa63cd91413fac4e9a4ae4eedf0.jpg',
          imgdesc:'https://s1.st.meishij.net/user/53/76/st4331553_148758667305676.jpg',
          descname:'可乐小玩子',
          title:'3.8|打造专属于你的女王餐'
        },
        {
          imgnum:'https://s1.c.meishij.net/wap5/images/zt_star@3x.png',
          num:'483',
          img:'http://images.meishij.net/p/20170301/41568d98ee1f58c00abdae6dc3189f4f.jpg',
          imgdesc:'https://s1.st.meishij.net/user/53/76/st4331553_148758667305676.jpg',
          descname:'duduMA',
          title:'惊蛰|春雷响，万物长'
        }
      ]
    }
  },
  components:{
    Hander
  }
}
</script>
<style lang="scss">
  .hander_zt{
    width: 100%;
  }
  .main_zt{
    width: 100%;
    min-height: 41.6875rem;
    padding-top: 3.75rem;
    padding-bottom: 3.125rem;
  }
  .item_zt{
    position: relative;
    width: 100%;
    margin-top: .625rem;
    background-color: #fdfdfd;
    box-sizing: border-box;
    padding-bottom: 1.25rem;
  }
  .item_num_zt{
    position: absolute;
    right: 5%;
    top: 1.25rem;
  }
  .item_zt .item_num_zt img{
    display: inline-block;
    vertical-align: top;
    width: 1rem;
  }
  .item_num_zt span{
    font-size: .875rem;
    color: #fdfdfd;
  }
  .item_zt img{
    display: block;
    width: 100%;
  }
  .item_desc_zt{
    position: relative;
  }
  .item_author_zt{
    float: right;
    margin-right: 5%;
    margin-top: -2.8125rem;
  }
  .item_author_zt img{
    display: block;
    width: 3.125rem;
    border-radius: 100%;
    border: rgba(255,255,255,0.5) .1875rem solid;
    margin: 0 auto;
  }
  .item_author_zt em{
    font-size: .875rem;
    color: #ff5151;
  }
  .item_desc_zt h2{
    display: block;
    width: 65%;
    margin: .625rem 0 0 5%;
    font-size: 1rem;
    color: #000;
    line-height: 1.375rem;
  }
</style>