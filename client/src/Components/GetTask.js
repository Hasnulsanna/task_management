import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import '../styles/list.css'


const GetTask = () => {
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetchTasks();
      }, []);


    const fetchTasks = async () => {
        try {
          const response = await axios.get('/api/tasks');
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };


      const handleDelete = async (id) => {
        try{
          const isConfirmed = window.confirm('Are you sure to delete the task?');
          if (isConfirmed) {
          await axios.delete(`/api/tasks/${id}`);
          fetchTasks();
        }
      }catch (error) {
          console.error('Error deleting task:', error);
        }
      };


  return (
    
    <div className="todo">
      <Link to='/'><button className="back">Back</button></Link>
	<h1>Todo List</h1>
	Hover over the items to see the Little Details
			<ul>
            {tasks.map((task) => (
				<li key={task._id} theLittleDetails={task.description}>
                    {task.title}
                <Link to={`/task/update/${task._id}`}><button className='button1'>
                <img src="../../assets/pen.svg" width={"15px"} alt=""/>
                </button></Link>
            <button className='button3' onClick={() => handleDelete(task._id)}><img src="../../assets/del.svg" width={"15px"} alt=""/></button>
            <br/>
            <br/>
            </li>
            ))}
            

			</ul>
        </div>
  )}

export default GetTask;

