<template>
<div>
    <div class = 'xiaoxi'>
      <span class = 'mm' @click = 'add'><i class="iconfont icon-ren">&#xe630;</i>返回</span>
      <span class = 'nn'>信息</span>
    </div>
    <div class = 'pinglui'>
      <img src="https://s1.c.meishij.net/wap/images/v5/pl_zan.png" alt="">
      <p>评论和喜欢</p>
    </div>
    <div class = 'dianji'>
      点击加载更多
      <p>
        <img src="https://s1.c.meishij.net/wap5/images/theend@3x.png" alt="">
      </p>
    </div>
</div>
</template>

<script>
export default {
  methods:{
    add(){
      this.$router.go(-1)
    }
  }
}
</script>

 <style lang="scss" scoped>
$sc: 25;
.xiaoxi{
  height:50 / $sc + rem;
  background:white;
  display:flex;
  line-height: 50 / $sc + rem;
  .mm{
    color:red;font-size: 16px;
    margin-left:10px
    }
  .nn{font-size: 18px;color: #000;margin-left:113 / $sc + rem;}
}
.pinglui{
  height:82 / $sc + rem;
  background:whitesmoke;
  display:flex;
  border-bottom: 1px solid rgb(201, 195, 195);
  p{font-size: 16px;color: #000;margin-left:10px;margin-top:20px;}
    
  img{height:50 / $sc + rem;width:50 / $sc + rem;margin:15px 0 0 10px}
  
}
.dianji{
  height:50 / $sc + rem;
 
  text-align: center;
  color: #ff5151;
  font-size: 16px;
  line-height:50 / $sc + rem;
  position:relative;
  
  p{
    position:absolute;
    top:0;
   background:rgb(241, 241, 241);
    display:none;
    img{float:left;}
  }
}
.dianji:hover p{display:block}

    
</style>



