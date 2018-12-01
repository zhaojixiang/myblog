<template>
    <section id="contList">
        <link rel="stylesheet" href="/static/editor.md/css/editormd.min.css">
        <div data-scroll-reveal="enter top over 0.5s after 0.3s" class="listItem" v-for="(item,index) in listData" :key="index" @click="details(item,index)">
            <h2>{{item.title}}</h2>
            <div class="contentBox" v-html="item.describe">
            </div>
        </div>
    </section>
</template>
<script>
    import '../../assets/js/scrollReveal.js'
    export default {
        data() {
            return {
            }
        },
        props: {
            listData:{
                type: Array
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
            // window.scrollReveal = new scrollReveal({ reset: true, move: '50px' });
            // this.initEditor()
            // window.scrollReveal = new scrollReveal();
            // window.scrollReveal2 = new scrollReveal({ reset: true, move: '30px', elem: document.getElementById('contList') });
            // })();
            // window.scrollReveal = new scrollReveal();
            //或者，elem 为动画元素的任何级别的父元素
        },
        methods:{
            details(val,index){
                // console.log(val,'ppppppppppppppppppppp');
                
                this.$router.push({name: 'article',params:{data:val,index:index}})
            }
        }
    }
</script>
<style>
</style>

<style lang="less">
    #contList {
        height: 100%;
        width: 100%;
        // overflow:scroll;

        .listItem {
            cursor: pointer;
            width: 96.7%;
            text-align: left;
            background: rgba(255,255,255,.7);
            margin: 0 10px 10px 0px;
            padding: 20px;
            h2{
                padding-bottom: 15px;
            }
        }
    }
</style>