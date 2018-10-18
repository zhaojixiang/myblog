const mongoose = require('mongoose')

const Schema = mongoose.Schema

let objectId = Schema.Types.ObjectId

const userSchema = new Schema({
    UserId: objectId,
    userName: { unique: true, type: String },
    password: String,
    createAt: { type: Date, default: Date.now() },
    lastLoginAt: { type: Date, default: Date.now() }
},{
    collection: 'user'
})

mongoose.model('User', userSchema)