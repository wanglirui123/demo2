<template>
    <div id="app">
         <header>
           <p @click="fs"><i class="icon iconfont">&#xe630;</i>返回</p>
            <span>个人信息</span>
           <p></p>
       </header>
       <nav class="shi qi">账号信息</nav>
       <div class="yi">
           <p >邮箱：<input type="text" v-model="st1" @blur="st11=true" :class="{'er':st21}" @click="st11=false" ></p>
           <p>昵称：<input type="text" v-model="st2" @blur="st21=true"  @click="st21=false" :class="{'er':st21}"></p>
            <div class="si">头像：<img src="https://s1.c.meishij.net/images/default/tx2_3.png" alt=""></div> 
       </div>
       <nav class="shi">个人信息</nav>
       <div class="yi">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
       </div>
       <button class="liu">提交</button>
    </div>
</template>
<<script>
export default {
    data() {
        return {
            st11 : true,
            st21 : true,
            st1 : '',
            st2 : '杰米',
            st3 : '',

        }
    },
      methods: {
        fs(){
            this.$router.go(-1)
        },
      }
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
       // margin-bottom: 1.2rem;
        justify-content:space-between;
        position: fixed;
        top: 0;
        span{
            //margin: 0 18%;
           font-size: 1.2rem;
           vertical-align: middle; 
        }
        p{
             font-size: 18px;
            color: red;  
            height: 20px;
            a{
                color: red;
            }
        }
    }
     .shi{
        height: 2.25rem;
        line-height: 2.25rem;
        width: 92%;
        padding: 0 4%;
        font-size: 18px;
        font-size: 14px;
        color: #999;
    }
    .qi{
         margin-top: 2.8rem;
    }
    .yi{
        width: 92%;
        padding : 0 4%;
        background: #fff;
        p{
            height: 44px;
            border-block-end: 1px solid #eee;
            line-height: 44px;
            input{
                width: 80%;
                height: 40px;
                border: 1px solid yellow;
                font-size: 16px;
            }
            .er{
                border: 1px solid #fff;
            }
            span{
                padding-left: 1px;
            }
        }
        .si{
                height: 122px;
                padding-top:12px; 
                line-height: 32px;
                img{
                    width: 100px;
                    height: 100px;
                    vertical-align: top;
                    margin-top: 10px;
                    border-radius: 10px;
                }
            }
    }
     .liu{
            width: 92%;
            background: red;
            display: inline-block;
            height: 3rem;
            text-align: center;
            line-height: 2rem;
            border-radius: .2rem;
            color: #fff;
            margin : 1rem 4% 6rem;
        
        }
}
    
</style>
