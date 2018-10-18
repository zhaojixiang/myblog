<template>

    <section id="times">
        <!-- <img :src="topBg" alt="" style="width:100%;height:100px;"> -->
        <backIndex :label="subLabel" />
        <!-- <keep-alive> -->
        
        <div class="time">
            <el-steps direction="vertical" :active="2" class="stepSty">
                <el-step status="process" v-for="(item,index) in timeShaft" :title="item.time" :key="index" description="" @click.native="detailsCont(item)">
                    <template slot="description" class="descriptionBox">
                        {{item.title}}
                    </template>
                </el-step>
            </el-steps>
            <div class="detailsCont">
                <h1>{{detailsContent.time}}</h1>
                <div class="content">
                    <img :src="detailsContent.image" />
                    {{detailsContent.text}}

                </div>

            </div>

        </div>
        <!-- </keep-alive> -->

    </section>

</template>
<script>
    import backIndex from 'components/common/backIndex'

    export default {
        data() {
            return {
                topBg: require('assets/image/bg3.jpg'),
                subLabel: {
                    label: '时间轴',
                    text: '时光飞逝，机会就在我们眼前，何时找到了灵感，就要把握机遇，我们需要智慧和勇气去把握机会。'
                },
                detailsContent: {},
                timeShaft: []
            }
        },
        components: {
            backIndex
        },
        mounted() {
            console.log(this.timeShaft);

            if (!this.timeShaft.length) {
                // alert(111)
                this.getAllTime()
            }
        },
        methods: {
            async getAllTime() {
                const res = await this.$api.allTimeShaft();
                // .then(res=>{
                let { success, data, msg } = res
                if (success) {
                    this.timeShaft = data;
                    console.log(this.timeShaft);

                    // 默认加载第一天的
                    this.detailsCont(data[0])
                } else {
                    this.$message(msg)
                }
                // })
            },
            detailsCont(val) {
                let param = {
                    time: val.time
                }
                this.$api.timeShaft(param).then(res => {
                    let { success, data, msg } = res
                    if (success) {
                        // console.log(data)
                        this.detailsContent = data;
                    } else {
                        this.$message(msg)
                    }

                })
            }
        }
    }
</script>
<style lang="less">
    #times {
        width: 90%;
        margin: 0 auto;

        .time {
            height: 700px;
            display: flex;
            justify-content: space-between;

            .stepSty {
                cursor: pointer;
                margin-top: 10px;
                padding: 40px;
                background: #fff;
                width: 55%;

                .el-step__description.is-process {
                    background: #ccc;
                    border-radius: 10px;
                    padding: 10px 10px;
                    width: 98%;
                    transition: all .5s;

                    &:hover {
                        width: 100%;
                        background: #e0e0e0;
                    }
                }
            }

            .detailsCont {
                width: 43%;
                height: 700px;
                background: #fff;
                margin-top: 10px;
                padding: 40px;

                .content {
                    text-align: left;
                    margin-top: 10px;

                    img {
                        height: 200px;
                        width: 50%;
                        float: left;
                        margin: 0 10px 10px 10px;
                    }
                }
            }
        }
    }
</style>