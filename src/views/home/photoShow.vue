<template>
    <section id="photoShow">
        <backIndex :label="subLabel" class="backIndex"/>

        <el-row :gutter="60" class="photoShow">
            <el-col :class="[`imgItem${index}`,'imgItemSty']" :span="6" v-for="(item,index) in pictures" :key="index" :data-scroll-reveal="item.animate">
                <div class="imgBox">
                    <span class="line1 vertical"></span>
                    <span class="line2 vertical"></span>
                    <span class="line3 cro"></span>
                    <span class="line4 cro"></span>
                    <img v-lazy="item" alt="">
                    <p class="content">简单晒照几张，持续更新哈...</p>   
                </div>
            </el-col>
        </el-row>
    </section>
</template> 
<script>
import scrollReveal from 'scrollReveal';
import backIndex from 'components/common/backIndex'

export default {
    data(){
        return{
            subLabel: {
                label: '生活照',
                text: '好咖啡要和朋友一起品尝，好的景色也要和同样喜欢它的人一起分享。'
            },
            scrollReveal: scrollReveal(),
            pictures: [
                require('@/assets/image/photoShow/pic1.jpg'),
                require('@/assets/image/photoShow/pic2.jpg'),
                require('@/assets/image/photoShow/pic3.jpg'),
                require('@/assets/image/photoShow/pic4.jpg'),
                require('@/assets/image/photoShow/pic5.jpg'),
                require('@/assets/image/photoShow/pic6.jpg'),
                require('@/assets/image/photoShow/pic7.jpg'),
                require('@/assets/image/photoShow/pic8.jpg'),
            ],
            animate: [
                'enter top over 3s after 0.5s',
                "enter right after 0.5s",
                "enter bottom over 1s and move 300px after 0.3s",
                "enter top over 0.5s and move 200px",
                "enter bottom over 1s and move 100px",
                "enter top",
                "enter left",
                "enter top over 3s after 0.5s",
            ],
            customAnimate: [
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'top',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'left',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'right',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'bottom',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 1200,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'top',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '300px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 600,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'bottom',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'top',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'top',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
                {
                    // container: '#contList',
                    // 动画的时长
                    duration: 800,
                    // 延迟时间
                    delay: 100,
                    // 动画开始的位置，'bottom', 'left', 'top', 'right'
                    origin: 'top',
                    // 回滚的时候是否再次触发动画
                    reset: true,
                    // 在移动端是否使用动画
                    mobile: true,
                    // 滚动的距离，单位可以用%，rem等
                    distance: '200px',
                    // 其他可用的动画效果
                    opacity: 0.001,
                    // easing: 'linear',
                    scale: 0.9,
                },
            ]
        }
    },
    components: {
        backIndex
    },
    methods: {
        getPictures(){
            let num = 0;
            this.pictures.forEach((item,index)=>{
                
                if ((num+1)>this.customAnimate.length) {
                    num = 0
                }
                
                this.scrollReveal.reveal(`.imgItem${index}`, this.customAnimate[num])
                num++
            })
            
        }
    },
    created(){
        
    },
    watch: {
        "$route.name": function(newval){
            if (newval=="photo") {
                this.getPictures()                  
            }
        }
    },
    mounted(){
        this.getPictures()
    }
}
</script>
<style lang="less">
#photoShow{
    background-repeat:  no-repeat;
    background: url('../../assets/image/homeimg/photoBg.jpg');
    background-size: cover;
    background-position:center;
    background-attachment: fixed;
    padding-bottom: 60px;
    .photoShow{
        width: 90%;
        margin: 0 auto !important;
        .imgItemSty{
            margin-top: 35px;
        }
        .imgBox{
            width: 280px;
            height: 375px;
            position: relative;
            // background: #fff;
            transition: all 1.2s;
            img{
                height: 100%;
                width: 100%;
                cursor: pointer;

            }
            .content{
                position: absolute;
                top: 25%;
                color: transparent;
                background: transparent;
                padding: 8px 60px 10px;
                transition: all .5s;

            }
            &:hover{
                transform: scale(1.1,1.1);
                .cro{
                    background: #fff;
                    width: 90%;
                }
                .vertical{
                    background: #fff;
                    height: 90%;
                }
                .content{
                    position: absolute;
                    top: 38%;
                    color: #fff;
                    background: rgba(0, 0, 0, .3);
                    padding: 8px 60px 10px;

                }
            }
            .cro{
                display: inline-block;
                background: transparent;
                height: 1px;
                width: 10%;
                transition: all 1s;
            }
            .vertical{
                display: inline-block;
                background: transparent;
                height: 10%;
                width: 1px;
                transition: all 1s;

            }
            .line1{
                position: absolute;
                top: 3%;
                left: 10%;
            }
            .line2{
                position: absolute;
                top: 3%;
                right: 10%;
            }
            .line3{
                position: absolute;
                top: 10%;
                left: 3%;
            }
            .line4{
                bottom: 10%;
                right: 3%;
                position: absolute;
            }
            
        }
    }
}
</style>