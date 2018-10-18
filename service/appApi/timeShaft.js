const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')

// 查询单条数据
router.get('/',async(ctx)=>{
    const timeShaft = mongoose.model('timeShaft')
    await timeShaft.find({time:ctx.request.query.time}).then(time=>{
        if (!time.length) {
            ctx.body = {
                success: false,
                msg: '暂无数据！',
                data: {}
            }
        }else{
            ctx.body = {
                success: true,
                msg: '查询成功！',
                data: time[0]
            }
        }
    }).catch(err=>{
        throw err
    })
})
// 查询所有数据
router.get('/allTimeShaft',async(ctx)=>{
    const timeShaft = mongoose.model('timeShaft')
    await timeShaft.find({}).then(time=>{
        if(time.length){
            ctx.body = {
                success: true,
                msg: '查询成功！',
                data: time
            }
        }else{
            ctx.body = {
                success: false,
                msg: '暂无数据！',
                data: []
            }
        }
    }).catch(err=>{
        throw err
    })
})
module.exports=router;