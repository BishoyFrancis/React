import './todo.css'
import {useDispatch} from "react-redux";
import { useState } from "react";
import { addTodoAction } from '../redux';

const TodoForm = ()=> {
    
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    if(title === '' || description === ''){alert("Empty Fields")}
    else{
    addTodo(title,description);
    
    setTitle("");
    setDescription("");
    console.log('handleClick 👉️ title', title);
    console.log('handleClick 👉️ description', description);
    }
  };

  const addTodo = (title,description)=>{
    dispatch(addTodoAction({title,description}));

  }
    return (<div className="header mb-5">
    <div className="container">
        <div className="header-content">
            <h1>TO DO APP!</h1>
            <h5>Add new To-Do</h5>
            <div className="input-area">
                <input type="text" name="" className="task-input" placeholder="Enter Task Title" onChange={(e)=> {setTitle(e.target.value)}} value={title}/><br/>
                <textarea name="" id="" placeholder='Enter Task Description' className='task-input' onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea><br />
                <button type="button" className="btn btn-success add-button" onClick={handleClick} >Add Todo</button>
            </div>
        </div>
    </div>
</div>)
}

export default TodoForm ;

