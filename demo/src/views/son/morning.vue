<template>
  <div class ="mor">
    <div class = 'head'>
      <img  @click = 'fan' src="//s1.st.meishij.net/p2/20180816/20180816120753_729.png" alt="">
      <div class= 'log'>
        <i class="iconfont icon-ren">&#xe615;</i>
        <input type="text" placeholder="搜索你想找的菜">
        <button>搜索</button>
      </div>
       <span>菜谱大全</span>
    </div>
    
       <h1>早餐</h1>
       <h3>早餐精品菜谱TOP10</h3>
    <div class = 'next'>
    <div class = 'shuj' v-for = '(item,index) in wmm' :key = 'index'>
       <img :src="item.ll" alt="">
       <div class = 'shuju'>
         <span>{{item.kk}}</span>
         <span><i class="iconfont icon-ren">&#xe60a;</i>
         <i class="iconfont icon-ren">&#xe60a;</i>
         <i class="iconfont icon-ren">&#xe60a;</i>
         <i class="iconfont icon-ren">&#xe604;</i>
         <i class="iconfont icon-ren">&#xe604;</i>
         </span>
         <span>{{item.jj}}</span>
       </div>
      
    </div>
    <p>下一页<i class="iconfont icon-ren">&#xe6c7;</i></p>
    </div>
    <div class = 'xia'>
     <i class="iconfont icon-ren">&#xe71c;</i>
     下载美食杰APP 查看更多精美菜谱
    </div>
    <div class = 'like'>
       <h3>猜你喜欢</h3>
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
  </div>
</template>
           

<script>

import {mapState} from 'vuex';
export default {
  data(){
    return{
      wmm:[]
    }
  },
  methods:{
    fan(){
      this.$router.go(-1)
    }
  },
  created(){
    this.axios.get('http://10.9.25.38:80/'+"eee").then((res)=>{
        this.wmm = res.data.serve.wm
      })
  },
  computed:{
    ...mapState(['cai2','cai3'])
  }
}
</script>

<style lang="scss" scoped>
$sc:25;
.mor{
  position:relative;
  background:white;
 
  .head{
      position:fixed;
      top:0;
      display:flex;
      background:white;
      border-top:1px solid rgb(229, 226, 226);
      height: 44 / $sc + rem;
      img{height: 44 / $sc + rem;
          width:86 / $sc + rem;
      }
      .log{
        height:44 / $sc + rem;
        width:203 / $sc + rem;
        display:flex;
        i{height:32 / $sc + rem;background:rgb(229, 226, 226);margin-top:5px;line-height:32 / $sc + rem;}
        input{
          height:32 / $sc + rem;
          width:123 / $sc + rem;
          border:none;
          background:rgb(229, 226, 226);
         margin-top:5px;
        }
        button{background: #f54932;
               color: #fff;
               text-align: center;
               font-size: 14px;
               border: 0px;
               height:32 / $sc + rem;
               width:47 / $sc + rem;
               margin-top:4px;
               }
      }
      span{
        height:44 / $sc + rem;
        width:86 / $sc + rem;
        color: #f54932;
        font-size: 14px;
        line-height: 44px;
      }
  }
 h1{height:58 / $sc + rem;font-weight: 900;line-height:58 / $sc + rem;padding-left:15px;margin-top:44 / $sc + rem;}
 h3{height:44 / $sc + rem;font-size: 18px; font-weight: 700;color: #333;line-height:44 / $sc + rem;padding-left:15px;}

.shuj{
  height:102 / $sc + rem;
  
  width:345 / $sc + rem;
  margin-left :8px;
  border-top:1px solid  rgb(229, 226, 226);
  padding-top:16px;
  display:flex;
  img{height:90 / $sc + rem;width:120 / $sc + rem;display:block}
  .shuju{
    display:flex;
    flex-direction: column;
    margin-left:10px;
    
    height:90  / $sc + rem;
    span{
      font-size:16px;line-height:30px;
      i{color:yellow;}
      }
  }
}
p{height:49 / $sc + rem;line-height:49 / $sc + rem;text-align: center;font-size:14px;color:rgb(8, 206, 140);}
.xia{height:49 / $sc + rem;width:345 / $sc + rem;line-height:49 / $sc + rem;text-align: center;font-size:14px;color:white;
    background:#f54932;margin-left:15px;border-radius: 3px;
   i{font-size: 20px;}
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
}

</style>



