const mongoose = require('mongoose')

const Schema = mongoose.Schema

let objectId = Schema.Types.ObjectId

const messageSchema = new Schema({
    _Id: objectId,
    createAt: { type: Date, default: Date.now() },
    content: String,
    name: String
},{
    collection: 'message'
})

mongoose.model('message', messageSchema)