<template>
 <div class = 'big'>
     <div class = 'sou'>
       <span @click = 'add'><i class="iconfont icon-ren">&#xe630;</i></span>
       <input class = 'sou1' type="text" placeholder="菜谱名，食材名">
       <span><button>搜索</button></span>
     </div>
     <p>请输入要搜索的关键字</p>

     <div class = 'like'>
       <h3>猜你喜欢</h3>
       <div class = 'like_l'>
         <span v-for = '(item,index) in cai' :key = 'index'><img :src="item.ii" alt="">
           <h6>{{item.oo}}</h6>
         </span>
       </div>
       <div class = 'like_l'>
         <span v-for = '(item,index) in cai1' :key = 'index'><img :src="item.iii" alt="">
           <h6>{{item.ooo}}</h6>
         </span>
       </div>
     </div>

      <div class = 'like'>
       <router-link to = '/home/recommend'><h3>晚餐推荐<i class="iconfont icon-ren">&#xe6c7;</i></h3></router-link>
       <div class = 'like_l'>
         <span v-for = '(item,index) in cai2' :key = 'index'><img :src="item.iii" alt="">
           <h6>{{item.ooo}}</h6>
         </span>
       </div>
       <div class = 'like_l'>
         <span v-for = '(item,index) in cai3' :key = 'index'><img :src="item.iii" alt="">
           <h6>{{item.ooo}}</h6>
         </span>
       </div>
     </div>
     <div class = 'hot'>
      <router-link to = '/home/recommend'><h3>热门分类<i class="iconfont icon-ren">&#xe6c7;</i></h3></router-link>
       <ul class = 'hot1' v-for = '(item,index) in 4' :key = 'index'>
         <li>川菜</li>
         <li>粤菜</li>
         <li>东北菜</li>
         <li>湘菜</li>
       </ul>
        <div class = 'like_l'>
         <span v-for = '(item,index) in cai3' :key = 'index'><img :src="item.iii" alt="">
           <h6>{{item.ooo}}</h6>
         </span>
       </div>
       <div class = 'like_l'>
         <span v-for = '(item,index) in cai2' :key = 'index'><img :src="item.iii" alt="">
           <h6>{{item.ooo}}</h6>
         </span>
       </div>
     </div>
     <router-view></router-view>

 </div>
</template>

<script>
// import {mapState} from 'vuex'
export default {
  methods:{
    add(){
      this.$router.go(-1)
    }
  },
  computed:{
    ...mapState(['cai','cai1','cai2','cai3'])
  }
}
</script>

<style lang="scss" scoped>
$sc:25;

.big{
  background:white;
  .sou{
    background:white;
    display:flex;
    line-height:44 / $sc + rem;
    height:44 / $sc + rem;
    position:fixed;
    top:0;
    z-index: 44;
    i{margin-left:18px;}
    border-bottom: 1px solid rgb(228, 226, 226);
    .sou1{height:26.5 / $sc + rem;width:240 / $sc + rem;
        margin:15px 10px 0 25px;background:rgb(228, 226, 226);border:none;}
    button{
      height:32 / $sc + rem;
      width:55 / $sc + rem;
      background:red;
      color:white;
      border:none;
    }
  }
  p{
    margin:0;
    height:60 / $sc + rem;
    text-align: center;
    line-height:60 / $sc + rem;
    font-size: 16px;
    color: #666;
    border-bottom:10px solid rgb(221, 221, 220);
    margin-top:44 / $sc + rem;
  }
  .like{
    padding-left:15px;
    border-bottom:10px solid rgb(221, 221, 220);
    h3{
      height:62 / $sc + rem;
      width:348 / $sc + rem;
      display:flex;
      justify-content: space-between;
      line-height:62 / $sc + rem;
      font-size: 20px;
      font-weight: 400;
      i{font-size:30px;}
    }
      .like_l{
        height:108 / $sc + rem;
        width:348 / $sc + rem;
       
        display:flex;
        justify-content: space-between;
        
        span{height:80 / $sc + rem;
             width:111 / $sc + rem;
            
             display:inline-block;
             position:relative;
             img{width:100%;height:80 / $sc + rem;}
             h6{position: absolute;top:90  / $sc + rem;margin-left :20px;font-size:10px;color:#666}
      }
      
    }
  }
  .hot{
    padding-left:15px;
    h3{
      height:62 / $sc + rem;
      width:348 / $sc + rem;
      display:flex;
      justify-content: space-between;
      line-height:62 / $sc + rem;
      font-size: 20px;
      font-weight: 400;
      i{font-size:30px;}
      
    }
    .hot1{
        height:40 / $sc + rem;
       
        display:flex;
        li{flex:1;text-align: center;line-height:40 / $sc + rem; color: #000;
           font-size: 18px;}
      }
      .like_l{
        height:108 / $sc + rem;
        width:348 / $sc + rem;
       
        display:flex;
        justify-content: space-between;
        
        span{height:80 / $sc + rem;
             width:111 / $sc + rem;
            
             display:inline-block;
             position:relative;
             img{width:100%;height:80 / $sc + rem;}
             h6{position: absolute;top:90  / $sc + rem;margin-left :20px;font-size:10px;color:#666}
      }
      
    }
  }


}
</style>

      
    



