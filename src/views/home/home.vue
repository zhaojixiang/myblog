<template lang="html">
    <section class="homeBox">
        <!-- <p class="artFont">世说心语</p> -->
        <div class="bannerCom">
            <banner/>
        </div>
        <h2 data-scroll-reveal="enter right after 0.5s" class="title">footprint</h2>
        <div class="centerContent">
            <contentList></contentList>
            <list @play="play" class="list"/>

        </div>
        <!-- <blog class=""/> -->
        
        <!-- <hexagon data-scroll-reveal="enter right after 0.5s"/>
        <photoWall data-scroll-reveal="enter right after 0.5s" class="photoWall"/>
        <snow class="snowFlake"/> -->
    </section>
</template>

<script>
import banner from 'components/home/banner'
import contentList from 'components/home/contList'

import list from 'components/home/list'
import blog from 'components/home/blog'
import photoWall from 'components/home/photoWall'
import hexagon from 'components/home/hexagon'
import movie from '../video/video'
import snow from 'components/common/slowFlake'
import '../../assets/js/scrollReveal.js'
export default {
    data(){
        return{
            bg1: require('../../assets/image/bg1.jpg'),
            bg2: require('../../assets/image/bg2.jpg'),
            bg3: require('../../assets/image/bg3.jpg')
        }
    },
    components: {
        banner,
        contentList,
        blog,
        photoWall,
        list,
        hexagon,
        movie,
        snow
    },
    mounted(){
        // (function(){
            
        // })();
        // window.onscroll = ()=>{
        //     let a = document.getElementsByClassName('homeBox')[0];
        //     if (window.pageYOffset<1050) {
        //         a.style.backgroundImage = `url(${this.bg1})`;
        //     }else if(window.pageYOffset>1050&&window.pageYOffset<2350){
        //         a.style.backgroundImage = `url(${this.bg2})`;
        //     }else if(window.pageYOffset>2350){
        //         a.style.backgroundImage = `url(${this.bg3})`;
        //     }
        //  }
    },
    methods:{
        play(val){
            this.$refs.movie.play(val);
        }
    },

}
</script>
<style lang="css">
    @import url(http://fonts.font.im/css?family=Pacifico);
</style>
<style lang="less">
.homeBox{
    width: 90%;
    height: 1700px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    .title{
        font-family: 'Pacifico', cursive;
        font-size: 60px;
        margin-top: 30px;
    }
    .artFont{
        text-align: left;
        padding: 40px;
        width: 20%;
        font: 300 35px "Comic Sans MS";
        color: white;
        text-shadow: 0 0 20px rgba(252, 23, 0, 0.54),
        10px -10px 30px rgba(111, 252, 0, 0.64),
        20px -20px 40px rgba(12, 247, 233, 0.68);
    }
    .bannerCom{
        width: 100%;
    }
    .centerContent{
        margin-top: 50px;
        justify-content: space-between;
        display: flex;
        height: 1000px;
        ::-webkit-scrollbar {
            display: none;
        }
        .list{
            width: 38%;
        }
        .movie{
            width: 60%;
            // height: 750px;
        }

    }
    .photoWall{
        margin-top: 50px;
    }
    .snowFlake{
        top: 1030px;
        position: absolute;
        height: 2500px;
    }
}
</style>
