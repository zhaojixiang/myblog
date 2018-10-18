const Router = require ('koa-router')
let router = new Router()

const mongoose = require('mongoose')

router.post('/',async(ctx)=>{
    // console.log(ctx);
    const User = mongoose.model('User')
    let a= JSON.parse(Object.keys(ctx.request.body)[0])
    
    await User.findOne({userName:a.userName}).then(user=>{
        if (!user) {
            ctx.body = {
                success: false,
                msg: '用户名不存在！'
            }
        }else{
            if (a.password==user.password) {
                ctx.body = {
                    data: user._id,
                    success: true,
                    msg: '登录成功！'
                }
            }else{
                ctx.body = {
                    success: false,
                    msg: '密码错误！'
                }
            }
        }
    }).catch(err=>{
        throw err
    })
})
router.get('/register',async(ctx)=>{
    ctx.body="用户注册接口"
})

module.exports=router;