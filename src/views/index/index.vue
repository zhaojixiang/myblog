<template>
    <section id="bigBox">
        <!-- <div style="height:40px;color:red;fontSize:30px;marginTop:50px;"> -->
        <!-- <button @click="number_remove">-</button> -->
        <!-- {{$store.state.content}} -->
        <!-- {{content}} -->
        <!-- <button @click="content_add()">+</button> -->
        <!-- </div> -->
        <div class="nav">
            <top-nav/>
        </div>
        <!-- <music-control class="music" /> -->
        <div class="headPortrait">
            <img :src='headPortrait' alt="">
            <span @click="logOut">退出登录</span>
        </div>
        <div class="content-box">
            <keep-alive>
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
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
        },
        components: {
            topNav,
            musicControl,
            footers
        }
    }
</script>

<style lang="less">
#bigBox{
    background: #0000008f;
    position: relative;
    .nav {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1000;
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
        // margin-bottom: 30px;
    }

    .footers {
        position: absolute;
        bottom: 0;
        // margin-top: 40px;
        // position: fixed;
        // bottom: 0px;
        width: 100%;
        // z-index: 1000;
    }
    .transitionRouter-enter-active,
    .transitionRouter-leave-active {
        transition: all 0.4s;
    }

    .transitionRouter-enter,
    .transitionRouter-leave{
        transform: translate3d(100%, 0, 0);
    }


    .slide-fade{
        position: absolute;left:0;right: 0;
    }
    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active {
        transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    {
        left:0;right: 0;
        transform: translateY(-30px);
        opacity: 0;
    }
}

</style>