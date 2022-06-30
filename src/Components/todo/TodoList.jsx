import {useDispatch , useSelector} from "react-redux"
import { deleteTodoAction } from "../redux";




const TodoList = ()=>{
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log("todos",todos);

    const removeTodo = (idx) =>{
        dispatch(deleteTodoAction(idx));
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
                            <hr />
                            <p>{todo.description}</p>
                            <button className="d-inline btn btn-danger ms-auto" onClick={()=>removeTodo(idx)}>Remove</button>
                        </li>)

                    })
                    
                    }
                </ul>
                :
                <div></div>
            }
        </div>

        </>
    )
 
}

export default TodoList;