<template>
    <div id="app">
         <header>
           <p @click="fs"><i class="icon iconfont">&#xe630;</i>返回</p>
            <span>登录美食杰</span>
           <p><router-link :to="{name : 'deng'}">登录</router-link></p>
       </header>
       <div class="qi">
           <a href="javascript:;" :class="{'ba' : aaa}" @click="aaa=!aaa">手机注册</a>
           <a href="javascript:;" :class="{'ba' : !aaa}" @click="aaa=!aaa">邮箱注册</a>
       </div>
        <shouji v-show="aaa"></shouji>
        <youxiang v-show="!aaa"></youxiang>
       <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import shouji from '../components/shouji'
import youxiang from '../components/youxiang'
export default {
    data() {
        return {
            aaa : true
        }
    },
    components : {
        shouji,
        youxiang ,
    },
   methods: {
        fs(){
            this.$router.go(-1)
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
        height: 2.8rem;
        display: flex;
        background: #fff;
        line-height: 2.8rem;
        margin-bottom: 1.2rem;
        justify-content:space-between;
        span{
            //margin: 0 18%;
           font-size: 1.2rem
        }
        p{
             font-size: 18px;
            color: red;   
            a{
                color: red;
            }
        }
    }
    .qi{
        width: 92%;
        padding: 0 4%;
    //   /  margin-bottom: 1.875rem;
        a{
            width: 49%;
            height: 1.75rem;
            line-height: 1.75rem;
            display: inline-block;
            text-align: center;
            border: 1px solid red;
            color: red;
        }
        .ba{
            background: red;
            color : #fff;
        }
    }
}
</style>