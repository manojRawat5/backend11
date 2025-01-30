const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    dueDate:{type:String},
    priority:{type:String,enum:['Low','High','Medium']},
    status:{type:String, enum:['Pending','Completed'],default:'Pending'}
})

const todoModel = mongoose.model('todos',todoSchema)

module.exports = todoModel