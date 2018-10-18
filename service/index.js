const Koa = require('koa')
const app = new Koa()

const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')

// 支持跨域请求
const cors = require('koa2-cors')
app.use(cors())

// 引入模块接收请求
const bodyParser = require('koa-bodyparser')
app.use(bodyParser());

// 路由模块
const Router = require('koa-router')
let user = require('./appApi/user.js')
let timeShaft = require('./appApi/timeShaft.js')
let message = require('./appApi/message.js')

// 装载所有子路由
let router = new Router();
router.use('/login',user.routes())
router.use('/timeShaft',timeShaft.routes())
router.use('/message',message.routes())

// 加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

// 链接数据库
;(async ()=>{
    await connect()
    initSchemas()
    // const timeShaft = mongoose.model('timeShaft')
    // let oneUser = new timeShaft({time: '2017-1-1',text: '作为一名前端的小怪兽，我已经准备要成为一只大怪兽的了'})
    // oneUser.save().then(()=>{
    //     console.log('插入成功')
    // })
    // let  users = await  User.findOne({}).exec()
    // console.log(users,'------------------------------');
    
})()


app.use(async(ctx)=>{
    ctx.body = 'hello word'
})

app.listen(7000,()=>{
    console.log('监听端口7000')
})