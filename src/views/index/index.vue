<template>
    <section>
        <!-- <div style="height:40px;color:red;fontSize:30px;marginTop:50px;"> -->
        <!-- <button @click="number_remove">-</button> -->
        <!-- {{$store.state.content}} -->
        <!-- {{content}} -->
        <!-- <button @click="content_add()">+</button> -->
        <!-- </div> -->
        <div class="nav">
            <top-nav @select="changeImg"/>
        </div>
        <div class="topImg">
            <img :src="topImg" alt="">
        </div>
        <!-- <music-control class="music" /> -->
        <div class="headPortrait">
            <img :src='headPortrait' alt="">
            <span @click="logOut">退出登录</span>
        </div>
        <div class="content-box">
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <footers class="footers" />
    </section>
</template>

<script>
    import topNav from 'components/common/nav'
    import footers from 'components/common/footer'

    import musicControl from 'components/common/musicControl'
    import { content } from '../../vuex1/mixin'
    export default {
        mixins: [content],
        data() {
            return {
                headPortrait: require("../../assets/image/musicControlBg.png"),
                topImg: '',
                topphoto: require('../../assets/image/message/topphoto.jpg'),
                topMessage: require('../../assets/image/message/topMessage.jpg'),
                topTime: require('../../assets/image/message/topTime.jpg'),
                topAboutme: require('../../assets/image/message/topaboutme.jpg'),
                topprint: require('../../assets/image/message/topprint.jpg'),

            }
        },
        mounted() {
            // alert(111)
            // window.scrollReveal = new scrollReveal({ reset: true, move: '30px', elem: document.getElementsByTagName('html')[0] });
           
            let new_scroll_position = 0;
            let last_scroll_position;
            let header = document.getElementsByClassName("nav")[0];

            window.addEventListener('scroll', function(e) {
                last_scroll_position = window.scrollY;

                if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
                    header.classList.remove("slideDown");
                    header.classList.add("slideUp");

                } else if (new_scroll_position > last_scroll_position) {
                    header.classList.remove("slideUp");
                    header.classList.add("slideDown");
                }

                new_scroll_position = last_scroll_position;
            });

        },
        methods:{
            logOut(){
                this.$router.push('/')
            },
            changeImg(val){
                switch (val){
                    case 'home':
                        this.topImg = ''
                        break;
                    case 'time': 
                        this.topImg = this.topTime;
                        break;
                    case 'photo': 
                        this.topImg = this.topphoto;
                        break;
                    case 'footprint': 
                        this.topImg = this.topprint;
                        break;
                    case 'aboutme': 
                        this.topImg = this.topAboutme;
                        break;
                    case 'message': 
                        this.topImg = this.topMessage;
                        break;
                }
            }
        },
        components: {
            topNav,
            musicControl,
            footers
        }
    }
</script>

<style lang="less">
    .nav {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1000;
    }
    .topImg{
        margin-top: 60px;
        img{
            height: 220px;
            width: 100%;
        }
    }
    .slideUp{
        transition: all .5s;
        transform: translateY(-100px)
    }
    .slideDown{
        transition: all .5s;
         transform: translateY(0px)
    }

    .music {
        position: absolute;
        right: 15px;
        top: 6px;
        z-index: 1001;
    }
    .headPortrait{
       
        position: absolute;
        right: 70px;
        top: 18px;
        z-index: 1001;
        color: #fff;
        // vertical-align:middle;
        height: 30px;
        span{
            width: 100px;
            position: absolute;
            top: 3px;
            display: inline-block;
            cursor: pointer;
        }
        img{
            height: 25px;
            width: 25px;
            border-radius: 12.5px;
        }
    }

    .content-box {
        margin-top: 30px;
    }

    .footers {
        margin-top: 40px;
        // position: fixed;
        // bottom: 0px;
        width: 100%;
        // z-index: 1000;
    }
</style>