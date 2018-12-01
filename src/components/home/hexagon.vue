<template lang="html">
      <section class="hexagon">
          <div class="con-show01">
            <div class="con-show02">
              <div class="con-show03 bg01">
                <img src="../../assets/image/six/1.jpg">
                <div>123</div>
              </div>
            </div>
          </div>
          <div class="con-show01">
            <div class="con-show02">
              <div class="con-show03 bg02">
                <img src="../../assets/image/six/2.jpg">
                <div>123</div>
              </div>
            </div>
          </div>

          <div class="con-show01">
            <div class="con-show02">
              <div class="con-show03 bg03">
                <img src="../../assets/image/six/3.jpg">
                <div>123</div>
              </div>
            </div>
          </div>

          <div class="clear"></div>

          <div class="con-show01 margin-left margin-top">
            <div class="con-show02">
              <div class="con-show03 bg04">
                <img src="../../assets/image/six/4.jpg">
                <div>123</div>
              </div>
            </div>
          </div>

          <div class="con-show01 margin-top">
            <div class="con-show02">
              <div class="con-show03">
                <img src="../../assets/image/six/5.jpg">
                <div>123</div>
              </div>
            </div>
          </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="less">
.clear {
    clear: both;
}
.hexagon {
    width: 650px;
    height: 430px;
    margin: 100px auto;
}
.con-show01 {
    width: 200px;
    height: 250px;
    float: left;
    margin-left: 10px;
    overflow: hidden;
    transform: rotate(120deg);
    transition: transform 1s;
    &:hover{
        .con-show02{
            .con-show03{
                img{
                    -webkit-filter: blur(0px);
                }
            }
        }
    }
    .con-show02 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        transform: rotate(-60deg);
        .con-show03 {
            width: 100%;
            height: 100%;
            overflow: hidden;
            transform: rotate(-60deg);
            position: relative;
            background: pink;
            div {
                // -webkit-filter: blur(10px);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                line-height: 250px;
                text-align: center;
                color: #fff;
                cursor: pointer;
                transition: opacity 0.3s;
            }
            img {
                height: 280px;
                width: 200px;
                transition: all .5s;
                -webkit-filter: blur(12px);
            }
        }
    }
}
.con-show03:hover > div {
    -webkit-filter: blur(10px);
    // opacity: 1;
}
.margin-left {
    margin-left: 115px;
}
.margin-top {
    margin-top: -70px;
}
</style>
