<template>
  <div class="hot"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <div class="test" v-for="(item,index) in list" :key="index">
      <div class="src">
           <img :src="item.img" alt>
      </div>
     
      <div class="right">
        <span class="name">{{item.name}}</span>
        <span class="em">{{item.em}}</span>
        <span class="fy">{{item.fy}}</span>
        <div class="sc">
          <p>{{item.i}}</p>
          <span class="tp" v-for="(item,v,index) in item.sc" :key="index">
            <img :src="item.img">
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      list: [],
      url: "http://10.9.25.38:80/",
      type: "",
      loading:false 
    };
  },
  mounted() {
    
  },
  methods: {
    loadMore() {
      
      if (this.list.length > 50) {
        Toast({
          message: "已经到底了...",
          duration: 1500
        });
        return;
      }
      this.loading = true;
      setTimeout(() => {
        axios.get(this.url + "eee").then(res => {
          this.list = this.list.concat(res.data.serve.nr);
          this.loading = false;
        });
      }, 2000);
        
    }
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.hot {

  .test {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
    border-bottom: 1px solid #f5f5f5;
    padding: 15 / $sc + rem 5%;
    box-sizing: border-box;
    float: left;
    .src {
        position: absolute;
        img{
         width: 30 / $sc + rem;
         height: 30 / $sc + rem;
        }
    }
    .right {
      display: inline-block;
      // vertical-align: top;
      width: 335 / $sc + rem;
      display: block;
      padding-left: 40 / $sc + rem;
      box-sizing: border-box;
      .name {
        color: #ff5151;
        font-size: 14 / $sc + rem;
        line-height: 18px;
        display: block;
      }
      .em {
        color: #999;
        font-size: 12 / $sc + rem;
        line-height: 12 / $sc + rem;
      }
      .fy {
        color: #1995f5;
        font-size: 12 / $sc + rem;
        line-height: 12 / $sc + rem;
        display: inline;
      }
      .sc {
        p {
          font-size: 16 / $sc + rem;
          color: #000;
          line-height: 24px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .tp {
          img {
            width: 98 / $sc + rem;
            height: 98 / $sc + rem;
            display: inline-block;
            vertical-align: top;

            padding: 5 / $sc + rem;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
