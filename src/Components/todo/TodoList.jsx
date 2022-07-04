import {useDispatch , useSelector} from "react-redux"
import { deleteTodoAction } from "../redux/config";
import { useState } from "react";
import './todo.css'
import { deleteTodoSliceAction } from "../redux/features/TodoSlice";



const TodoList = ()=>{
    const [monthNames , setMonthNames] = useState(["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]);
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log("todos",todos);
    console.log("STATE" , useSelector((state) => state));

    const removeTodo = (idx) =>{
        dispatch(deleteTodoSliceAction(idx));
    }

    return(
        <>
        <div className="container">

         {
            todos.length > 0 ?
                <ul className="list d-flex flex-wrap gap-4 justify-content-center align-items-start">
                    {
                    todos.map((todo , idx) => { return (
                        <li key={idx} className="list d-flex flex-column">
                            <h1>{todo.title}</h1>
                            <span className="dueDate">Due Date : {monthNames[todo.dateValue.getMonth()]} {todo.dateValue.getDate()},{todo.dateValue.getFullYear()} </span>
                            <hr />
                            <p>{todo.description}</p>
                            <button className="d-inline btn btn-danger ms-auto" onClick={()=>removeTodo(idx)}>Remove</button>
                        </li>)

                    })
                    
                    }
                </ul>
                :
                <div className="text-center">
                    <h2>
                    No Todos , You Are Free
                    </h2>
                </div>
            }
        </div>

        </>
    )
 
}

export default TodoList;