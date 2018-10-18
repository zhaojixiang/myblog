const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')

router.get('/',async(ctx)=>{
    const message = mongoose.model('message')
    let newMessage = new message(ctx.request.query)
    
    await newMessage.save().then(()=>{
        ctx.body = {
            success: true,
            msg:'留言成功！',
            data: []
        }
    }).catch(error => {
        ctx.body = {
            success: false,
            msg: error,
            data: []
        }
    })
})
router.get('/allMessage',async(ctx)=>{
    const message = mongoose.model('message')
    
    await message.find({}).then(data=>{
        if (!data.length) {
            ctx.body = {
                success: false,
                msg:'暂无数据！',
                data: []
            }
        }else{
            ctx.body = {
                success: true,
                msg: '查询成功！',
                data: data
            }
        }
    }).catch(err=>{
        throw err;
    })
})

module.exports=router;