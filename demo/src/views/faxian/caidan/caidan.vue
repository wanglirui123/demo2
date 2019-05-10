<template>
  <div class="hander_cd">
      <Hander/>
      <div class="main_cd">
          <div class="cd_tab">
              <div class="cd_tab_w">
                <button class="aaa active_cd" @click="change('CaidanZx')">最新</button>
                <button class="aaa" @click="change('CaidanZr')">最热</button>
                <keep-alive>
                  <component :is="componentNames"></component>
                </keep-alive>
              </div>
          </div>  
      <CaidanZx/>
      </div>
  </div>
</template>
<script>
import Hander from './caidanharder'
import CaidanZx from './caidanZX' 
import CaidanZr from './caidanZR'

export default {
  data(){
    return{
      componentNames:'CaidanZx'
    }
  },
  components:{
    Hander,
    CaidanZx,
    CaidanZr
  },
  methods: {
    change(val){
      this.componentNames = val
    }
  },
}
</script>
<style lang="scss">
  .hander_cd{
    width:100%;
  }
  .main_cd{
    width: 100%;
    min-height: 41.6875rem;
    padding-top: 3.125rem;
    padding-bottom: 3.125rem;
  }
  .cd_tab{
    background: #f5f5f5;
    padding: 0px 20px;
    width: 100%;
    box-sizing: border-box;
    font-size: 0px;
    text-align: center;
  }
  .cd_tab_w{
    height: 30px;
    margin: 16px auto 6px;
    border: 1px solid #ff4c35;
    text-align: center;
    border-radius: 6px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    font-size: 0px;
  }
  .aaa{
    display: inline-block;
    vertical-align: top;
    width: 80px;
    font-size: 12px;
    color: #ff4c35;
    line-height: 30px;
    border-right: 1px solid #ff4c35;
  }
  .active_cd{
    background: #ff4c35;
    color: #fff;
  }
</style>