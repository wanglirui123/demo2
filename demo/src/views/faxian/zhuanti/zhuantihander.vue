<template>
    <div id="topbar_sc">
         <div class="topbar_mes_btn_sc" @click="back">
            <i class="iconfont">&#xe630;</i>
        </div>
        <div class="searchbar_index_sc">
            <h1>专题</h1>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss">
//头部
html,body{background:#f5f5f5;    box-sizing: border-box;}
#topbar_sc{height: 3.125rem;width: 100%;display: flex;background:#fefefe;position:fixed;top:0px;left:0px;z-index:1000;text-align:center;}
.searchbar_index_sc{height:3.125rem;width:100%;}
.searchbar_index_sc h1{font-size:1.125rem;color:#000;line-height:3.125rem;text-align:center;}
.topbar_mes_btn_sc{position: absolute;top:.8rem;left:.8rem;}
.topbar_mes_btn_sc i{font-size:1.5rem;color: #ff4c35;font-weight: 600;} 
</style>