<template lang="html">
  <section class="navs">
      <el-menu
        :router="true"
        :default-active="$route.name"
        class="el-menu-demo"
        mode="horizontal"
        @select="select"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item :route="{name: 'home'}" index="home">
                <template slot="title">
                    <Icon type="ios-home"></Icon>
                    <span>首页</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'article'}" index="article">
                <template slot="title">
                    <Icon type="ios-bookmarks" />
                    <span>文章</span>
                </template>
            </el-menu-item>

            <el-menu-item :route="{name: 'time'}" index="time">
                <template slot="title">
                    <Icon type="md-timer" />
                    <span>时间轴</span>
                </template>
            </el-menu-item>
            
            <el-menu-item :route="{name: 'photo'}" index="photo">
                <template slot="title">
                    <Icon type="md-photos" />
                    <span>生活照</span>
                </template>
            </el-menu-item>
            
            <!-- <el-menu-item :route="{name: 'footprint'}" index="footprint">
                <template slot="title">
                    <Icon type="md-paw" />
                    <span>足迹</span>
                </template>
            </el-menu-item> -->
            
            <el-menu-item :route="{name: 'aboutme'}" index="aboutme">
                <template slot="title">
                    <Icon type="ios-information-circle" />
                    <span>关于我</span>
                </template>
            </el-menu-item>

            <el-menu-item :route="{name: 'message'}" index="message">
                <template slot="title">
                    <Icon type="md-text" />
                    <span>留言板</span>
                </template>
            </el-menu-item>
            <el-menu-item :route="{name: 'manage'}" index="manage" v-if="showManage">
                <template slot="title">
                    <Icon type="md-settings" />
                    <span>后台管理</span>
                </template>
            </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
import {subActiveName} from '../../vuex1/mixin.js'
import {navActiveName} from '../../vuex1/mixin.js'
export default {
    mixins: [subActiveName,navActiveName],
	data() {
		return {
            theme1: 'light',
            showManage: sessionStorage.getItem('login'), // 权限，是否显示后台管理
            // activeName: '1',
		}
    },
    methods:{
        select(name){
            // this.navActiveName_set()
            // console.log(this.navActiveName,'-=-=-=-=');
        }
    },
    computed: {
        active:function(){
            return this.navActiveName
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
<style>

</style>

<style lang="less">
// @import '../../assets/less/iview.less';
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
    .el-menu.el-menu--horizontal{
        background: rgba(0,0,0,.3) !important;
        border: none;
    }
    .el-menu--horizontal>.el-menu-item{
        background:transparent !important;

    }
}
</style>
