<template>
 <div class = 'big'>
     <div class = 'sou'>
       <span @click = 'add'><i class="iconfont icon-ren">&#xe630;</i></span>
       <input class = 'sou1' type="text" placeholder="菜谱名，食材名">
       <span><button>搜索</button></span>
     </div>
     <p>请输入要搜索的关键字</p>
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
$sc:25;
.big{
  .sou{
    display:flex;
    line-height:44 / $sc + rem;
    height:44 / $sc + rem;
    i{margin-left:15px;}
    border-bottom: 1px solid rgb(228, 226, 226);
    .sou1{height:26.5 / $sc + rem;width:240 / $sc + rem;
        margin:10px 5px 0 25px;background:rgb(228, 226, 226);border:none;}
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
  }
}
</style>
    



