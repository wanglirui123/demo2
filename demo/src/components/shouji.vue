<template>
    <div>
        <nav class="shi">{{stt}}</nav>
         <div class="yi">  
           <input type="text" placeholder="手机号" v-model="str" @keyup="fw(str)">
           <input type="password"  placeholder="密码" v-model="mi">
           <input type="text"  placeholder="验证码" v-model="yan">
           <a @click="fr">注册</a>
           <a href="javascript:;" class="jiu" @click="fs">发送验证码</a>
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
  import Vue from 'vue'
export default {
  
    data() {
        return {
            str : '',
            mi : '',
            yan : '',
            stt : "",
            ma : ''
        }
    },
    methods: {
        fw(arr){
            var st = /^\d{0,11}$/
            var ss = ''
            if(!st.test(arr)){
                for(var i=0;i<arr.length-1;i++){
                    ss +=arr.charAt(i) 
                }
                this.str=ss
            }
        },
        fs(){
            this.yan = '';
            for(var i=0; i<4;i++){
             var mi = Math.floor(Math.random()*9+1) 
                this.yan+=mi
                this.ma +=mi
            }
        },
        fr(){
            var ss = /^(138|135|133|150)\d{8}/ //判断手机的正则
            var tt = /\w{6,16}/
            console.log(this.axios)
            this.axios.get("/hd/add",{
                params : {
                    str : this.str ,
                    mi  : this.mi
                 }
            }).then(({data})=>{
                console.log(data)
            })
            // Vue.jsonp("http://127.0.0.1/add",{
            //     str : this.str ,
            //     mi  : this.mi
            // }).then(({data})=>{
            //     console.log(data)
            // })
            if(!ss.test(this.str)){
               return this.stt = "请正确输入手机号码"
            }
            if(!tt.test(this.mi)){
               return this.stt = `密码为6~16位， 您只输了${this.mi.length}位`
            }
            console.log(this.yan ===this.ma)
            if(!this.yan ===this.ma){
              return  this.stt = "您输入的验证码不正确"
            }
             if(!this.yan){
               return this.stt = "请您输入验证码"
            }
            
        }
    },
     computed: {
        // str : {
        //     get(v){
        //         console.log(v,1)
        //     },
        //     set(v){
        //         console.log(v,2)
        //         var str = /^\d{0,11}$/
        //         var st= ''
        //        console.log(str.test(v))
        //        if(!str.test(v)){
        //            for(var i=0;i<v.length-1;i++){
        //                st +=v.charAt(i) 
        //            }
        //             console.log(st)
        //             return    st
                  
                   
        //        }
                
        //     }
        // }
    },
}
</script>
<style lang="scss" scoped>
    .shi{
        height: 2.25rem;
        line-height: 2.25rem;
        width: 80%;
        padding: 0 10%;
        color: red;
        font-size: 18px;
    }
      .yi{
         width: 94%;
          font-size: 1.2rem;
          position: relative;
          
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
        .jiu{
            height: 30px;
            padding: 0 10px;
            margin: 0;
            width: auto;
            opacity: 1;
            position : absolute;
            top: 6px;
            right: 0;
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