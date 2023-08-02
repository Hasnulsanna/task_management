import React ,{ useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import axios from 'axios'


const UpdateTask = () => {
    const [tasks, setTasks] = useState({ title: '', description: '', status: 'todo' });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams();

    useEffect(() => {
      fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
          const response = await axios.get(`/api/tasks/${id}`);
          setTasks(response.data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
  

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (tasks.title.trim() === '' || tasks.description.trim() === '') {
          alert('Please provide Necessary fields');
        } else {
            try {
            await axios.put(`/api/tasks/${id}`,{
                title: tasks.title,
                description: tasks.description,
                status: tasks.status,
              })
            setTitle('')
            setDescription('')
            setStatus('')
            alert('Updated SuccessFully')
        } catch (error) {
            console.error('Error adding task:', error);
        }
    }
  }

  return (
    <div id="form-main">
        <div className="heading">
            <h1>Stay on track, conquer the day!</h1>
        </div>
        <Link to='/tasks'><button className="view">BACK</button></Link>
        <div id="form-div">
          <form className="form" id="form1" onSubmit={handleSubmit}>
            
              <input 
              type="text" 
              className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
              placeholder="Title"
              value={tasks.title}  
              onChange={(e) => setTasks({ ...tasks, title: e.target.value })}
              id="name">
            </input>
            

              <textarea name="textarea" 
              className="validate[required,length[6,300]] feedback-input" 
              id="comment" 
              value={tasks.description}  
              onChange={(e) => setTasks({ ...tasks, description: e.target.value })}
              placeholder="Description"></textarea>

            <select
              className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" 
              onChange={(e) => setTasks({ ...tasks, status: e.target.value })}
              value={tasks.status}  
              id="name">
                <option value="todo">todo</option>
                <option value="completed">in-progress</option>
                <option value="in-progress">completed</option>
            </select>
            
            
            <div className="submit">
              <button type="submit" id="button-blue">UPDATE</button>
              <div className="ease"></div>
            </div>
          </form>
        </div>
        </div>
      );
}

export default UpdateTask