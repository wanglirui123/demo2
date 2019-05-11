<template>
  <div class="mian_YSJK">
    <router-link to="" class="item_clearfix_YSJK" v-for="(item,index) in list" :key="index">
      <img :src="item.img" />
      <div class="item_right_YSJK">
        <div class="item_right_inner_YSJK">
          <h2>{{item.h2}}</h2>
          <p>{{item.p}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[
        {
          img:'http://images.meishij.net/p/20170713/213df5fb8faa20d77cdc6f96798e17fc_150x150.jpg',
          h2:'为什么网红们都爱丘比沙拉汁',
          p:'又到了要露肉的季节，很多注意身材的美眉开始戒肉减油，多吃蔬菜...'
        },
        {
          img:'http://images.meishij.net/p/20170605/54aad9503158cf80a783eb13657079ff_150x150.jpg',
          h2:'考前饮食三大忌，这些坑你不要踩',
          p:'距离高考还有一周，许多考生家长都想方设法在最后冲刺的时刻给孩...'
        },
        {
          img:'http://images.meishij.net/p/20170123/b43be469069cab07d99b486cc326a6bf_150x150.jpg',
          h2:'冻鱼保鲜保营养吗?',
          p:'最近关于活鱼的事儿备受关注，而当活鱼玩失踪的时候，内心感到最...'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
$sc : 25;
  .mian_YSJK{
    width: 100%;
    min-height: 300/$sc+rem;
    padding-bottom: 50/$sc+rem;
  }
  .item_clearfix_YSJK{
    height: 111/$sc+rem;
    width: 100%;
    padding: 10/$sc+rem 5%;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
    display: block;
  }
  .item_clearfix_YSJK img{
    display: block;
    width: 90/$sc+rem;
    height: 90/$sc+rem;
    margin-right: -100%;
    float: left;
  }
  .item_right_YSJK{
    width: 100%;
    float: left;
    height: 90/$sc+rem;
  }
  .item_right_inner_YSJK{
    margin-left: 100/$sc+rem;
  }
  .item_right_inner_YSJK h2{
    font-size: 16/$sc+rem;
    line-height: 22/$sc+rem;
    color: #000;
  }
  .item_right_inner_YSJK p{
    font-size: 14/$sc+rem;
    line-height: 18/$sc+rem;
    color: #ababab;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>