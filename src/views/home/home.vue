<template lang="html">
    <section id="homeBox">
        <div class="homeBox">
            <div class="bannerCom">
                <!-- <banner/> -->
                <!-- <el-button></el-button> -->
                <div class="centerBtn">w世说心语</div>
            </div>
            <h2 data-scroll-reveal="enter right after 0.5s" class="title">footprint</h2>
            <div class="centerContent">
                <contentList :listData="contentListData"></contentList>
                <!-- <list @play="play" class="list"/> -->
                <div class="rightBox">
                    <me/>
                    <map1 class="baidumap"/>
                </div>
            </div>
        </div> 
        <!-- <p class="artFont">世说心语</p> -->
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
import me from 'components/aboutme/me'
import map1 from 'components/common/map'

export default {
    data(){
        return{
            contentListData: [],
            bg1: require('../../assets/image/homeimg/homeBg1.jpg'),
            bg2: require('../../assets/image/homeimg/homeBg2.jpg'),
            bg3: require('../../assets/image/homeimg/homeBg3.jpg'),
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
        snow,
        me,
        map1
    },
    mounted(){
        this.getContentList()

    },
    activated() {
        // let a = document.querySelector('#homeBox');
        // console.log(window.getComputedStyle(a,null));
        // let img = window.getComputedStyle(a,null).backgroundImage;
        // console.log(img,']]]]]]==');
        // conso/le.log($,'-=-=--');
        
        // img.style.background = "backgroundImage:url('../../assets/image/homeimg/homeBg1.jpg')";
        // a.style.backgroundImage = this.bg1
        // debugger;
        // console.log(a.style,'[][][]');
        // console.log($);
        // let a = this.bg1;
        // $('#homeBox').css('backgroundImage',"url('../../assets/image/homeimg/homeBg2.jpg')")
        // console.log($('#homeBox').css('background',this.bg1),'-=-==-=-=')
        // window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });

    },
    methods:{
        play(val){
            this.$refs.movie.play(val);
        },
        async getContentList(){
            let res = await this.$api.allManage();
               let {data,success,msg} = res;
               
               if (success) {
                   if (data.length) {
                       
                       this.contentListData = data
                   }else{
                        this.$notify.warning({
                            title: '警告',
                            message: '文章列表为查询到数据！',
                            duration: '2000'
                        });
                   }
               }else{
                   this.$notify.error({
                        title: '失败',
                        message: msg,
                        duration: '2000'
                    });
               }
        }
    },

}
</script>
<style lang="css">
    @import url(http://fonts.font.im/css?family=Pacifico);
</style>
<style lang="less">
#homeBox{
        width: 100%;
        background-repeat:  no-repeat;
        background: url('../../assets/image/homeimg/homeBg1.jpg');
        background-size: cover;
        background-position:center;
        background-attachment: fixed;
    .homeBox{
        margin: 0 auto;
        width: 90%;
        .title{
            color: pink;
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
            position: relative;
            width: 100%;
            height: 600px;
            .centerBtn{
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -75px;
                height: 60px;
                width: 150px;
                line-height: 60px;
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                cursor: pointer;
                border-radius: 20px;
                background: rgba(255,255,255,.2);
                transition: all .5s;
                &:hover{
                    height: 100px;
                    line-height: 100px;
                    top: 49%;
                    left: 51.5%;
                    width: 100px;
                    color: pink;
                    background: rgba(255,255,255,.4);

                    border-radius: 150px 150px 90px 90px;
                }
            }
        }
        .centerContent{
            padding-bottom: 60px;
            margin-top: 50px;
            justify-content: space-between;
            display: flex;
            // height: 1000px;
            ::-webkit-scrollbar {
                display: none;
            }
            .rightBox{
                width: 40%;
                .baidumap{
                    margin-top: 20px;
                    height: 200px;
                }
            }

            // .list{
            //     width: 38%;
            // }
            // .movie{
            //     width: 60%;
            //     // height: 750px;
            // }
    
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
}
</style>
