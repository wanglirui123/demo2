<template>
  <div class="search">
    <span @click="go" class='icon'>取消</span>
    <input type="search" placeholder="活动/食话">
    <span class="cancel">搜索</span>
  </div>
</template>

<script>
export default {
  methods:{
	  	 go(){
	  	 	this.$router.go(-1);
	  	 }
	}
}
</script>

<style lang="scss" scoped>
$sc: 25;
.search{
    display: flex;
    width: 100%;
    justify-content: space-around;
    // margin-top:0.7rem;
    .icon{
      height: 1.8rem;
      width: 1.8rem;
       margin-top:0.5rem;
      font-size: 0.6rem;
      color:#ff5151;
    }
    input{
      position: relative;
      width: 10.2rem;
      height: 1rem;
      outline:none;
      margin-top:0.4rem;
    }
    .cancel{
      margin-top:0.5rem;
      font-size: 0.6rem;
      color:#ff5151;
    }
    
}
</style>
