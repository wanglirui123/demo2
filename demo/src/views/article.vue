<template>
    <div class="article">
       
        <div class="article_head">
            <router-link to="/">
                <p>为你推荐<span title="返回首页">☜☜☜</span></p>
            </router-link>
        </div>
        <!-- 主体盒子 -->
        <div class="main_box">
            <a @click="routerTo(item.id)" class="main_list_a" href="" v-for="item in article" :key="item.id">
                <div class="main_list">
                    <div class="main_text">
                        <p class="text_bt">{{item.title}}</p>
                        <p class="text_sj">
                            <img src="https://s1.st.meishij.net/p2/20181214/20181214154020_569.png" alt="">
                            <span>{{item.amount}}</span>
                            <span>{{item.date}}</span>
                        </p>
                    </div>
                    <div class="main_img">
                        <img :src="item.url" alt="">
                    </div>
                </div> 
            </a>
           
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data(){
        return {
            article:[],
            url:"http://10.9.25.38:80/"
            }
    },
    methods:{
        routerTo(id){
            this.$router.push( '/article-details/'+id);
        }
    },
    mounted(){
        this.axios.get(this.url + "eee").then(res => {
          this.article = this.article.concat(res.data.serve.article);
        });
    }
}
</script>

<style lang="scss">
body,div,span,iframe,p,ul,li,footer,header,nav{
    margin:0;
    padding:0;
    border:0;
}
li{list-style:none} 
img{border:0;vertical-align:middle}
.article{
    width:90%;
    margin:auto;
}
.article_head{
    p{//标题样式
        width:100%;
        font-size:.9375rem;
        height: 1.375rem;
        color: #333;
        line-height: 1.375rem;
        font-weight: 900;
        margin-top:.9375rem;
         span{
             float: right;
             cursor:pointer;//鼠标移上变小手
         }
    }
}
.main_box{
    .main_list_a{ //超链接
        width: 100%;
        box-sizing: border-box;
        display: block;
        .main_list{
            width: 100%;
            box-sizing: border-box;
            padding: .7rem 0px .7rem 0px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            min-height: 6rem;
            .main_text{
                float: left;
                width:7.9rem;
                height: 4.5rem;
                max-height: 5rem;
                .text_bt{    
                    font-size: 16px;
                    color: #333;
                    font-weight: 400;
                    line-height: 0.85rem;
                    padding: 0.5rem 0px;
                }
                .text_sj{
                    height: 16px;
                    line-height: 16px;
                    img{
                        display: inline-block;
                        vertical-align: top;
                        height: .7rem;
                        width: .7rem;
                    }
                    span{
                        display: inline-block;
                        vertical-align: top;
                        font-size: 12px;
                        color: #666;
                        margin: 0 .9375rem 0 .1875rem;
                        font-weight: 400;
                    }
                }
            }
            .main_img{
                float: right;
                width: 5rem;
                height:4rem;
                background:blueviolet;
                img{
                    width: 5rem;
                    height:4rem;
                }
            }
        }        
    }
}
</style>

