<template>
    <div class="loginForm">
    <div class="inputBox">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="name" style="marginTop:30px;display:block">
                <el-input v-model="ruleForm.name" placeholder="请输入用户名" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
            </el-form-item>
        </el-form>
        <div class="btnBox">
            <!-- <el-button type="success" size="mini" plain @click="submitForm('ruleForm')">登录</el-button> -->
            <el-button type="success" size="" plain @click="submitForm">登录</el-button>
            <el-button type="" size="" plain @click="submitForm('visitor')">游客登录</el-button>

        </div>
    </div>
        <bg class="bg"></bg>
        <!-- </router-link> -->
        <!-- <button type="submit" class="btn btn-default" @click="login" :router="true" :route="{name:'index'}"><router-link :to="{ name: 'home'}">登录</router-link></button> -->
    </div>
</template>

<script>
import bg from '../../components/common/loginBg'
import { stringify } from 'querystring';
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        components: {
            bg
        },
        directives: {
            focus: {
                // 接收3个参数el binding vnode
                inserted(el, binding, vnode) {
                    console.log(el)
                    console.log(binding)
                    console.log(vnode)
                    el.focus()
                }
            }
        },
        mounted(){
            // 页面初始化清除之前的token
            sessionStorage.removeItem('token')
        },
        methods: {
            submitForm(val) {
                if (val==='visitor') {
                    sessionStorage.removeItem('login')
                    this.$router.push('index')
                    return;
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        let param = {
                            userName: this.ruleForm.name,
                            password: this.ruleForm.password
                        }
                        // console.log(param,'-------');
                       
                            // debugger;
                        this.$api.login(param).then(res=>{
                            let {success,msg,data} = res
                            if (success) {
                                sessionStorage.setItem('login', 'true')
                                // this.$message.success('登陆成功！')
                                this.$notify({
                                    title: '成功',
                                    message: '登陆成功!',
                                    duration: '2000',
                                    type: 'success'
                                });
                                this.$router.push('index')
                            } else {
                                this.$message(msg)
                            }
                            
                        })
                    } else {
                        this.$message('请填写正确的用户名和密码！')
                        return false;
                    }
                });
            },
            login() {
                // // 获取已有账号密码
                // this.$http.get('/api/login/getAccount')
                //   .then((response) => {
                //     // 响应成功回调
                //     console.log(response)
                //     let params = {
                //       account : this.account,
                //       password : this.password
                //     };
                //     // 创建一个账号密码
                //     return this.$http.post('/api/login/createAccount',params);
                //   })
                //   .then((response) => {
                //     console.log(response)
                //   })
                //   .catch((reject) => {
                //     console.log(reject)
                //   });
            }
        }
    }
</script>
<style lang="less">
    .loginForm {
        position: fixed;
        left: 50%;
        margin-left: -240px;
        margin-top: 200px;
        width: 30%;
        // margin: 140px auto;
        

        .el-input {
            width: 60%;
            margin-bottom: 20px;
        }

        

        .el-form-item__error {
            left: 20%;
            top: 75%;
        }
        .inputBox{
            position: relative;
            z-index: 1000;
            position: relative;
            background: rgba(240, 240, 240, 0.4);
            height: 350px;
            padding-top: 30px;
            border-radius: 10px;
            .btnBox{
                margin: 0 auto;
                width: 60%;
                display: flex;
                justify-content: space-between;
                .el-button {
                    display: block;
                    margin: 0 auto;
                    width: 49%;
                }
            }
        }
        .bg{
            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 20;
        }
    }
</style>