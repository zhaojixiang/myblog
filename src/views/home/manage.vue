<template>
<section id="manage">
    <img :src="topmanage" alt="" class="topimg">
    <div class="manage">
        <el-menu default-active="1" class="el-menu-vertical-demo menuBox" @select="selectOne" :collapse="isCollapse">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">article</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-document"></i>
                    <span slot="title">diary</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
        </el-menu>
        <div class="markDown" v-show="showThis==1">
            <el-form>
                <el-form-item label="title:">
                    <el-input v-model="title"></el-input>
                </el-form-item>
                <el-form-item label="describe:">
                    <el-input v-model="describe"></el-input>
                </el-form-item>
            </el-form>
            
            <mavon-editor v-model="editorValue" @save="save"/>
        </div>
        <div class="diary" v-show="showThis==2">
            <el-form>
                <el-form-item label="select time:">
                    <el-date-picker
                        v-model="diary.time"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="title:">
                    <el-input v-model="diary.title" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="text:">
                    <el-input v-model="diary.text" type="textarea" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-button>写日记</el-button>
            </el-form>
        </div>
    </div>
</section>
</template>
<script>
    // import scriptjs from 'scriptjs';
    // import { defaultConfig, codeThemes } from 'assets/js/editor.md';
    export default {
        data: function() {
            return {
                topmanage: require('../../assets/image/message/manage.jpg'),

                title: '', // 标题
                describe: '', // the article's describe text
                editorValue: '',
                editorHtml: '',
                resetEditor: {}, // 重新编辑的数据
                isCollapse: false,
                showThis: 1,
                diary: {
                    time: '',
                    title: '',
                    text: ''
                }
            };
        },
        activated(){
            console.log(this.$route.params.data);
            
            if(this.$route.params.data!=undefined){
                this.resetEditor = this.$route.params.data;
                this.editorValue = this.$route.params.data.editorValue;
                this.title = this.$route.params.data.title;
                this.describe = this.$route.params.data.describe;
                
            }
        },
        methods: {
            async save(val,render){

                if(Object.values(this.resetEditor).length) {
                    // 修改
                     let param = {
                        title: this.title,
                        describe: this.describe,
                        editorValue: this.editorValue,
                        editorHtml: render,
                        id:　this.resetEditor._id
                    }
                    let res = await this.$api.saveManage(param);
                    let {data,success,msg} = res;
                    if (success) {
                            this.$notify({
                                title: '成功',
                                message: '修改成功!',
                                duration: '2000',
                                type: 'success'
                            });
                    }else{
                        this.$notify.error({
                                title: '修改失败!',
                                message: msg,
                                duration: '2000'
                            });
                    }
                }else{
                    // 发表
                    this.editorHtml = render;
                    let param = {
                        title: this.title,
                        describe: this.describe,
                        editorValue: this.editorValue,
                        editorHtml: render,
                    }
                   let res = await this.$api.saveManage(param);
                   let {data,success,msg} = res;
                   if (success) {
                        this.$notify({
                            title: '成功',
                            message: '发表成功!',
                            duration: '2000',
                            type: 'success'
                        });
                   }else{
                       this.$notify.error({
                            title: '失败',
                            message: msg,
                            duration: '2000'
                        });
                   }

                }
                // 清空
                this.resetEditor = {}
            },
            selectOne(val){
                this.showThis = val
            }
        },
    }
</script>
<style lang="less">
#manage{
    background: #fff;
    padding-bottom: 60px;
    .manage{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        .subBtn{
            width: 50%;
            margin: 20px 0;
        }
        .show{
            border: solid 1px #ccc;
            min-height: 200px;
            border-radius: 5px;
            background: #fff;
            text-align: left;
            padding: 10px;
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            // width: 200px;
            // min-height: 400px;
        }
        .markDown{
            width: 78%;
        }
        .diary {
            width: 78%;
            .el-input{
                width: 100%;
            }
            .el-button{
                width: 100%;
            }
        }
    }
    .el-menu{
        width: 20% !important;
    }
}
</style>
