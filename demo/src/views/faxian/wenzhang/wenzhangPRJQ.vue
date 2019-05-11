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
          img:'http://images.meishij.net/p/20161208/1921dd2877270c8982424a9e51bc98d8_150x150.jpg',
          h2:'保质期45天还是巴氏奶吗？',
          p:'相比国产牛奶，很多人更青睐进口巴氏奶。羊城晚报记者调查发现...'
        },
        {
          img:'http://images.meishij.net/p/20161206/ae37c3542dcfbeae9f4c7fc711db7550_150x150.jpg',
          h2:'你被“食品安全新闻”坑过吗?',
          p:'11月20日，由国家食品药品监督管理总局新闻宣传中心、中国食品工...'
        },
        {
          img:'http://images.meishij.net/p/20161205/b5d84c52df4220a0b6a16036df463e8f_150x150.jpg',
          h2:'自助餐要这样吃才划算',
          p:'不少人打着扶墙进，扶墙出的口号来迎接自助餐，即便回本占了小便...'
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