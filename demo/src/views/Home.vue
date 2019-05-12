<template>
  <div class="home">
    <router-view/>

    <div class="footer">
      <router-link to="/home/recommend" tag="span">
        <i class="iconfont icon-ren">&#xe619;</i>
        <div>推荐</div>
      </router-link>

      <router-link to="/article" tag="span">
        <i class="iconfont icon-ren">&#xe628;</i>
        <div>文章精选</div>
      </router-link>

      <router-link to="/home/discover" tag="span">
        <i class="iconfont icon-ren">&#xe602;</i>
        <div>发现</div>
      </router-link>

      <router-link to="/home/local" tag="span">
        <i class="iconfont icon-ren">&#xe628;</i>
        <div>食话</div>
      </router-link>

      <router-link to="/home/user" tag="span">
        <i class="iconfont icon-ren">&#xe623;</i>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
$sc: 25;
.home {
  display: flex;
  .footer {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 55 / $sc + rem;
    background: ghostwhite;
    justify-content: space-around;
    flex: 1;
    text-align: center;
    span {
      margin-top:5/$sc+rem;
      i {
        font-size: 20 / $sc + rem;
      }
      div {
        font-size: 14 / $sc + rem;
      }
    }
  }
  span.router-link-exact-active {
    color: #ff4c39;
  }
}
</style>