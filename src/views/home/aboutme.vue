<template>
    <section id="aboutme">
        <backIndex :label="subLabel"/>
        <div class="aboutme">
            <div class="aboutmeCont">
                <h2>基本信息</h2>
                <el-row class="basicInfomation">
                    <el-col :span="12">
                        姓名： 赵吉祥
                    </el-col>
                    <el-col :span="12">
                        年龄： 22
                    </el-col>
                </el-row>
                <el-row class="basicInfomation">

                    <el-col :span="12">
                        专业： 不重要
                    </el-col>
                    <el-col :span="12">
                        学历： 大专
                    </el-col>
                </el-row>
                <el-row class="basicInfomation">

                    <el-col :span="12">
                        职业： 前端开发
                    </el-col>
                    <el-col :span="12">
                        工作经验：2年
                    </el-col>
                </el-row>
                <h2 style="padding:20px 0 10px;">技术栈</h2>
                <el-table :show-header="false" :data="Technology" stripe style="width: 100%">
                    <el-table-column label="" prop="num">
                    </el-table-column>
                </el-table>
                <h2 style="padding:20px 0 10px;">工作经历</h2>
                <el-row style="textAlign:left;padding-left:15%;fontWeight:bold">成都零点科技有限公司</el-row>
                <h2 style="padding:20px 0 10px;">项目经验</h2>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="无线电大数据分析平台" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="rightContent">
                <div class="top">
                    <img class="headPortrait1" :src="headPortrait" alt="">
                    <div class="topcontent">
                        <h3>w世说心语 | 赵吉祥</h3>
                        <p>web前端工程师</p>
                        <p>一个95后草根站长！16年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人经验，以及学习心得。</p>
                    </div>
                </div>
                <div class="bottom">
                    <h2>微信关注</h2>
                    <img :src="weixin" alt="">
                </div>
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
                    label: '关于我',
                    text: '像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。'
                },
                headPortrait: require('assets/image/aboutmeimg/headPortrait.jpg'),
                weixin: require('assets/image/aboutmeimg/weixin.png'),
                activeNames: ['1'],
                Technology: [{
                    num: 'h5，css3，javascript'
                }, {
                    num: 'vue(vuex)'
                }, {
                    num: 'elementui，iview，bootstrop，vux',
                }, {
                    num: 'koa2，mongodb',
                }, {
                    num: 'leaflet'
                }],
                projectData: [{
                    title: '无线电大数据分析平台',

                }]
            }
        },
        components: {
            backIndex
        },
        watch: {
        },
        mounted(){
            
            
        }
    }
</script>
<style lang="less">
#aboutme{
    width: 90%;
    margin: 0 auto;
    .aboutme {
        display: flex;
        justify-content: space-between;

        .aboutmeCont {
            margin-top: 10px;
            font-size: 16px;
            background: #fff;
            width: 57%;
            padding: 40px;

            .basicInfomation {
                border-bottom: solid 1px #ccc;
                height: 40px;
                line-height: 40px;
                text-align: left;
                padding-left: 15%;
            }

            .el-table .cell {
                font-weight: bold;
                text-align: left;
                font-size: 16px;
                padding-left: 15%;
            }

            .el-collapse-item__header {
                text-align: left;
                padding-left: 15%;
                font-weight: bold;
                font-size: 16px;
            }

            // p {
            //     text-align: left;
            //     margin-bottom: 15px;
            // }
        }

        .rightContent {
            width: 40%;
            margin-top: 10px;

            .top {
                padding: 20px;
                background: url('../../assets/image/aboutmeimg/wall.jpg');
                margin-bottom: 20px;
                height: 400px;

                .headPortrait1 {
                    height: 30%;
                    border-radius: 60px;
                }

                .topcontent {
                    font-size: 14px;
                    margin-top: -55px;
                    padding: 60px 40px;
                    background: #fff;
                    height: 85%;
                    line-height: 35px;
                }
            }

            .bottom {
                background: #fff;
                padding: 30px;

                img {
                    width: 50%;
                    border-radius: 10px;
                    transition: all .5s;
                    filter: brightness(90%);

                    &:hover {
                        transform: scale(1.1, 1.1);
                        filter: brightness(110%);
                    }
                }
            }
        }
    }
}
    
</style>