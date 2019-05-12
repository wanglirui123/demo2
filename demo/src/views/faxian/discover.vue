<template>
   <div class="hander"> 
    <Hander/>
        <div class="main">
           <div class="sss">
               <router-link to="/shicai" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_shicai@3x.png" /> </router-link>
               <router-link to="/caidan" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_caidan@3x.png" /> </router-link>
               <router-link to="/zhuanti" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_zhuanti@3x.png" /> </router-link>
               <router-link to="/wenzhang" tag="div" class="tu"><img src="https://s1.c.meishij.net/wap7/images/ms_home_find_wenzhang@3x.png" /> </router-link>
            </div>
            <div class="iitem" v-for="(item,index) in list" :key="index">
                <div class="i_t">{{item.title}}</div>
                <span class="i_tag">{{item.tag}}</span>
                <div class="videoitem">
                    <router-link to="" tag="div" class="author">
                        <img :src="item.imgtx" />
                        <span>{{item.span}}</span>
                        <em>{{item.em}}</em>
                    </router-link>
                    <div class="imgw">
                        <router-link to="/rishiji" tag="div">
                            <img :src="item.imgfm" />
                            <div class="info">
                                <strong>{{item.strong}}</strong>
                                <em>{{item.em2}}</em>
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
    data(){
        return{
            list:[
                {
                    title:'热门的视频菜谱',
                    tag:'视频菜谱',
                    imgtx:'http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg',
                    span:'日食记',
                    em:'2017-05-31更新',
                    imgfm:'http://admin.meishi.cc/article/upload/video_img/20170531/20170531174704_320.png',
                    strong:'看一遍就能学会的泡椒凤爪 骨头都想吞掉',
                    em2:'466935次播放'
                },
                {
                    title:'热门的视频菜谱',
                    tag:'视频菜谱',
                    imgtx:'http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg',
                    span:'日食记',
                    em:'2017-05-31更新',
                    imgfm:'http://admin.meishi.cc/article/upload/video_img/20161129/20161129151200_304.jpg',
                    strong:'芝士年糕火锅',
                    em2:'100637次播放'
                },
                {
                    title:'热门的视频菜谱',
                    tag:'视频菜谱',
                    imgtx:'http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg',
                    span:'日食记',
                    em:'2017-05-31更新',
                    imgfm:'http://admin.meishi.cc/article/upload/video_img/20161124/20161124173240_212.jpg',
                    strong:'电饭煲猪蹄',
                    em2:'178780次播放'
                },
                {
                    title:'热门的视频菜谱',
                    tag:'视频菜谱',
                    imgtx:'http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg',
                    span:'日食记',
                    em:'2017-05-31更新',
                    imgfm:'http://admin.meishi.cc/article/upload/video_img/20161103/20161103150558_703.jpg',
                    strong:'啤酒蒸大闸蟹',
                    em2:'30647次播放'
                },
                {
                    title:'热门的视频菜谱',
                    tag:'视频菜谱',
                    imgtx:'http://admin.meishi.cc/article/upload/video_img/20160516163203146338752389891.jpg',
                    span:'日食记',
                    em:'2017-05-31更新',
                    imgfm:'http://admin.meishi.cc/article/upload/video_img/20160829/20160829162520_898.jpg',
                    strong:'酸辣粉x棒冰',
                    em2:'59747次播放'
                },
            ]
        }
    },
    components:{
        Hander
    },
}
</script>
<style lang="scss">
$sc: 25;
.hander{
    width: 100%;
}
.main{
    min-height: 667 / $sc + rem;
    padding-bottom: 50 / $sc +rem;
    padding-top: 50 / $sc +rem;
    overflow: auto;
}
.main .sss{
    height: 120/$sc+rem;
    display: flex;
    width: 100%;
    background: #fefefe;
    text-align: center;
    font-size: 0px;
    padding: 0px 1.5625% 3.125%;
    margin: 0px auto;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.sss .tu{
    width: 25%;
    padding: 0 5/$sc+rem;
}
.sss img{
    height: 100%;
    width: 80/$sc+rem;
}
.iitem{
    background: #fefefe;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin-top: 10/$sc +rem;
}
.i_t{
    padding: 2/$sc+rem 3.125% 0px;
    height: 38/$sc +rem;
    line-height:38/$sc +rem;
    font-size: 16/$sc +rem;
}
.i_tag{
    display: inline-block;
    vertical-align: top;
    height: 18/$sc+rem;
    line-height: 18/$sc+rem;
    font-size: 12/$sc+rem;
    color: #01a1ea;
    border: 1px solid #01a1ea;
    border-radius: 2/$sc+rem;
    margin-left: 3.125%;
    padding: 0px 4/$sc+rem;
}
.videoitem{
    padding: 10/$sc+rem 3.125%;
}
.author{
    height: 1.875rem;
    display: block;
    position: relative;
}
.author img {
    display: block;
    height: 30/$sc+rem;
    width: 30/$sc+rem;
    border-radius: 15/$sc+rem;
    float: left;
}.author span{
    line-height: 30/$sc+rem;
    font-size: 14/$sc+rem;
    color: #333;
    display: inline-block;
    vertical-align: top;
    padding-left: 10/$sc+rem;
}
.author em{
    display: block;
    height: 30/$sc+rem;
    line-height: 30/$sc+rem;
    position: absolute;
    right: 0;
    font-size: 10/$sc+rem;
    color: #999;
    top: 0;
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
    left: 0;
    top: 0;
    background-size: 100% 100%;
}
.info strong{
    color: #fff;
    line-height:  24/$sc+rem;
    font-size:  16/$sc+rem;
    position: absolute;
    left:  14/$sc+rem;
    bottom:  32/$sc+rem;
    height:  24/$sc+rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
}
.info em{
    color: #fff;
    line-height:  24/$sc+rem;
    font-size:  10/$sc+rem;
    position: absolute;
    left:  14/$sc+rem;
    bottom:  10/$sc+rem;
}
.info span{
    display: block;
    height:  30/$sc+rem;
    width:  40/$sc+rem;
    position: absolute;
    right:  14/$sc+rem;
    bottom:  20/$sc+rem;
    background: url( ../../assets/fximg/video.png ) center no-repeat;
    background-size: 100% 100%;
}
</style>