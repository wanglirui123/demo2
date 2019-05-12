<template>
  <div class="article_details">
    <div class="details_top">
      <router-link to="/article">
        <a class="btn1" href="">《文章精选</a>
      </router-link> 
      <a class="btn3" href="">菜谱分类》</a>
    </div>
    <h1 class="details_title" style="font-weight: bold;font-size: 24px;line-height: 30px;">
      {{particulars.h1}}
    </h1>
    <div class="details_main">
      <p class="pp">
        {{particulars.p1}}
      </p>
      <p class="pp">{{particulars.p2}}</p>
      <img class="bzimg" :src="particulars.url1" alt="">
      <p class="pp">{{particulars.p3}}</p>
      <p class="pp">配料：</p>
      <p class="pp">{{particulars.p4}}</p>
      <p class="pp">{{particulars.p5}}</p>
      <img class="bzimg" :src="particulars.url2" alt="">
      <p class="pp">{{particulars.p6}}</p>
      <img class="bzimg" :src="particulars.url3" alt="">
      <div v-show="!show">
        <p class="pp">{{particulars.p7}}</p>
        <img class="bzimg" :src="particulars.url4" alt="">
        <p class="pp">{{particulars.p8}}</p>
        <img class="bzimg" :src="particulars.url5" alt="">
        <p class="pp">{{particulars.p9}}</p>
        <img class="bzimg" :src="particulars.url6" alt="">
        <p class="pp">{{particulars.p10}}</p>
        <img class="bzimg" :src="particulars.url7" alt="">
        <p class="pp">{{particulars.p11}}</p>
        <img class="bzimg" :src="particulars.url8" alt="">
        <p class="pp">{{particulars.p12}}</p>
        <img class="bzimg" :src="particulars.url9" alt="">
        <p class="pp">烹饪小贴士：</p>
        <p class="pp">{{particulars.p13}}</p>
        <p class="pp">{{particulars.p14}}</p>
      </div>
      <div class="isshou" v-show="show" @click="change">点击展开↓↓👇↓↓</div>
    </div>
    <div class="article_footer">
      <router-link to="/">
        <button class="footer_an">美食杰首页</button>
      </router-link>
      <div class="footer_text">
        <span>美食杰，让做饭更具幸福感</span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
import axios from "axios";
export default {
    data(){
      return {
        details:[],
        particulars:{},
        show:true,
        url:"http://10.9.25.38:80/"
        }
    },
    methods:{    //存放方法(函数)
      change(){
        this.show=!this.show; 
      }
    },
    created(){
      axios.get(this.url + "eee").then(res => {
          this.details = res.data.serve.details;
          console.log(this.details)
        }).then(res => {
          this.details.forEach((value,index)=>{ 
            if(this.details[index].id==this.$route.params.id){
              this.particulars=this.details[index];
            }
          })   
        })    
    }
}
</script>
<style lang="scss">
.article_details{
  width:90%;
  margin:auto;
}
.details_top{
  height: 45px;
  width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1000;
  .btn1{
    display: inline-block;
    vertical-align: top;
    height: 30px;
    padding: 0px 12px;
    font-size: 14px;
    color: #fff;
    border-radius: 15px;
    line-height: 30px;
    background: rgba(0,0,0,0.5);
    position: absolute;
    left: 15px;
    top: 15px;
  }
  .btn3{
    display: inline-block;
    vertical-align: top;
    height: 30px;
    padding: 0px 12px;
    font-size: 14px;
    color: #fff;
    border-radius: 15px;
    line-height: 30px;
    background: rgba(0,0,0,0.5);
    position: absolute;
    right: 15px;
    top: 15px;
  }
}
.details_title{
  padding: 50px 15px 21px;
  text-align: justify;
}
.details_main{
  position: relative;
  overflow: hidden;
  .pp{
    display: block;
    font-size: 18px;
    line-height: 28px;
    font-weight: 100;
    text-align: justify;
    margin: 25px 0px;
    padding: 0px 15px;
  }
  .bzimg{
    display: block;
    width: 100%;
    margin: 10px 0px;
  }
  .isshou{
    width:100%;
    height: 3.5rem;
    line-height: 3.5rem;
    color: rgb(31, 30, 30);
    text-align: center;
    font-size: 20px;
    font-weight:700;
    background: rgba(241, 240, 240, 0.6);
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
}
.article_footer{
  width:100%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  .footer_an{
    width: 90%;
    height: 2.125rem;
    line-height: 2.125rem;
    font-size: 20px;
    font-weight:800;
    color: #fff;
    box-shadow: 0 1px 3px 0 rgba(131,131,131,.5);
    border-radius:.3rem;
    background-color: #e42910;
  }
  .footer_text{
    width: 60%;
    margin: 20px auto 20px;
    text-align: center;
    position: relative;
    color: #aaa8a8;
    span{
      width: 100%;
      display: block;
      background: #fff;
      position: relative;
      margin: 0 auto;
      font-size: 14px;
    }
  }
}
</style>
