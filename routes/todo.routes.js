const express = require('express')
const todoModel = require('../models/todo.model')

const todoRouter = express.Router()

todoRouter.post('/add',async(req,res)=>{
    try{
        let obj = req.body
        let data = await todoModel.create(obj)
        let ans = await todoModel.find()
        res.status(200).json('success message')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})

todoRouter.put('/update/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let data = await todoModel.findByIdAndUpdate(id,req.body)
        let ans = await todoModel.find()
        res.status(200).json(ans)
    }catch(err){
        res.status(500).json({Error:'found Error'})
    }
})

todoRouter.delete('/delete/:id',async(req,res)=>{
    try{
        let id = req.params.id
        let data = await todoModel.findByIdAndDelete(id)
        let ans = await todoModel.find()
        res.status(200).json(ans)
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})

todoRouter.get('/',async(req,res)=>{
    try{
        let data =await todoModel.find()
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({Error:err.message})
    }
})

module.exports = todoRouter