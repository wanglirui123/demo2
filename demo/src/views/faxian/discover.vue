<template>
   <div class="hander"> 
       <Hander/>
       <div class="main">
           <div class="sss">
               <router-link to="" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_shicai@3x.png" /> </router-link>
               <router-link to="" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_caidan@3x.png" /> </router-link>
               <router-link to="" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_zhuanti@3x.png" /> </router-link>
               <router-link to="" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_wenzhang@3x.png" /> </router-link>
            </div>
            <div class="iitem">
                <div class="i_t">热门视频菜谱</div>
                <span class="i_tag">视频菜谱</span>
                <div class="videoitem">
                    <router-link to="" tag="div" class="author">
                        <img src="http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg"  />
                        <span>日食记</span>
                        <em>2017-05-31更新</em>
                    </router-link>
                    <div class="imgw">
                        <router-link to="" tag="div">
                            <img src="http://admin.meishi.cc/article/upload/video_img/20170531/20170531174704_320.png" />
                            <div class="info">
                                <strong>看一遍就能学会的泡椒凤爪 骨头都想吞掉</strong>
                                <em>466935次播放</em>
                                <span></span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
import Hander from './toubu'
export default {
    components:{
        Hander
    }
}
</script>
<style lang="scss">
.hander{
    width: 100%;
}
.main{
    min-height: 41.6875rem;
    padding-bottom: 3.125rem;
    padding-top: 3.125rem;
    overflow: auto;
}
.sss{
    width: 100%;
    height:7.5rem;
    display: flex;
    background: #fff;
    border-bottom: .0625rem solid #ddd;
    padding: 0px 1.5625% 3.125%;
}
.sss .tu{
    width: 25%;
    padding: 0 .1875rem;
}
.sss img{
    height: 100%;
    width: 5rem;
}
.iitem{
    background: #fff;
    border-bottom:.0625rem solid #ddd;
    border-top: .0625rem solid #ddd;
    margin-top: .625rem;
}
.i_t{
    padding: 2px 3.125% 0px;
    height: 2.375rem;
    line-height: 2.375rem;
    font-size: 1rem;
}
.i_tag{
    display: inline-block;
    vertical-align: top;
    height: 1.125rem;
    line-height: 1.125rem;
    font-size: .75rem;
    color: #01a1ea;
    border: 1px solid #01a1ea;
    border-radius: .125rem;
    margin-left: 3.125%;
    padding: 0px 4px;
}
.videoitem{
    padding: 10px 3.125%;
}
.author{
    height: 1.875rem;
    margin-bottom: .625rem;
    display: block;
    position: relative;
}
.author img {
    display: block;
    height: 1.875rem;
    width: 1.875rem;
    border-radius: .9375rem;
    float: left;
}.author span{
    line-height: 1.875rem;
    font-size: .875rem;
    color: #333;
    display: inline-block;
    vertical-align: top;
    padding-left: .625rem;
}
.author em{
    display: block;
    height: 1.875rem;
    line-height: 1.875rem;
    position: absolute;
    right: 0rem;
    font-size: .625rem;
    color: #999;
    top: 0rem;
}
.imgw{
    width: 100%;
    position: relative;
}
.imgw img{
    display: block;
    width: 100%;
}
.info{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    background-size: 100% 100%;
}
.info strong{
    color: #fff;
    line-height: 24px;
    font-size: 16px;
    position: absolute;
    left: 14px;
    bottom: 32px;
    height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
}
.info em{
    color: #fff;
    line-height: 24px;
    font-size: 10px;
    position: absolute;
    left: 14px;
    bottom: 10px;
}
</style>