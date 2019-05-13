<template>
  <div class="sass">

    <!-- 头 -->
    <div class="top_bar">
      <span class="left" @click="go()">
        <i class="iconfont icon-ren">&#xe630;</i>
        返回
      </span>

      <h2 class="right">食话</h2>
    </div>
    <!-- 内容 -->
    <div class="main_con">
      <div class="author_info">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "http://10.9.25.38/",
      list: []
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.axios.get(this.url + "eee").then(res => {
      this.list = res.data.serve.zr;
      console.log(res);
    });
  }
};
</script>

<style lang="scss" scoped>
$sc: 25;
.sass {
  .top_bar {
    width: 100%;
    height: 50 / $sc + rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: #fdfdfd;
    border-bottom: 1 / $sc + rem solid #ddd;
    .left {
      left: 10 / $sc + rem;
      top: 0;
      background-size: auto 20px;
      display: block;
      position: absolute;
      height: 50 / $sc + rem;
      color: #ff5151;
      font-size: 16 / $sc + rem;
      line-height: 50 / $sc + rem;
    }
    .right {
      font-size: 18 / $sc + rem;
      color: #000;
      text-align: center;
      display: block;
      line-height: 50 / $sc + rem;
    }
  }
  .main_con {
    width: 100%;
    margin-top: 51 / $sc + rem;
    background: #fdfdfd;
  }
}
</style>
