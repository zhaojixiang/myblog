<template>
    <section id="messageBoard">
        <backIndex :label="subLabel"/>
        <div class="message">
            <div class="messageList">
            <div v-for="(item,index) in msgData" :key="index" class="msgItem">
                <h2>{{item.name}}</h2>
                <p>{{item.content}}</p>
                <span class="time">{{(new Date(item.createAt)).toLocaleString()}}</span>
            </div>
        </div>
        <div class="rightCont">
            <el-form class="formBox" :model="formData" :rules="rules" ref="formData">
                <el-form-item label="留言：" prop="textarea2">
                    <el-input style="min-height: 200px !important;" class="inputArea" type="textarea" autosize placeholder="随便说两句吧~" v-model="formData.textarea2">
                    </el-input>
                </el-form-item>
                <el-form-item label="你的名字：" prop="name">
                    <el-input placeholder="what’s your name?" v-model="formData.name" clearable>
                    </el-input>
                </el-form-item>
            </el-form>
            <el-button type="warning" plain @click="clean">清空</el-button>
            <el-button type="success" plain @click="submit('formData')">提交</el-button>
        </div>
        </div>
        
    </section>
</template>
<script>
    import backIndex from 'components/common/backIndex'

    export default {
        data() {
            return {
                subLabel: {
                    label: '留言板',
                    text: '留下你想对我说的心里话吧'
                },
                formData: {
                    textarea2: '',
                    name: ''
                },
                msgData: [],
                rules: {
                    name: [{ required: true, message: '这儿没填！', trigger: 'blur' },
                    { min: 1, max: 9, message: '长度在 1 到 9 个字符', trigger: 'blur' }],
                    textarea2: [{ required: true, message: '这儿没填！', trigger: 'blur' }],

                }
            }
        },
        components: {
            backIndex
        },
        mounted() {
            this.allMessage()
        },
        methods: {
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.addmessage()
                        this.allMessage()
                    } else {
                        this.$notify({
                            title: '警告',
                            message: '还没有没填完哦~',
                            duration: '2000',
                            type: 'warning'
                        });
                    }
                });
                
            },
            clean(){
                this.formData.name = ''
                this.formData.textarea2 = ''
            },
            // 新增评论
            addmessage(){
                let param = {
                    name: this.formData.name,
                    content: this.formData.textarea2
                }
                this.$api.message(param).then(res => {
                    let { data, msg, success } = res
                    if (success) {
                        this.clean()
                        this.$notify({
                            title: '成功',
                            message: msg,
                            duration: '2000',
                            type: 'success'
                        });
                        // this.$message.success()
                    } else {
                        this.$notify({
                            title: '警告',
                            message: msg,
                            duration: '2000',
                            type: 'warning'
                        });
                    }
                })
            },
            // 查询所有评论
            allMessage() {
                this.$api.allMessage().then(res => {
                    let { data, msg, success } = res
                    if (success) {
                        this.msgData = data
                    } else {
                        this.$message(msg)
                    }
                })
            }
        }
    }
</script>
<style lang="less">
    #messageBoard {
        width: 90%;
        margin: 0 auto;
        .message{

        display: flex;
        margin-top: 10px;
        justify-content: space-between;

        .messageList {
            padding: 10px;
            text-align: left;
            width: 100%;
            width: 67%;
            background: #fff;

            .msgItem {
                padding: 30px;
                border-bottom: solid 1px #ccc;
                position: relative;

                h2 {}

                p {
                    font-size: 14px;
                    margin: 10px 0 5px 0;
                    color: #999;
                }

                .time {
                    color: #999;
                    position: absolute;
                    top: 10px;
                    right: 30px;
                }
            }
        }

        .rightCont {
            padding-top: 20px;
            height: 700px;
            width: 30%;
            background: #fff;

            .formBox {
                width: 90%;
                margin: 0 auto;

                .el-textarea__inner {

                    min-height: 200px !important;
                    max-height: 400px;
                }

                .inputArea {
                    width: 100%;
                    // margin: 20px 0 20px;
                }

            }
        }
    }
}

</style>