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
          img:'http://images.meishij.net/p/20150528/965800b40feceb4adfe66452fcca937b_150x150.jpg',
          h2:'编辑原创——高清图文同步详解懒人版秘制三杯鸡做法',
          p:'提起三杯鸡，那绝对是道大碗喝酒、大块吃肉的好菜。三杯鸡最先起...'
        },
        {
          img:'http://images.meishij.net/p/20161213/d0c489cdd9a4c7fa881bb46d5b5f716e_150x150.jpg',
          h2:'菜板种类多 教你日常消毒小窍门',
          p:'菜板是厨房用具中绝对不能少的一种，而菜板的种类有很多，分别都...'
        },
        {
          img:'http://images.meishij.net/p/20161219/2963f6c85b0bfff744f59b31073d944d_150x150.jpg',
          h2:'放调味料的最佳时间你可知道?',
          p:'经常出入厨房的人会知道，想要做出好吃的菜，会用到各种调味品，...'
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