<template>
    <section id="contList">
        <div data-scroll-reveal="enter top over 3s after 0.5s" class="listItem" v-for="(item,index) in list" :key="index">
            <h2>{{item.title}}</h2>
            <div class="contentBox">
                <img :src="item.img" alt="">
                <p>{{item.content}}</p>
            </div>

        </div>
    </section>
</template>
<script>
    import scrollReveal from 'scrollReveal';

    export default {
        data() {
            return {
                list: [{
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num1.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                    {
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num2.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                    {
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num1.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                    {
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num2.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                    {
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num1.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                    {
                        title: '前端程序员爬坑日记',
                        img: require('../../assets/image/blogListImg/num2.jpg'),
                        content: '曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情的...'
                    },
                ],
                scrollReveal: scrollReveal()
            }
        },
        watch: {
            // "$route.name": function(newval){
            //     if (newval=="home") {
            //         this.scrollReveal.reveal('.listItem', {
            //             container: '#contList',
            //             // 动画的时长
            //             duration: 1000,
            //             // 延迟时间
            //             delay: 0,
            //             // 动画开始的位置，'bottom', 'left', 'top', 'right'
            //             origin: 'top',
            //             // 回滚的时候是否再次触发动画
            //             reset: true,
            //             // 在移动端是否使用动画
            //             mobile: true,
            //             // 滚动的距离，单位可以用%，rem等
            //             distance: '50px',
            //             // 其他可用的动画效果
            //             opacity: 0.001,
            //             // easing: 'linear',
            //             scale: 0.9,
            //         })                   
            //     }
            // }
        },
        mounted() {
            


            //  (function(){
            window.scrollReveal = new scrollReveal({elem: document.getElementById('contList')});
            // window.scrollReveal2 = new scrollReveal({ reset: true, move: '30px', elem: document.getElementById('contList') });
            // })();
            // window.scrollReveal = new scrollReveal();
            //或者，elem 为动画元素的任何级别的父元素
        }
    }
</script>
<style lang="less">
    #contList {
        height: 100%;
        overflow:scroll;

        .listItem {
            text-align: left;
            background: #fff;
            margin: 0 10px 10px 0px;
            padding: 20px;
            h2{
                padding-bottom: 15px;
            }
            .contentBox {
                display: flex;
                justify-content: flex-start;

                img {
                    width: 30%;
                    height: 150px;
                    margin-right: 20px;
                }

                p {}
            }
        }
    }
</style>