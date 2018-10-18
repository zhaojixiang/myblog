<template>
    <section id="photoShow">
        <backIndex :label="subLabel"/>

        <el-row :gutter="60" class="photoBox">
            <el-col :class="[`imgItem${index}`,'imgItemSty']" :span="6" v-for="(item,index) in pictures" :key="index" :data-scroll-reveal="item.animate">
                <div class="imgBox">
                    <img :src="item" alt="">
                    <p>作为一个设计师,如果遭到质疑你是否能恪守自己的原则</p>   
                </div>
            </el-col>
        </el-row>
    </section>
</template> 
<script>
// import '@/assets/js/scrollReveal.js'
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
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg'),
                require('@/assets/image/pic9.jpg')
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
    width: 90%;
    margin: 0 auto;
    .photoBox{
        .imgItemSty{
            margin-top: 35px;
        }
        .imgBox{
            background: #fff;
            transition: all .2s;
            img{
                width: 100%;
                cursor: pointer;

            }
            p{
                padding: 8px 15px 10px;
            }
            &:hover{
                transform: scale(1.1,1.1)
            }
        }
    }
}
</style>