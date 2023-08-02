const mongoose = require('mongoose')
const Task=require('../models/Task.js')

exports.InsertTask = async (req, res) => {
    try{
    const{title,description}=req.body
    const task=new Task({title,description})
    console.log(task);
    await task.save()
    res.status(201).json(task)
    }
    catch(error){
        res.status(500).json({error:"insuccessfull"})
    }
}


exports.RetrieveTask = async (req, res) => {
    try {
        const tasks=await Task.find().sort({createdAt:-1});
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch tasks' });
  }
        
}


exports.RetrieveSingleTask= async (req, res) => {
    try {
        const {id}=req.params
        const tasks=await Task.findById(id);
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch tasks' });
  }
        
}

exports.UpdateTask = async (req, res) => {
    try {
        const {id:_id}=req.params
        const status=req.body
        const updatedTask = await Task.findByIdAndUpdate(_id, status, { new: true });
        console.log(updatedTask);
        res.status(200).json(updatedTask)
    } catch (error) {
        res.status(500).json({ error: 'Unable to update task' });
    }
}


exports.DeleteTask =async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Unable to delete task' });
      }
}