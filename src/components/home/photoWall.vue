<template lang="html">
    <div class="images">
        <p class="artFont">Dribs&Drabs</p>
      <img class="pic pic1" v-lazy="photo1">
      <img class="pic pic2" v-lazy="photo2">
      <img class="pic pic3" v-lazy="photo3">
      <img class="pic pic4" v-lazy="photo4">
      <img class="pic pic5" v-lazy="photo5">
      <img class="pic pic6" v-lazy="photo6">
      <img class="pic pic7" v-lazy="photo7">
      <img class="pic pic8" v-lazy="photo8">
      <img class="pic pic9" v-lazy="photo9">
      <img class="pic pic10" v-lazy="photo10">
      <img class="pic pic11" v-lazy="photo11">
      <img class="pic pic12" v-lazy="photo12">
      <img class="pic pic13" v-lazy="photo13">
      <img class="pic pic14" v-lazy="photo14">
      <img class="pic pic15" v-lazy="photo15">
      <img class="pic pic16" v-lazy="photo16">
      <img class="pic pic17" v-lazy="photo17">
      <img class="pic pic18" v-lazy="photo18">
      <img class="pic pic19" v-lazy="photo19">
      <img class="pic pic20" v-lazy="photo20">
      <img class="pic pic21" v-lazy="photo21">
      <img class="pic pic22" v-lazy="photo22">
      <img class="pic pic23" v-lazy="photo23">
      <div class="iconBox">
          <Icon type="heart" class="heart heart1"></Icon>
          <Icon type="heart" class="heart heart2"></Icon>
          <Icon type="heart" class="heart heart3"></Icon>
          <Icon type="heart" class="heart heart4"></Icon>
          <Icon type="heart" class="heart heart5"></Icon>
          <Icon type="heart" class="heart heart6"></Icon>
          <Icon type="heart" class="heart heart7"></Icon>
          <Icon type="heart" class="heart heart8"></Icon>
          <Icon type="heart" class="heart heart9"></Icon>
          <Icon type="heart" class="heart heart10"></Icon>
          <Icon type="heart" class="heart heart11"></Icon>
          <Icon type="heart" class="heart heart12"></Icon>
          <Icon type="heart" class="heart heart13"></Icon>
          <Icon type="heart" class="heart heart14"></Icon>
          <Icon type="heart" class="heart heart15"></Icon>
          <Icon type="heart" class="heart heart16"></Icon>
          <Icon type="heart" class="heart heart17"></Icon>
          <Icon type="heart" class="heart heart18"></Icon>
          <Icon type="heart" class="heart heart19"></Icon>
          <Icon type="heart" class="heart heart20"></Icon>
          <Icon type="heart" class="heart heart21"></Icon>
          <Icon type="bowtie" class="heart heart22"></Icon>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            photo1: require('../../assets/photo/1.jpg'),
            photo2: require('../../assets/photo/2.jpg'),
            photo3: require('../../assets/photo/3.jpg'),
            photo4: require('../../assets/photo/4.jpg'),
            photo5: require('../../assets/photo/5.jpg'),
            photo6: require('../../assets/photo/6.jpg'),
            photo7: require('../../assets/photo/7.jpg'),
            photo8: require('../../assets/photo/8.jpg'),
            photo9: require('../../assets/photo/9.jpg'),
            photo10: require('../../assets/photo/10.jpg'),
            photo11: require('../../assets/photo/11.jpg'),
            photo12: require('../../assets/photo/12.jpg'),
            photo13: require('../../assets/photo/13.jpg'),
            photo14: require('../../assets/photo/14.jpg'),
            photo15: require('../../assets/photo/15.jpg'),
            photo16: require('../../assets/photo/16.jpg'),
            photo17: require('../../assets/photo/17.jpg'),
            photo18: require('../../assets/photo/18.jpg'),
            photo19: require('../../assets/photo/19.jpg'),
            photo20: require('../../assets/photo/20.jpg'),
            photo21: require('../../assets/photo/21.jpg'),
            photo22: require('../../assets/photo/22.jpg'),
            photo23: require('../../assets/photo/23.jpg'),
        }
    }
}
</script>
<style lang="css">
    @import url(http://fonts.font.im/css?family=Pacifico);
</style>
<style lang="less" scoped>
.images {
    border-radius: 20px;
    border: solid 2px #ccc;
    width: 100%;
    height: 750px;
    // margin: 188px 0 10px;
    position: relative;
    // background: #DCEDF9;
    background-image: url("../../assets/image/photoWallBg2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    .artFont{
        position: absolute;
        bottom: -20px;
        right: 0;
        font-family: 'Pacifico', cursive;
    }
    .pic {
        width: 200px;
    }
    .pic1 {
        left: 400px;
        top: 55px;
        transform: rotate(-5deg);
        -webkit-transform: rotate(-5deg);
    }
    .pic2 {
        left: 170px;
        top: 210px;
        transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
    }
    .pic3 {
        top: 220px;
        right: 200px;
        transform: rotate(5deg);
        -webkit-transform: rotate(5deg);
    }
    .pic4 {
        top: 178px;
        left: 389px;
        transform: rotate(-10deg);
        -webkit-transform: rotate(-22deg);
    }
    .pic5 {

        top: 70px;
        right: 150px;
        transform: rotate(-10deg);
        -webkit-transform: rotate(-10deg);
    }
    .pic6 {
        left: 120px;
        top: 55px;
        transform: rotate(10deg);
        -webkit-transform: rotate(10deg);
    }
    .pic7 {
        left: 850px;
        top: 75px;
        transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
    }
    .pic8 {
        bottom: -20px;
        top: 250px;
        transform: rotate(5deg);
        -webkit-transform: rotate(5deg);
    }
    .pic9 {
        left: 590px;
        top: 488px;
        transform: rotate(15deg);
        -webkit-transform: rotate(15deg);
    }
    .pic10 {
        left: 540px;
        top: 185px-160px;
        -webkit-transform: rotate(0deg);
    }
    .pic11 {
        left: 173px;
        top: 360px;
        -webkit-transform: rotate(18deg);
    }
    .pic12 {
        left: 305px;
        top: 330px;
        -webkit-transform: rotate(-29deg);
    }
    .pic13 {
        left: 433px;
        top: 513px;
        -webkit-transform: rotate(3deg);
    }
    // .pic14{
    //     left: 420px;
    //     top: 260px;
    //     -webkit-transform:rotate(2deg);
    // }
    // .pic15{
    //         left: 320px;
    //         top: 270px;
    //         -webkit-transform:rotate(-25deg);
    // }
    .pic16 {
        left: 420px;
        top: 333px;
        -webkit-transform: rotate(-10deg);
    }
    .pic17 {
        left: 660px;
        top: 360px-160px;
        -webkit-transform: rotate(25deg);
    }
    .pic18 {
        left: 125px;
        top: 508px;
        -webkit-transform: rotate(25deg);
    }
    .pic19 {
        left: 660px;
        top: 347px;
        -webkit-transform: rotate(-25deg);
    }
    .pic20 {
        left: 850px;
        top: 608px-160px;
        -webkit-transform: rotate(110deg);
    }
    .pic21 {
        left: 1028px;
        top: 85px;
        -webkit-transform: rotate(10deg);
    }
    .heart {
        // -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        position: absolute;
        color: red;
        font-size: 20px;
        transition: all .8s;
        &:hover{
            transform: scale(3);
        }
    }
    .iconBox{
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke:1px rgba(224, 94, 94, 0.75);
        background: red;
    }
    .heart1 {
        top: 500px;
        right: 15%;
        -webkit-transform: rotate(0deg);
    }
    .heart2 {
        top: 480px;
        right: 17%;
        -webkit-transform: rotate(0deg);
    }
    .heart3 {
        top: 480px;
        right: 13%;
        -webkit-transform: rotate(0deg);
    }
    .heart4 {
        top: 469px;
        right: 11%;
        -webkit-transform: rotate(0deg);
    }
    .heart5 {
        top: 469px;
        right: 19%;
        -webkit-transform: rotate(0deg);
    }
    .heart6 {
        top: 482px;
        right: 21%;
        -webkit-transform: rotate(0deg);
    }
    .heart7 {
        top: 482px;
        right: 9%;
        -webkit-transform: rotate(0deg);
    }
    .heart8 {
        top: 506px;
        right: 21.5%;
        -webkit-transform: rotate(0deg);
    }
    .heart9 {
        top: 506px;
        right: 8.5%;
        -webkit-transform: rotate(0deg);
    }
    .heart10 {
        top: 538px;
        right: 21%;
        -webkit-transform: rotate(0deg);
    }
    .heart11 {
        top: 538px;
        right: 9%;
        -webkit-transform: rotate(0deg);
    }
    .heart12 {
        top: 564px;
        right: 20%;
        -webkit-transform: rotate(0deg);
    }
    .heart13 {
        top: 564px;
        right: 10%;
        -webkit-transform: rotate(0deg);
    }
    .heart14 {
        top: 580px;
        right: 19%;
        -webkit-transform: rotate(0deg);
    }
    .heart15 {
        top: 580px;
        right: 11%;
        -webkit-transform: rotate(0deg);
    }
    .heart16 {
        top: 594px;
        right: 18%;
        -webkit-transform: rotate(0deg);
    }
    .heart17 {
        top: 594px;
        right: 12%;
        -webkit-transform: rotate(0deg);
    }
    .heart18 {
        top: 603px;
        right: 17%;
        -webkit-transform: rotate(0deg);
    }
    .heart19 {
        top: 603px;
        right: 13%;
        -webkit-transform: rotate(0deg);
    }
    .heart20 {
        top: 610px;
        right: 16%;
        -webkit-transform: rotate(0deg);
    }
    .heart21 {
        top: 610px;
        right: 14%;
        -webkit-transform: rotate(0deg);
    }
    .heart22 {
        top: 620px;
        right: 15%;
        -webkit-transform: rotate(0deg);
    }
}
.images img:hover {
    box-shadow: 15px 15px 20px rgba(50,50,50,0.4);
    transform: rotate(0deg) scale(2.20);
    -webkit-transform: rotate(0deg) scale(1.20);
    z-index: 1000;
}
.images img {
    padding: 10px 10px 15px;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 3px rgba(50,50,50,0.4);
    -webkit-transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -ms-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    transition: all 0.5s ease-in;
    position: absolute;
    z-index: 1;
}
.images img:hover {
    box-shadow: 15px 15px 20px rgba(50,50,50,0.4);
    transform: rotate(0deg) scale(2.20);
    -webkit-transform: rotate(0deg) scale(2.20);
    z-index: 1000;
}
</style>
