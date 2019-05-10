<template>
    <div>
        <span @click="go" class='icon'>取消</span>
        餐桌食光
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

<style>

</style>
