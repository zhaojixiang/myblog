<template>
<transition name="fade">

    <section id="article">
        <backIndex :label="subLabel" class="backIndex"/>

        <mavon-editor v-show="false"/>
        <div class="article">
            <div class="articleLeft markdown-body" v-html="articleCOntent.editorHtml">
            </div>
            <div class="articleRight">
                <div class="listItem" v-for="(item,index) in contentList" :key="index">
                    <h2 @click="details(item,index)">{{item.title}}</h2>
                    <div @click="details(item,index)" class="content">{{item.describe}}</div>
                    <div class="editor" v-if="showBtn">
                        <!-- <el-popover
                            placement="top"
                            width="160"
                            v-model="visible2">
                            <p>这是一段内容这是一段内容确定删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                            </div>
                            <el-button slot="reference">删除</el-button>
                        </el-popover> -->
                        <el-button size="mini" type="danger" @click="deleteOne(item)">删除</el-button>
                        <el-button size="mini" @click="editor(item)">编辑</el-button>

                    </div>
                </div>
            </div>
        </div>
    </section>
</transition>
</template>
<script>
import backIndex from 'components/common/backIndex'

export default {
    data(){
        return{
            articleCOntent: {},
            contentList: [],

            subLabel: {
                label: '关于我',
                text: '像“草根”一样，紧贴着地面，低调的存在，冬去春来，枯荣无恙。'
            },
            showBtn: sessionStorage.getItem('login'), // 权限，是否显示btn
            // visible2: false
        }
    },
    components: {
        backIndex
    },
    props:{
    },
    watch: { 
        
        // '$route.name': function(newVal){
        //     if (newVal==="article") {
        //         if (this.$route.params.index==undefined) {
        //         }else{
        //             this.details(this.$route.params.data,this.$route.params.index)
        //         }

                
        //     }
        // }
    },
    activated() {
        if (this.$route.params.index!=undefined) {
            // 查看详情
            this.details(this.$route.params.data,this.$route.params.index)
        }else{
            // 获取数据
            this.getContentList()
        }
    },
    mounted() {
            this.getContentList()
        
    },
    methods:{
        async getContentList(){
            let res = await this.$api.allManage();
               let {data,success,msg} = res;
               if (success) {
                   if (data.length) {
                       
                       this.contentList = data
                    //    设置默认值
                       this.articleCOntent = data[0];
                        
                   }else{
                        this.$notify.warning({
                            title: '警告',
                            message: '文章列表为查询到数据！',
                            duration: '2000'
                        });
                   }
               }else{
                   this.$notify.error({
                        title: '失败',
                        message: msg,
                        duration: '2000'
                    });
               }
        },
        // 查看当前文章
        details(val,index){
            // console.log(val,'///////');
            
            this.articleCOntent = val;
            let a = document.querySelectorAll('.listItem');
            a.forEach((item)=>{
                item.style.background = '#fff'
            })
            a[index].style.background = 'rgba(255, 255, 255, 0.6)'
        },
        editor(val){
            this.$router.push({name:'manage',params: {data: val}})
        },
        // 当初当前文章
        async deleteOne(val){
            console.log(val,'-=-=-=-=');
            
            // 修改
            let param = {
                id:　val._id
            }
            let res = await this.$api.deletemanage(param);
            let {data,success,msg} = res;
            if (success) {
                    this.$notify({
                        title: '成功',
                        message: msg,
                        duration: '2000',
                        type: 'success'
                    });
            }else{
                this.$notify.error({
                    title: '失败!',
                    message: msg,
                    duration: '2000'
                });
            }
            // 重新请求所有数据
            this.getContentList()
        }
    }
}
</script>

<style lang="less">
#article{
    background: url('../../assets/image/articleImg/bg.jpg') no-repeat fixed;
    padding-bottom: 60px;
    ::-webkit-scrollbar{
        display: none;
    }
    .article{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        ::-webkit-scrollbar{
        display: none;
    }
        .articleLeft{
            height: 1200px;
            overflow: scroll;
            width: 65%;
            padding: 20px 20px 600px;
            background: rgba(255,255,255,.8);
            text-align: left;
        }
    .articleRight{
        // position: fixed;
        // top: 200px;
        // right: 2%;
        height: 800px;
        overflow: auto;
        width: 33%;
        ::-webkit-scrollbar{
            display: none;
        }
        
        .listItem{
            transition: all 1s;
            min-height: 130px;
            padding: 20px;
            background: #fff;
            text-align: left;
            margin-bottom: 10px;
            cursor:pointer;
            h2{
                padding-bottom: 15px;
            }
            .content{
                // white-space: nowrap;
                // overflow: hidden;
                // text-overflow: ellipsis;
            }
            .editor{
                text-align: right;
            }
        }
    }
    .bgColor{
        background: rgba(255, 255, 255, 0.8);
    }
    }

}
</style>
