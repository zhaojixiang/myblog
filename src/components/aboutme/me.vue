<template>
    <div id="me">
        <div class="top">
            <img class="headPortrait1" :src="headPortrait" alt="">
            <div class="topcontent">
                <h3>w世说心语 | 赵吉祥</h3>
                <p>web前端工程师</p>
                <p>一个95后草根站长！16年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人经验，以及学习心得。</p>
            </div>
        </div>
        <div class="bottom">
            <h2>微信关注</h2>
            <img :src="weixin" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            headPortrait: require('assets/image/aboutmeimg/headPortrait.jpg'),
            weixin: require('assets/image/aboutmeimg/weixin.png'),

        }
    }
}
</script>
<style lang="less">
#me{
    width: 100%;
    // margin-top: 10px;

    .top {
        padding: 20px;
        background: url('../../assets/image/aboutmeimg/wall.jpg');
        margin-bottom: 20px;
        height: 400px;

        .headPortrait1 {
            height: 30%;
            border-radius: 60px;
        }

        .topcontent {
            font-size: 14px;
            margin-top: -55px;
            padding: 60px 40px;
            background: #fff;
            height: 85%;
            line-height: 35px;
        }
    }

    .bottom {
        background: #fff;
        padding: 30px;

        img {
            width: 50%;
            border-radius: 10px;
            transition: all .5s;
            filter: brightness(90%);

            &:hover {
                transform: scale(1.1, 1.1);
                filter: brightness(110%);
            }
        }
    }
}
</style>

