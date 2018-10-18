<template lang="html">
  <section class="navs">
      <el-menu
        :router="true"
        :default-active="activeName"
        class="el-menu-demo"
        mode="horizontal"
        @select="select"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item :route="{name: 'home'}" index="1">
                <template slot="title">
                    <Icon type="ios-home"></Icon>
                    <span>首页</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'time'}" index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>时间轴</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'photo'}" index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>生活照</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'footprint'}" index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>足迹</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'aboutme'}" index="5">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>关于我</span>
                </template>
            </el-menu-item>

            <el-menu-item :route="{name: 'message'}" index="6">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>留言板</span>
                </template>
            </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import {subActiveName} from '../../vuex1/mixin.js'
export default {
    mixins: [subActiveName],
	data() {
		return {
            theme1: 'light',
            activeName: '1',
		}
    },
    methods:{
        select(name){
        }
    },
    watch: {
        '$route.name': function(newval){
            // console.log(newval,'-=-=-=');
            this.$emit('select',newval)
            // if (newval=='home') {
            //     this.activeName = '1'
            // }
            // console.log(newval,'-=-=-=-=-');
        }
    },
    created(){
        // alert(111)
    },
    mounted(){
        
        // alert(111)
        // if (this.navActiveName==='1') {
        //     this.activeName = '1'
        // }
        // console.log(this.subActiveName,'[][]][][');
        
    }
}
</script>

<style lang="less">
.navs {
    // height: 200px;

    
    // .ivu-menu-light {
    //     background: rgba(0, 0, 0, 0.1);
    // }
    .ivu-menu-light{
        background: hsl(0, 0%, 47%);
    }
    .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
        color: #fff;
    }
}
</style>
