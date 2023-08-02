import React from 'react'
import TaskManager from './Components/TaskManager.js'
import {Routes ,Route} from 'react-router-dom'
import GetTask from './Components/GetTask.js'
import UpdateTask from './Components/UpdateTask.js'
const AllRoutes = () => {
  return (
    <Routes>
         <Route path='/' element={<TaskManager/>}/>
         <Route path='/tasks' element={<GetTask/>}/>
         <Route path='/task/update/:id' element={<UpdateTask/>}/>
    </Routes>
  )
}

export default AllRoutes