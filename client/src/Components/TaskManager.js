import { useState } from "react";
import React,{useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import '../styles/task.css'

const TaskManager = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(title=='' || description===''){
          alert("Please provide necessary fields")
        }
        else{
        try {
            await axios.post('/api/tasks',{title,description})
            setTitle('')
            setDescription('')
            alert('Task Assigned SuccessFully')
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
  }
    return(
        <div id="form-main">
        <div className="heading">
            <h1>Organize, Prioritize, Accomplish!</h1>
        </div>
        <Link to='/tasks'><button className="view">VIEWTASKS</button></Link>
        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleSubmit}>
            
              <input 
              type="text" 
              className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
              value={title} 
              placeholder="Title" 
              onChange={(e) => setTitle(e.target.value)}
              id="name">
            </input>
            

              <textarea name="textarea" 
              className="validate[required,length[6,300]] feedback-input" 
              id="comment" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"></textarea>
            
            
            <div className="submit">
              <button type="submit" id="button-blue">ADD TASK</button>
              <div className="ease"></div>
            </div>
          </form>
        </div>
        </div>
      );
}

export default TaskManager
