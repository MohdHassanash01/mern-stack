const {model, Schema}  = require('../connection')

const mySchema = new Schema({
    title:String,
    brand:{type:String},
    category:{type:String},
    model:{type:String},
    price:{type:Number, default: Date.now}
})


module.exports = model('products',mySchema)