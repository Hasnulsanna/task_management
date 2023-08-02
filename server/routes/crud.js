const express =require('express')
const {InsertTask,RetrieveTask,UpdateTask,DeleteTask,RetrieveSingleTask} =require('../controllers/TaskController.js')


const router = express.Router();

router.post('/tasks',InsertTask)
router.get('/tasks',RetrieveTask)
router.get('/tasks/:id',RetrieveSingleTask)
router.put('/tasks/:id',UpdateTask)
router.delete('/tasks/:id',DeleteTask)

module.exports = router