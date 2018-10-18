<template lang="html">
    <section class="video">
        <!-- <img src="../../assets/image/videoBg2.jpg" alt=""> -->
        <video class="videoControls" :src="video" controls>
            你的浏览器不支持播放视频
        </video>
    </section>
</template>

<script>
import snow from 'components/common/slowFlake'
export default {
    data(){
        return{
            video: '',
            video1: require('../../assets/video/we.mp4'),
            video2: require('../../assets/video/shixi.mp4'),
            video3: require('../../assets/video/mianzhu.mp4'),

        }
    },
    components: {
    },
    methods:{
        play(val){

            switch (val){
                case "nanjing":
                    this.video = this.video2;
                    break;
                case "changzhou":
                    this.video = this.video2;
                    break;
                case "shanghai":
                    this.video = this.video2;
                    break;
                case "mianzhu":
                    this.video = this.video3;
                    break;
            }
            let b = document.getElementsByClassName('videoControls')[0];
            setTimeout(()=>{
                b.play()
            },1000)
            // if (a.paused) {
            //     b.classList.add('active')
            // } else {
            //     a.pause()
            //     b.classList.remove('active')
            // }
        }
    }
}
</script>

<style lang="less">
.video{
    width: 100%;
    height: 100%;
    // position: relative;
    img{
        height: 100%;
        width: 100%;
        filter: blur(3px);
    }
    .videoControls{
        // top: 40px;
        // left: 30px;
        height: 400px;
        // position: absolute;
    }
}
</style>
