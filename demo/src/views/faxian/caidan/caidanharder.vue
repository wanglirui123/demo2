<template>
    <div id="topbar_cd">
         <div class="topbar_mes_btn_cd" @click="back">
            <i class="iconfont">&#xe630;</i>
        </div>
        <div class="searchbar_index_cd">
            <h1>菜单</h1>
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

<style lang="scss" scoped>
//头部
$sc: 25;
#topbar_cd{height: 50/$sc +rem ;width: 100%;display: flex;background:#fefefe;position:fixed;top:0;left:0;z-index:1000;text-align:center;}
.searchbar_index_cd{height:50/$sc +rem;width:100%;}
.searchbar_index_cd h1{font-size:18px;color:#000;line-height:50/$sc +rem;text-align:center;}
.topbar_mes_btn_cd{position: absolute;left: 12/$sc +rem;top: 15/$sc +rem;}
.topbar_mes_btn_cd i{font-size:24px;color: #ff4c35;} 
</style>