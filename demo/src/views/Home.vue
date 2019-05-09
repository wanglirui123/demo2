<template>
  <div class="home">
    <router-view/>
    <div class="footer">
      <router-link to="/home/recommend" tag="span">
        <i class="iconfont icon-ren">&#xe619;</i>
        <div>推荐</div>
      </router-link>

      <router-link to="/home/article" tag="span">
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
    height: 80 / $sc + rem;
    background: ghostwhite;
    justify-content: space-between;
    span {
      flex: 1;
      text-align: center;
      flex-direction: column;
      i {
        font-size: 30 / $sc + rem;
        color: #666;
      }
      div {
        font-size: 23 / $sc + rem;
      }
    }
    span.router-link-exact-active {
      color: #ff4c39;
    }
  }
}
</style>