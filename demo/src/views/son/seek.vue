<template>
  <div class="search">
    <!--  -->
    <div class="eed">
      <span @click="go" class="icon">取消</span>
      <input type="search" placeholder="活动/食话">
      <span class="cancel">搜索</span>
    </div>
    <!--  -->
    <div class="search_nr">
      <ul v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
        <li v-for="(item,index) in arr" :key="index">
          <img :src="item.src">
          <span class="left">{{item.h3}}</span>
          <span class="rigth">{{item.wb}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      arr: [],
      url: "http://localhost:3000/",
      loading: false
    };
  },
 
  mounted() {  
    
  },
  methods: {
    go() {
      this.$router.go(-1);
    },
    loadMore() {
      if (this.arr.length > 50) {
        Toast({
          message: "已经到底了...",
          duration: 1500
        });
        return;
      }
      this.loading = true;
      setTimeout(() => {
        axios.get(this.url + "searc").then(res => {
          this.arr = this.arr.concat(res.data);
        });
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.search {
  .eed {
    display: flex;
    width: 100%;
    justify-content: space-around;
    background: ghostwhite;
    position: fixed;
    z-index: 100;
    .icon {
      font-size: 16 / $sc + rem;
      color: #ff5151;
      line-height: 50 / $sc + rem;
      padding: 0px 16 / $sc + rem;
      top: 0px;
    }
    input {
      height: 32 / $sc + rem;
      border-radius: 2 / $sc + rem;
      background: #f5f5f5;
      line-height: 32px;
      margin: 0px auto;
      color: #aaa;
      font-size: 14 / $sc + rem;
      text-align: left;
      display: block;
      position: relative;
      top: 9 / $sc + rem;
      border: 0 / $sc + rem;
      display: block;
      width: 60%;
      padding: 0px 6 / $sc + rem;
      box-sizing: border-box;
    }
    .cancel {
      font-size: 16 / $sc + rem;
      color: #ff5151;
      line-height: 50 / $sc + rem;
      padding: 0px 16 / $sc + rem;
      top: 0px;
    }
  }
  .search_nr {
    ul {
      li {
        height: 44 / $sc + rem;
        line-height: 44 / $sc + rem;
        padding: 0 16 / $sc + rem 0 50 / $sc + rem;
        box-sizing: border-box;
        display: block;
        width: 100%;
        border-bottom: 1 / $sc + rem solid #e8e8e8;
        position: relative;
        img {
          display: block;
          height: 24 / $sc + rem;
          width: 24 / $sc + rem;
          position: absolute;
          left: 16 / $sc + rem;
          top: 10 / $sc + rem;
        }
        .left {
          font-size: 15 / $sc + rem;
          width: 70%;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          float: left;
        }
        .rigth {
          font-size: 14 / $sc + rem;
          width: 30%;
          color: #999;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          float: right;
          text-align: right;
        }
      }
    }
  }
}
</style>
