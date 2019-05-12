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
          img:'http://images.meishij.net/p/20141105/f15340afada80a68740584e99784cf07_150x150.jpg',
          h2:'8张图告诉你冬季要暖的部位',
          p:'日渐寒冷的天气里，即使穿上了厚厚的衣服，有些人却仍然觉得冷...'
        },
        {
          img:'http://images.meishij.net/p/20161227/ce20da1cbff2dba6dc6e786bae0a3b0f_150x150.jpg',
          h2:'橘子吃多变“小黄人”?',
          p:'原标题：橘子吃多变小黄人?关于食物重口味知识作为大吃货帝国的...'
        },
        {
          img:'http://images.meishij.net/p/20161222/cc1d8fdf02ae8eea20ff37358d4d6f36_150x150.jpg',
          h2:'清洗烤箱的6个小窍门',
          p:'原标题：烤箱清洗很困难?教你清洗烤箱的6个小窍门现如今，人们的...'
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