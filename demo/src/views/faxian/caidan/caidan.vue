<template>
  <div class="hander_cd">
      <Hander/>
      <div class="main_cd">
          <div class="cd_tab">
              <div class="cd_tab_w">
                <router-link to="/caidan/caidanZX" class="aaa">最新</router-link>
                <router-link to="/caidan/caidanZR" class="aaa">最热</router-link>
              </div>
              <router-view></router-view>
          </div>  
      </div>
  </div>
</template>
<script>
import Hander from './caidanharder'
export default {
  components:{
    Hander
  }
}
</script>
<style lang="scss" scoped>
$sc : 25;
  .hander_cd{
    width:100%;
  }
  .main_cd{
    width: 100%;
    min-height: 667/$sc+rem;
    padding-top: 50/$sc+rem;
    padding-bottom: 50/$sc+rem;
  }
  .cd_tab{
    background: #f5f5f5;
    padding:0px 3.125%;
    width: 100%;
    box-sizing: border-box;
    font-size: 0px;
    text-align: center;
  }
  .cd_tab_w{
    height: 30/$sc+rem;
    margin: 16/$sc+rem auto 6/$sc+rem;
    border: 1px solid #ff4c35;
    text-align: center;
    border-radius: 6/$sc+rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    font-size: 0px;
  }
  .aaa{
    display: inline-block;
    vertical-align: top;
    width: 80/$sc+rem;
    font-size: 12px;
    color: #ff4c35;
    line-height: 30/$sc+rem;
    border-right: 1px solid #ff4c35;
  }
  .router-link-active{
    background: #ff4c35;
    color: #fff;
  }
</style>