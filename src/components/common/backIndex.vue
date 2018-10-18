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

    export default {
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
            "$route.name": function(newval){
                if (newval!="home") {
                    this.activeName = "second";                    
                }
            }
        },
        methods: {
            handleClick(){
                // 点击首页是返回首页
                if (this.activeName==="first") {
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
            top: 12px;
        }
    }
</style>