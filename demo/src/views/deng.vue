<template>
    <div id="app">
       <header>
           <p @click="fs"><i class="icon iconfont">&#xe630;</i>返回</p>
            <span>登录美食杰</span>
           <p><router-link :to="{name : 'zhu'}">注册</router-link></p>
       </header>
       <nav class="shi">{{stt}}</nav>
       <div class="yi">
           <input type="text" placeholder="手机号/邮箱/用户名" v-model="str">
           <input type="text"  placeholder="密码" v-model="mi">
           <a @click="fm">登录</a>
       </div>
       <div class="er">
           <a href="">忘记密码？</a>
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
       <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            str : '' ,
            mi : '',
            stt : ''
        }
    },
    methods: {
        fs(){
            this.$router.go(-1)
        },
        fm(){
            this.axios.get("/api/deng",{
                params : {
                    deng : this.str,
                    mi : this.mi
                }
            }).then(({data})=>{
                console.log(data)
                if(data.a>0){
                    alert(data.zhi)
                    localStorage.meiuserName = this.str
                    this.$router.push({name:"user"})
                }else{
                    this.stt = data.zhi
                }
            })
        }
    },
    methods: {
        fs(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="scss" scoped>
$sc: 25;
*{
    margin: 0;
    padding: 0;
}
#app{
    width: 100%;
     header{
        width: 92%;
        padding : 0 4%;
        height: 2.8rem;
        display: flex;
        background: #fff;
        line-height: 2.8rem;
       // margin-bottom: 1.2rem;
        justify-content:space-between;
        span{
            //margin: 0 18%;
           font-size: 18 / $sc + rem;
        }
        p{
             font-size: 18px;
            color: red;   
            a{
                color: red;
            }
        }
    }
    .shi{
        height: 2.25rem;
        line-height: 2.25rem;
        width: 80%;
        padding: 0 10%;
        color: red;
        font-size: 18px;
    }
    .yi{
         width: 100%;
          font-size: 1.2rem;
        input{
            width: 92% ;
            padding : .8rem 4%;
            border: none;
            border-bottom: 1px solid #ddd;
            color: #999
        }
        a{
            width: 92%;
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
}
   
</style>
