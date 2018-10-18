<template lang="html">
    <section id="tableImg">
        <!-- <h1>{{content}}</h1>
        <el-button @click="change">+</el-button> -->
        <!-- <div v-if="showBig" :class="['bigImgBox', 'animated',showBig?'fadeInUp':'fadeOut']"> -->
        <div v-show="showBig" :class="['bigImgBox', 'animated',classNow]">
            <img class="bigImg" :src="defaultImg" alt="">
        </div>
        <div class="contentImg">
            <el-row>
                <el-col v-for="(item,index) in images" :span='4' :key="index">
                    <img @click="lookBg(item)" :src="item" alt="">
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
// import {content} from '../../vuex/mixin';
export default {
	// mixins: [content],
	data() {
		return {
			classNow: 'fadeInDown',
			classArray: ['rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight', 'bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft',
				'fadeInRight', 'fadeInUp', 'fadeInUpBig', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'
			],
			showBig: true,
			defaultImg: require('../../assets/image/pic1.jpg'),
			images: [
				require('../../assets/image/pic1.jpg'),
				require('../../assets/image/pic2.jpg'),
				require('../../assets/image/pic3.jpg'),
				require('../../assets/image/pic4.jpg'),
				require('../../assets/image/pic5.jpg'),
				require('../../assets/image/pic6.jpg'),
				require('../../assets/image/pic7.jpg'),
				require('../../assets/image/pic8.jpg'),
				require('../../assets/image/pic9.jpg')
			],
		}
	},
	watch: {
		defaultImg() {
			this.showBig = false;
			this.classNow = this.classArray[Math.round(Math.random() * (this.classArray.length - 1))]
			setTimeout(() => {
				this.showBig = true;
			}, 100)
			// this.showBig = true;

		}
	},
	methods: {
		lookBg(val) {
			// this.showBig = false;
			// console.log(this.showBig,'===---===');
			// let a = document.getElementsByClassName('bigImg')[0];
			// console.log(a.classList,'---==---');
			// console.log(a,'====');
			// a.classList.add('animate','fadeInUp');
			// this.showBig = !this.showBig;
			this.defaultImg = val;
			// this.showBig = true;
		},
		// change(){
		//     this.SET_content(20)
		// }
	}
}
</script>

<style lang="less">
#tableImg {
    transition: all 0.5s;
    width: 100%;
    height: 100%;
    background: #000;
    .bigImgBox {
        width: 100%;
        height: 100%;
        .bigImg {
            width: 100%;
            // height: 80%;
        }
    }
    .contentImg {
        width: 50%;
        position: fixed;
        bottom: 20px;
        left: 50%;
        margin-left: -25%;
        img {
            height: 100px;
            width: 120px;
            border: solid 1px #fff;
            cursor: pointer;
            transition: transform 0.5s;
            &:hover {
                // transform: rotate(360deg);
                // transform: scale(1.5,1.5);
                animation: rotate1 1s infinite alternate ease-in-out;
                transform: scale(1.5,1.5) rotate(-10deg);
                // animation: rotate1 1s infinite alternate ease-in-out;
            }
        }

    }
}

@keyframes rotate1 {
    from {
        box-shadow: 0 0 18px rgba(72, 106, 170, 0.72);
    }
    to {
        box-shadow: 0 0 18px rgba(72, 106, 170, 1.0), 0 0 30px rgba(0, 255, 247, 1);
    }
}
@keyframes ama {
    from {
        box-shadow: 0 0 18px rgba(72, 106, 170, 0.72);
    }
    to {
        box-shadow: 0 0 18px rgba(72, 106, 170, 1.0), 0 0 30px rgba(0, 255, 247, 1);
    }
}
</style>
