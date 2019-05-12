<template>
  <div class="hander_sc">
    <Hander/>
    <div id="main_con">
        <router-link to="" class="item_sc" v-for="(item,index) in list" :key="index">
          <img :src="item.img"/>
          <div class="right_sc">
            <div class="right_inner_sc">
              <h2>{{item.h2}}</h2>
              <div class="right_inner_tags_sc">
                <span>{{item.tags1}}</span>
                <span>{{item.tags2}}</span>
                <span>{{item.tags3}}</span>
                <span>{{item.tags4}}</span>
              </div>
              <div class="right_inner_row">{{item.row}}</div>
            </div>
          </div>
        </router-link>
    </div>
  </div>
</template>
<script>
import Hander from './shicaiharder'
export default {
  data(){
    return{
      list:[
        {
          img:'http://images.meishij.net/p/20170330/faa37fc1ad02dafb198a73bccf2c68c5_150x150.jpg',
          h2:'藕',
          tags1:'强健胃粘膜',
          tags2:'预防贫血',
          tags3:'改善肠胃',
          tags4:'止血',
          row:'较低热量'
        },
        {
          img:'http://images.meishij.net/p/20170330/dac8824c5a3d41a274b84331f0376468_150x150.jpg',
          h2:'白萝卜',
          tags1:'促进消化',
          tags2:'保护肠胃',
          tags3:'预防富贵病',
          tags4:'增强机体免疫力',
          row:'较低热量'
        },
        {
          img:'http://images.meishij.net/p/20170330/5ff27eba123f27615b1c0f0c406a5c27_150x150.jpg',
          h2:'土豆',
          tags1:'瘦身',
          tags2:'美容',
          tags3:'吃出好性格',
          tags4:'消除水肿',
          row:'中等热量'
        },
        {
          img:'http://images.meishij.net/p/20111202/62c149c64a4c9a7a02911650cc50b256_150x150.jpg',
          h2:'南瓜',
          tags1:'预防癌症',
          tags2:'保护胃粘膜',
          tags3:'降血糖降血压',
          tags4:'预防前列腺',
          row:'较低热量'
        },
        {
          img:'http://images.meishij.net/p/20111214/a82d115d88dd46598f4333777582469c_150x150.jpg',
          h2:'西红柿',
          tags1:'抗癌',
          tags2:'可降脂降压',
          tags3:'健胃消食',
          tags4:'延缓衰老',
          row:'较低热量'
        }
      ]
    }
  },
  components:{
    Hander
  }
}
</script>
<style lang="scss" scoped>
$sc : 25;
.hander_sc{
  width: 100%;
}
#main_con{
  width: 100%;
  min-height: 667/$sc+rem;
  padding-top: 50/$sc+rem;
  padding-bottom: 50/$sc+rem;
  
}
.item_sc{
    width: 100%;
    float: left;
    padding: 10/$sc+rem 5%;
    box-sizing: border-box;
    border-bottom: 1px solid #e6e6e6;
}
.item_sc img{
    display: block;
    width: 90/$sc+rem;
    height: 90/$sc+rem;
    float: left;
    margin-right: -100%;
}
.right_sc{
    width: 100%;
    float: left;
    height: 90/$sc+rem;
}
.right_inner_sc{
    margin-left: 100/$sc+rem;
}
.right_inner_sc h2{
    font-size: 16px;
    line-height: 28/$sc+rem;
    color: #000;
}
.right_inner_tags_sc{
    width: 100%;
    font-size: 0;
    margin-top: 4/$sc+rem;
    height: 28/$sc+rem;
    overflow: hidden;
}
.right_inner_tags_sc span{
    display: block;
    float: left;
    background: #e8e8e8;
    color: #686868;
    padding: 0 10/$sc+rem;
    font-size: 14/$sc+rem;
    margin: 2/$sc+rem;
    line-height: 28/$sc+rem;
    height: 28/$sc+rem;
}
.right_inner_row{
    background: url(../../../assets/fximg/p_con_icon_rl1@3x.png) left no-repeat;
    color: #46c01b;
    background-size: 1.125rem 1.125rem;
    padding-left: 30/$sc+rem;
    padding-top: 10/$sc+rem;
    font-size: 14px;
}
</style>