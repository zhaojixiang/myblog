<template lang="html">
    <section class="banner">
        <el-carousel trigger="click" height="450px" class="carousel" :autoplay="false">
            <el-carousel-item :key="1">
                <div class="bannerCircle">
                    打开窗户让孤单透气，这一间屋子如此密闭
                </div>
                <img v-lazy="banner1">
            </el-carousel-item>
            <el-carousel-item :key="2">
                <div class="bannerCircle">
                    欢呼声仍飘在人海里，像空无一人一样华丽
                </div>
                <img v-lazy="banner2">
            </el-carousel-item>
            <el-carousel-item :key="3">
                <div class="bannerCircle">
                    我，渐渐失去知觉
                </div>
                <img v-lazy="banner3">
            </el-carousel-item>
        </el-carousel>
        <div class="rightImg">
            <div class="right">
                <img v-lazy="banner2" title="认真就对了，你说呢">
                <p>安静的做一只前端工程师</p>
            </div>
            <div class="right">
                <img v-lazy="banner3" title="认真就对了，你说呢">
                <p>安静的做一只前端工程师</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                banner1: require('../../assets/image/nanjing.jpg'),
                banner2: require('../../assets/image/shanghai.jpg'),
                banner3: require('../../assets/image/mianzhu.jpg')
            }
        },
        mounted(){
            // (function(){
            //     window.scrollReveal = new scrollReveal({ reset: true, move: '30px'});
            // })();
        }
    }
</script>
<style lang="less">
    .banner {
        font-family: serif;
        // font-family: 'Pacifico', cursive;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .carousel {
            height: 100%;
            width: 60%;
            position: relative;

            .bannerCircle {
                color: #fff;
                font-weight: bolder;
                font-size: 16px;
                width: 100%;
                height: 40px;
                line-height: 40px;
                background: hsla(0, 0%, 0%, 0.4);
                position: absolute;
                bottom: 10px;
            }

            img {
                cursor: pointer; 
                height: 500px;
                width: 100%;
            }
        }

        .rightImg {
            width: 38%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .right{
                width: 100%;
                position: relative;
                img {
                    cursor: pointer;    
                    transition: all .5s;
                    filter: brightness(80%);
                    vertical-align:top;
                    height: 215px;
                    width: 100%;
                    // background: #000;
                    // overflow: hidden;
                    // position: relative;
                    &:hover{
                        filter: brightness(110%);
                    }
                }
                p{
                    color: #fff;
                    text-align: left;
                    text-indent: 2em;
                    font-weight: bolder;
                    font-size: 14px;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    background: rgba(0,0,0,0.2);
                    position: absolute;
                    bottom: 0px;
                }
            }
        }

        .el-carousel__indicator {
            display: none;
        }
    }
</style>