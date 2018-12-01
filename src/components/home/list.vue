<template lang="html">
  <section id="lists">
      <!-- <h2 class="title">footprint</h2> -->
      <div class="icons">
          <p><Icon type="ios-paper-plane-outline" /></p>
          <p><Icon type="ios-leaf-outline" /></p>
          <p><Icon type="ios-umbrella-outline" /></p>
          <p><Icon type="ios-water-outline" /></p>
      </div>
      <ul>
          <li @click="play('mianzhu')"><span></span><img src="../../assets/image/mianzhu.jpg" alt=""><p>mianzhu</p></li>
          <li @click="play('nanjing')"><span></span><img src="../../assets/image/nanjing.jpg" alt=""><p>nanjing</p></li>
          <li @click="play('shanghai')"><span></span><img src="../../assets/image/shanghai.jpg" alt=""><p>shanghai</p></li>
          <li @click="play('changzhou')"><span></span><img src="../../assets/image/changzhou.jpg" alt=""><p>changzhou</p></li>
      </ul>
  </section>
</template>
<script>
export default {
	data() {
        return{
        }
	},
    methods:{
        play(val){
            this.$emit('play',val);
            // window.scrollTo( 0, 650 );
        }
    }
}
</script>
<style lang="css">
    @import url(http://fonts.font.im/css?family=Pacifico);
</style>
<style lang="less">
#lists {
    background: #fff;
    color: #fff;
    // display: flex;
    // justify-content: space-around;
    .title{
        font-family: 'Pacifico', cursive;
        font-size: 60px;
        margin-bottom: 40px;
        margin-top: -30px;
    }
    .icons{
        color: #000;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        // flex-direction: column;
        font-size: 60px;
        p{
            width: 180px;
            transition: all .8s;
            &:hover{
                transform: rotate(180deg);
            }
        }
    }
    ul {
        padding-top: 30px;
        text-align: center;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        list-style: none;
        li {
            margin: 0 auto;
            cursor: pointer;
            position: relative;
            height: 180px;
            width: 180px;
            background: #fff;
            transition: all 1s;
            img {
                border-radius: 20px;
                height: 100%;
                width: 100%;
                transition: all 1s;
            }
            span{
                font-family: 'Pacifico', cursive;
                transition: all 1s;
                height: 214px;
                width: 214px;
                border: solid 2px transparent;
                border-radius: 10px;
                position: absolute;
                top: -17px;
                left: -17px;
            }
            p{
                font-family: 'Pacifico', cursive;
                position: absolute;
                top: 50%;
                width: 100%;
                text-align: center;
                font-size: 30px;
                margin-top: -22.5px;
            }
            &:hover {
                img{
                    border-radius: 100px;
                }
                transform: scale(1.2);
                span{
                    height: 140px;
                    width: 140px;
                    top: 20px;
                    left: 20px;
                    border-radius: 80px;
                    border-color: #fff;
                    // background: #fff;
                }
            }
        }
    }
}
</style>
