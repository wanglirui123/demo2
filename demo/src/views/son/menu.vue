<template>
  <div class="app">
      <div class="top_bar">
      <div class="top_bar1">
        <span @click="go" class="icon"><i class="iconfont icon-ren">&#xe630;</i>餐桌食光</span>
        <router-link to="/menu/bar" tag="span">最新</router-link>
        <router-link to="/menu/tab" tag="span">最热</router-link>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
