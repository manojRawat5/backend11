const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoRouter = require('./routes/todo.routes')

const app = express()
const port = 5050

app.use(cors())
app.use(express.json())
app.use('/todos',todoRouter)


app.listen(port,async()=>{
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/task')
        console.log('Succefully connect to mongoDb database')
    }catch(err){
        console.log("Error in connecting to mongoDb database",err.message)
    }
    console.log('Server Successfully running at port NO :',port)
})