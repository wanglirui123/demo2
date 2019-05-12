<template>
    <div>
        <nav>{{stt}}</nav>
         <div class="yi">
           <input type="text" placeholder="邮箱" v-model="str">
           <input type="text"  placeholder="密码" v-model="mi">
           <a>注册</a>
       </div>
       <div class="san">
           <a>
               <i class="ss">
                   <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=74870683,3834334650&fm=26&gp=0.jpg" alt="">
               </i>
               QQ登录
           </a>
           <a>
               <i>
                   <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1756560213,438219427&fm=26&gp=0.jpg" alt="">
               </i>
               微博登录
           </a>
       </div>
       <!-- <router-view></router-view> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            str : '',
            mi : '',
            yan : '',
            stt : "",
        }
    },
}
</script>
<style lang="scss" scoped>
  nav{
        height: 2.25rem;
    }
      .yi{
         width: 94%;
          font-size: 1.2rem;
        input{
            width: 100% ;
            padding : .8rem 4%;
            border: 1px solid #fff;
            border-bottom: 1px solid #ddd;
            color: #999
        }
        a{
            width: 100%;
            background: red;
            display: inline-block;
            height: 2rem;
            text-align: center;
            line-height: 2rem;
            border-radius: .2rem;
            color: #fff;
            opacity: 0.6;
            margin : 1rem 4%;
        
        }
        
    }
    .er{
        width: 100%;
        text-align: center;
        a{
            color: #999; 
            font-size: 16px
        }
       
    }
    .san{
        width: 100%;
        text-align: center;
        a{
            display: inline-block;
            margin: 1.5rem 1.25rem;
            font-size: 16px;
        }
        .ss{
            color: blue;
            border: 1px solid blue;
        }
        i{
            padding : .625rem;
            border-radius: 50%;
            border : 1px solid red;
            display:  block;
            width: 2.25rem;
            height: 2.25rem;
            text-align: center;
            line-height: 2.25rem;
            margin-bottom: .9375rem;
            color: red;
            img{
                width: 2rem;
                border-radius: 1.225rem
            }
        }
    }
</style>