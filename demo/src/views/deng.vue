<template>
    <div id="app">
       <header>
           <p><i class="icon iconfont">&#xe630;</i>返回</p>
            <span>登录美食杰</span>
           <p>注册</p>
       </header>
       <div class="yi">
           <input type="text" placeholder="手机号/邮箱/用户名" v-model="str">
           <input type="text"  placeholder="密码" v-model="mi">
           <a>登录</a>
       </div>
       <div class="er">
           <a href="">忘记密码？</a>
       </div>
       <div class="san">
           <p>
               <i>1</i>
               QQ登录
           </p>
           <p>
               <i>2</i>
               微博登录
           </p>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            str : '' ,
            mi : ''
        }
    },
}
</script>
<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
#app{
    width: 100%;
     header{
        width: 92%;
        padding : 0 4%;
        height: 3.125rem;
        display: flex;
        background: #fff;
        line-height: 3.125rem;
        margin-bottom: 1.2rem;
        span{
            margin: 0 25%;
           font-size: 1.125rem
        }
        p{
             font-size: 1rem;
            color: red;   
        }
    }
    .yi{
         width: 94%;
        
          font-size: 1.325rem;
        input{
            width: 100% ;
            padding : 1rem 4%;
            border: 1px solid #fff;
            border-bottom: 1px solid #ddd;
            color: #999
        }
        a{
            width: 100%;
            background: red;
            display: inline-block;
            height: 2.75rem;
            text-align: center;
            line-height: 2.75rem;
            border-radius: .2rem;
            color: #fff;
            margin : 1rem 4%;
        
        }
        
    }
    .er{
        width: 100%;
        text-align: center;
        a{
            color: #999; 
        }
       
    }
    .san{
        float: left;
        i{
            padding : .625rem;
            border-radius: 50%;
            border : 1px solid red;
            display: block;
            width: 2.25rem;
            height: 2.25rem;
            text-align: center;
            line-height: 2.25rem;
        }
    }
}
   
</style>
