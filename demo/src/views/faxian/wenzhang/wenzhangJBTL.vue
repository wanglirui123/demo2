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
          img:'http://images.meishij.net/p/20161129/69088c7e30cd2fa3b2fbce2e15f5c54b_150x150.jpg',
          h2:'吃什么可以美白牙齿',
          p:'吃什么可以美白牙齿，美白牙齿不仅给人增添美感，而且能预防和减...'
        },
        {
          img:'http://images.meishij.net/p/20161128/5d41ff055c0547d18f8723f5b65279fd_150x150.jpg',
          h2:'辟谣：榴莲牛奶同吃不会猝死',
          p:'微信朋友圈曾流传这样一则消息：中国游客吃榴莲后喝牛奶，致咖啡...'
        },
        {
          img:'http://images.meishij.net/p/20161122/fd5cbd59e8dcd65f7bba44e69019734d_150x150.jpg',
          h2:'醋疗非万能，日常用醋6大误区',
          p:'原标题：醋疗不是万能日常用醋需防6大误区醋疗之说风声鹊起，以...'
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