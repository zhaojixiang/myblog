<template lang="html">
    <section class="musicControl">
        <audio style="" id="music" :src="music" loop>
            你的浏览器不支持
        </audio>
        <Icon @click="play" :type="isplay?'ios-pause':'ios-play'"></Icon>
    </section>
</template>

<script>
export default {
	data() {
		return {
			isplay: false,
			music: require('../../assets/music/myLife.mp3')
		}
	},
	methods: {
		play() {
			this.isplay = !this.isplay;
			let a = document.getElementById('music');
			let b = document.getElementsByClassName('musicControl')[0];
			if (a.paused) {
				a.play()
				b.classList.add('active')
			} else {
				a.pause()
				b.classList.remove('active')
			}

		},
	}
}
</script>

<style lang="less">
.musicControl {
    font-size: 22px;
    color: #fff;
    height: 40px;
    line-height: 40px;
    width: 40px;
    background-image: url("../../assets/image/musicControlBg.png");
    background-size: cover;
    border: solid 1px rgba(163, 203, 29, 0.79);
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: rotate(360deg);
        animation: glow 1s infinite alternate ease-in-out;
    }
}
.active {
    animation: play 1s infinite alternate ease-in-out;
}
@-webkit-keyframes glow {
    0% {
        -webkit-box-shadow: 0 0 18px rgba(72, 106, 170, 0.5);
    }

    100% {
        -webkit-box-shadow: 0 0 18px rgba(72, 106, 170, 1.0), 0 0 30px rgba(0, 140, 255, 1.0);
    }
}
@-webkit-keyframes play {
    0% {
        -webkit-box-shadow: 0 0 18px rgba(72, 106, 170, 0.5);
        border: 1px solid rgba(58, 207, 55, 1);
    }

    100% {
        -webkit-box-shadow: 0 0 18px rgba(58, 207, 55, 1), 0 0 30px rgba(224, 0, 0, 1);
        border: 1px inset rgba(153, 224, 0, 1);
    }
}
</style>
