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
html,body{background:#f5f5f5;}
#topbar{height: 3.125rem;width: 100%;display: flex;background:#fefefe;position:fixed;top:0px;left:0px;z-index:1000;text-align:center;}
.searchbar_index{height:2.75rem;width:100%;}
.searchbar_index h1{font-size:1.125rem;color:#000;line-height:2.75rem;text-align:center;}
.topbar_mes_btn{position: absolute;right: .8rem;top: .8rem}
.topbar_mes_btn i{font-size:1.5rem;color: #999;} 
</style>