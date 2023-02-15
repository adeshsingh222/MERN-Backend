const mongoose = require('mongoose')

const todoSchema= new mongoose.Schema({
    name:{
        type: String,
    },
    mobile:Number
})

module.exports= mongoose.model("todo", todoSchema);