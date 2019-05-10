<template>
    <div id="app">
        <header>
           <img src="../assets/logo1.png" class="er">
           <div>
               <img src="https://s1.c.meishij.net/images/default/tx2_3.png" class="san">
                <nav>
                    <p class="yi">杰米283284747</p>
                    <p>正在通往美食杰的路上...</p>
                    <p class="si">美食杰NDA {{str}}条></p>
                </nav>
           </div>
        </header>
        <div class="headen">
            <p><span>{{guan}}</span> 关注</p>
            <p><span>{{fen}}</span> 粉丝</p>
            <p class="wu"><span>{{cai}}</span> 菜谱</p>
        </div>
        <div id="er">
            <p>荣誉勋章</p>
            <nav>
                <ol>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/sousuo.png"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/caipu1.png
"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/kouwei1.png"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/caixi1.png"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/zucai1.png"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/gexing1.png"></li>
                    <li><img src="https://static.meishij.net/images/get3/ceshi/zuopin1.png
"></li>
                </ol>
            </nav>
        </div>
        <div id="san">
            <img src="https://s1.c.meishij.net/wap7/images/myhome_jifen@3x.png">
            积分商城
            <p><span>免费兑换</span><i class="icon iconfont">&#xe6c7;</i></p>
            
        </div>
        <div id="san">
            <img src="https://s1.c.meishij.net/wap7/images/myhome_xiaoxi@3x.png">
            消息通知
            <p><i class="icon iconfont">&#xe6c7;</i></p>
        </div>
        <div>
            <ul>
                <li class="liu">
                    <img src="https://s1.c.meishij.net/wap7/images/myhome_fabu@3x.png">
                    我的发布
                    <p><i class="icon iconfont">&#xe6c7;</i></p>
                </li>
                <li class="liu">
                    <img src="https://s1.c.meishij.net/wap7/images/myhome_shoucang@3x.png">
                    我的收藏
                    <p><i class="icon iconfont">&#xe6c7;</i></p>
                </li>
                <li class="liu">
                    <img src="https://s1.c.meishij.net/wap7/images/myhome_dingdan@3x.png">
                    我的订单
                    <p><i class="icon iconfont">&#xe6c7;</i></p>
                </li>
                <li class="liu">
                    <img src="https://s1.st.meishij.net/p2/20190112/20190112151958_101.png">
                    关于我们
                    <p><i class="icon iconfont">&#xe6c7;</i></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            str : 0,
            stu : '',
            guan :0,
            fen : 0,
            cai : 0
        }
    },
    beforeRouteEnter(to,from,next){
        console.log(111,to) 
        next((vm)=>{
             console.log(vm,vm.$router)
            if(!localStorage.uid){
                vm.$router.push({name:"deng"})
            }
        })
      
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding : 0;
    }
    ul,ol{
        list-style: none;
    }
    #app{
        width: 100%;
        background: #eee;
        height: 100%;
    header{
        width : 100%;
        height: 9.375rem;
        background: #fff;   
        div{
            margin: 1.5rem;
            color: #fff;
            font-size: .75rem;
            width: 13.75rem;
            position : absolute;
            top: 0;
            nav{
                float: left;
                line-height: 1.5rem;
                .yi{
                    font-size: 1rem ;
                    margin-top: 1rem;
                }
                .si{
                    margin-top: .625rem;
                    border: 1px solid #fff;
                    border-radius: .5rem;
                    text-align: center;
                    background: rgba(250, 250,250,0.3)
                    
                }
            }
        }
        .er{
            width: 100%;
          
        }
        .san{
            width : 4.5rem;
            height: 4.5rem;
            border: 4px solid #faa;
            border-radius: 50%;
            float: left;
            margin-right: .625rem
        }
    }
    .headen{
        width : 100%;
        height: 2.75rem;
        color: #999;
        margin-bottom: .625rem;
        background: #fff;
        p{
            width: 33.1%;
            border-right: 1px solid #eee;
            float: left;
            text-align: center;
            margin: .825rem 0;
            span{
                color: red;
            }
        }
        .wu{
            border-right: none;
        }
    }
    #er{
        width: 92%;
        padding: 0 4%;
        background: #fff;
        margin-bottom: .625rem;
        p{
            height: 2.375rem;
            font-size: 1.125rem;
            line-height: 2.375rem;
        }
        nav{
            width: 100%;   
            overflow: auto;             
            ol{
                 display: flex;
                height: 2.875rem;
                width: 25rem;            
            }
            li{
                margin-right: 1.25rem;
                img{
                     width: 2.375rem;
                }
               

            }
        }
    }
    #san{
        width: 92%;
        padding: .625rem 4%;
        background: #fff;
        margin-bottom: .625rem;
        img{
            width: 1.6875rem;
            vertical-align: middle;
        }
        p{
            float: right;
            color: red;
           
            i{
                font-size: 1.55rem;
                color: #000;
                 vertical-align: middle
            }
        }
    }
    .liu{
        width: 92%;
        padding: .625rem 4%;
        background: #fff;
        border-bottom: 1px solid #eee;
        img{
            width: 1.6875rem;
            vertical-align: middle;
        }
        p{
            float: right;
            i{
                font-size: 1.55rem;
            }
        }
    }
}
</style>
