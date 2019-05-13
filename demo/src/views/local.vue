<template>
  <div class="box">
    <!-- 导航 -->
    <div class="head">
      <span class="i1">
        <i class="iconfont icon-ren">&#xe617;</i>
      </span>
      <span class="local">食话</span>
      <div class>
        <span class="i2">
          <router-link to="/seek">
            <i class="iconfont icon-ren">&#xe710;</i>
          </router-link>
        </span>
        <span class="i3">
          <i class="iconfont icon-ren">&#xe676;</i>
        </span>
      </div>
    </div>
    <!-- banner -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.img">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 菜单 -->
    <ul class="menu">
      <router-link to="/menu" tag="span">
        <li v-for="(item,index) in menu" :key="index">
          <img :src="item.img">
          <p>{{item.name}}</p>
        </li>
      </router-link>
    </ul>
    <!-- 选项卡 -->
    <div class="option">
      <div class="option1">
        <router-link to="/home/local/hewest" tag="span">最新</router-link>
        <router-link to="/home/local/newest" tag="span">最热</router-link>
      </div>
    </div>
    <!--  -->
    <router-view/>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
// import { mapState} from "vuex";
export default {
  computed: {
    ...mapState(["banner", "menu"])
  },
  methods: {},
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.box {
  width: 100%;
  background: #fff;
  .head {
    width: 100%;
    height: 44 / $sc + rem;
    background: #F5F5F5;
    float: left;
    display: flex;
    position: fixed;
    z-index: 100;
    justify-content: space-between;
    text-align: center;
    .i1 {
      width: 52 / $sc + rem;
      height: 44 / $sc + rem;
      margin-top:10/$sc+rem;
      i {
        font-size: 22 / $sc + rem;
      }
    }
    .local {
      font-size: 18 / $sc + rem;
      line-height: 44 / $sc + rem;
    }
    div {
      display: flex;
       margin-top:10/$sc+rem;
      .i2 {
        height: 44 / $sc + rem;
        i {
          font-size: 22 / $sc + rem;
        }
      }
      .i3 {
        width: 52 / $sc + rem;
        height: 44 / $sc + rem;

        i {
          font-size: 22 / $sc + rem;
        }
      }
    }
  }
  // banner
  .swiper-container {
    height: 210 / $sc + rem;
    width: 100%;
    margin-top:44 / $sc + rem;
    img {
      height: 187 / $sc + rem;
      width: 100%;
    }
    .swiper-pagination {
      position: absolute;
      top: 187 / $sc + rem;
      height: 23 / $sc + rem;
      background: #f5f5f5;
      line-height: 23 / $sc + rem;
      vertical-align: baseline;
    }
  }
  // 菜单
  .menu {
    width: 100%;
    height: 60 / $sc + rem;
    display: flex;
    justify-content: space-around;
    padding: 20 / $sc + rem 0;
    span {
      width: 100%;
      height: 60 / $sc + rem;
      display: flex;
      justify-content: space-around;
      li {
        float: left;
        padding: 10 / $sc/ + rem;
        img {
          width: 60 / $sc + rem;
          height: 60 / $sc + rem;
        }
        p {
          text-align: center;
          font-size: 12 / $sc + rem;
           margin-top:10/$sc+rem;
        }
      }
    }
  }
  //选项卡
  .option {
    width: 100%;
    height: 64 / $sc + rem;
    display: inline-block;
    position: relative;
    .option1 {
      width: 162 / $sc + rem;
      height: 32 / $sc + rem;
      display: flex;
      justify-content: space-around;
      text-align: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border: 1 / $sc + rem solid #ff4c39;
      border-radius: 5 / $sc + rem;
      span {
        color: #ff4c39;
        font-size: 12 / $sc + rem;
        line-height: 32 / $sc + rem;
        display: inline-block;
        vertical-align: top;
        width: 80 / $sc + rem;
        color: #ff4c35;
        border-right: 1px solid #ff4c35;
      }
    }
    span.router-link-exact-active {
        color: #fff;
        background: #ff4c39;
      }
  }
}
</style>
