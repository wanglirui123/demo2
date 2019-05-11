<template>
    <div id="topbar">
        <div class="searchbar_index">
            <h1>发现最热门</h1>
        </div>
        <div class="topbar_mes_btn">
            <i class="iconfont">&#xe621;</i>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
//头部
$sc: 25;
#topbar{height: 50/$sc +rem ;width: 100%;display: flex;background:#fefefe;position:fixed;top:0;left:0;z-index:1000;text-align:center;}
.searchbar_index{height:50/$sc +rem;width:100%;}
.searchbar_index h1{font-size:18px;color:#000;line-height:50/$sc +rem;text-align:center;}
.topbar_mes_btn{position: absolute;right: 12/$sc +rem;top: 15/$sc +rem;}
.topbar_mes_btn i{font-size:24px;color: #999;} 
</style>