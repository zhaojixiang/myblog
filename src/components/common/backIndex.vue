<template>
    <section id="backIndex">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane name="first">
                <span slot="label"><i class="el-icon-date"></i> 首页</span>
            </el-tab-pane>
            <el-tab-pane name="second">
                <span slot="label"><i class="el-icon-date"></i> {{label.label}}</span>
            </el-tab-pane>
        </el-tabs>
        <p class="text">{{label.text}}</p>
    </section>
</template>
<script>
    import {navActiveName} from '../../vuex1/mixin.js'

    export default {
        mixins: [navActiveName],
        data(){
            return{
                activeName: 'second'
            }
        },
        props: {
            label: {
                type: Object
            }
        },
        mounted(){
        },
        watch: {
            // "$route.name": function(newval){
            //     if (newval!="home") {
            //         this.activeName = "second";                    
            //     }
            // }
        },
        activated (){
            this.activeName = "second";
            // console.log(this.navActiveName,'[][][][][[=-=000');
            
        },
        methods: {
            handleClick(val){
                // 点击首页是返回首页
                if (val.name==="first") {
                    this.navActiveName_set('1')
                    this.$router.push('index')
                }
            }
        }
    }
</script>
<style lang="less">
    #backIndex {
        // background: #fff;
        position: relative;
        .el-tabs--border-card>.el-tabs__content{
            padding: 0px;
        }
        .text{
            position: absolute;
            right: 20px;
            top: 110px;
            color: #ffd5d5;
        }
        .el-tabs__item{
            color: #fff;
            }
        .el-tabs__item:hover{
            color:rgb(255, 208, 75);
        }
        .el-tabs__item.is-active{
            color: rgb(255, 208, 75);
        }
    }
</style>