<template>
  <div class="box">
    <div class="header">
      <span>
        <i class="iconfont icon-ren">&#xe617;</i>
      </span>
      <div class="k">
        <i class="iconfont icon-ren">&#xe615;</i>搜索你感兴趣的
      </div>
      <span>
        <router-link to="/son">
          <i class="iconfont icon-ren">&#xe621;</i>
        </router-link>
      </span>
      <router-view></router-view>
    </div>

    <div class="tup">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <ul>
            <li v-for="(item,index) in One.list" :key="index">
              <img :src="item.qq" alt>
              <h5>{{item.ww}}</h5>
              <h6>{{item.ee}}</h6>
            </li>
          </ul>
          <h3 class="sct">早餐</h3>
          <p class="tdes">来份快手早餐，上班再不怕迟到</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <ul>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/76275a3d6264a65fb4230f3158cf62c2.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/bbcc42133902006b2eba6280a381e162.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/587bfaf45f40d2fff3ecee969b656a68.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
          </ul>
          <h3 class="sct">午餐</h3>
          <p class="tdes">午餐时间到，好好吃饭最重要</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <ul>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/472bccebdb49b210dbe1572dc033dac8.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/995f12b9b2d731be6e21ed44031ba898.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/6e14f1d904ad1ca998c27982e117ca65.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
          </ul>
          <h3 class="sct">下午茶</h3>
          <p class="tdes">DIY甜蜜小零食，让你在家吃个够</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <ul>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/068543da4901395a94692113c773f2dd.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/d5a234bc7a1ac20b231727498895b614.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/9b605b450dcff9c932f2e881ef5ec55c.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
          </ul>
          <h3 class="sct">晚餐</h3>
          <p class="tdes">私家开胃菜</p>
        </mt-swipe-item>
        <mt-swipe-item>
          <ul>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/1c8c3df4c672614a5feab99aaafcd338.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/50701b1b2af7041f8ea7584568f94e5c.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
            <li>
              <img src="https://s1.ig.meishij.net/p/20190508/205cd4cb0947834322b5509acc5c57b5.jpg">
              <h5>红三剁</h5>
              <h6>云南传统菜 酸吞开胃</h6>
            </li>
          </ul>
          <h3 class="sct">夜宵</h3>
          <p class="tdes">冰箱剩余食材华丽变身，味道超赞</p>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="four">
      <ul>
        <li v-for="(item,index) in One.arr" :key="index">
          <img :src="item.rr" alt>
          <span>{{item.tt}}</span>
        </li>
      </ul>
    </div>

    <div class="tuijian">
      <h2>今日推荐</h2>
      <ul>
        <li>
          <img src="https://s1.st.meishij.net/p2/20190104/20190104142656_304.png">
        </li>
        <li>
          <img src="https://s1.st.meishij.net/p2/20190506/20190506172238_365.jpg">
        </li>
        <li>
          <img src="https://s1.st.meishij.net/p2/20190429/20190429135506_147.jpg">
        </li>
      </ul>
    </div>
    <div class="love">
      <img src="https://s1.c.meishij.net/wap7/images/home_title_love@3x.png" alt srcset>

      <strong>猜你喜欢</strong>

      <i>20:54为您更新</i>
    </div>
    <div class="last">
      <div class="last1">
        <span v-for="(item,index) in 30" :key="index">
          <img src alt>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["One", "list", "arr"])
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.box {
  width: 100%;

  .header {
    height: 45 / $sc + rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    background: #fff;
    position: fixed;
    z-index: 20;
    span {
      height: 45 / $sc + rem;
      i {
        font-size: 30px;
        line-height: 45 / $sc + rem;
      }
    }
    .k {
      height: 32 / $sc + rem;
      width: 275 / $sc + rem;
      font-size: 17px;
      margin-top: 5px;
      text-align: center;
      line-height: 32 / $sc + rem;
      background: rgb(241, 239, 236);
    }
  }
  .tup {
    height: 520 / $sc + rem;
    background: rgb(243, 240, 240);
    margin-top: 45 / $sc + rem;
    ul {
      list-style: none;

      li {
        width: 348 / $sc + rem;
        height: 145 / $sc + rem;

        position: relative;
        margin-bottom: 5px;
        margin-left: 15px;
        font-size: 14px;
        color: white;
        img {
          width: 100%;
          height: 145 / $sc + rem;
        }
        h5 {
          position: absolute;
          left: 10 / $sc + rem;
          top: 90 / $sc + rem;
        }
        h6 {
          position: absolute;
          left: 10px;
          top: 100 / $sc + rem;
        }
      }
    }
    h3 {
      font-size: 17px;
      margin-left: 170 / $sc + rem;
    }
    p {
      font-size: 14px;
      margin-left: 120 / $sc + rem;
    }
  }
  .four {
    height: 120 / $sc + rem;
    margin-top: 20px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 12px;
        width: 70 / $sc + rem;

        img {
          height: 70 / $sc + rem;
          width: 70 / $sc + rem;
          margin-top: 10px;
        }
        span {
          margin-top: 5px;
        }
      }
    }
  }
  .tuijian {
    height: 535 / $sc + rem;

    h2 {
      width: 100%;
      color: #333;
      font-size: 18px;
      line-height: 40px;
      text-align: center;
    }
    ul {
      list-style: none;
      li {
        height: 170 / $sc + rem;
        width: 348 / $sc + rem;
        margin-left: 15px;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .love {
    height: 68 / $sc + rem;

    line-height: 68 / $sc + rem;
    text-align: center;
    position: relative;
    img {
      height: 30 / $sc + rem;
      width: 30 / $sc + rem;
    }

    strong {
      font-size: 18px;
      color: #333;
      position: absolute;
      bottom: 11px;
      left: 170 / $sc + rem;
    }
    i {
      display: inline-block;
      font-size: 10px;
      color: #999;
    }
  }
  .last {
    width: 100%;
    height: 2692 / $sc + rem;
    background: red;
    .last1 {
      width: 348 / $sc + rem;
      background: yellow;
      margin-left: 15px;
      span {
        width: 50%;
        height: 172 / $sc + rem;
        background: green;
        display: inline-block;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
    



            
            
    
    
 
