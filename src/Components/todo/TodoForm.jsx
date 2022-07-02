import './todo.css'
import {useDispatch} from "react-redux";
import { useState } from "react";
import { addTodoAction } from '../redux';
import DateTimePicker from 'react-datetime-picker';

const TodoForm = ()=> {
    
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateValue, onChange] = useState(new Date());
  

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    if(title === '' || description === ''){alert("Empty Fields")}
    else{
    addTodo(title,description,dateValue);
    setTitle("");
    setDescription("");
    console.log('handleClick 👉️ title', title);
    console.log('handleClick 👉️ description', description);
    console.log('handleClick 👉️ Date day', dateValue.toISOString());
    // console.log('handleClick 👉️ Date day', dateValue.getDay());
    }
  };

  const addTodo = (title,description,dateValue)=>{
    dispatch(addTodoAction({title,description,dateValue}));

  }
    return (<div className="header mb-5">
    <div className="container">
        <div className="header-content">
            <h1>TO DO APP!</h1>
            <h5>Add new To-Do</h5>
            <div className="input-area">
                <input type="text" name="" className="task-input" placeholder="Enter Task Title" onChange={(e)=> {setTitle(e.target.value)}} value={title}/><br/>
                <textarea name="" id="" placeholder='Enter Task Description' className='task-input' onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea><br />
                <div>
                <DateTimePicker onChange={onChange} value={dateValue} className='datePicker mb-4'/>
                </div>
                <button type="button" className="btn btn-success add-button" onClick={handleClick} >Add Todo</button>
            </div>
        </div>
    </div>
</div>)
}

export default TodoForm ;

