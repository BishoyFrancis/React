import {createStore} from 'redux'

//ACTION STRING VARIABLES

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"

//ACTIONS

export const addTodoAction = (payload) =>{
    return {
        type:ADD_TODO,
        payload
    }
}

export const deleteTodoAction = (payload) =>{
    return {
        type:DELETE_TODO,
        payload
    }
}

//INITIAL STATE
const initialState = {
    todos:[]
}

//REDUCER
const todoReducer = (state = initialState,action) => {
if(action.type === "ADD_TODO"){
    //add todo to the state
    return{...state , todos:[...state.todos,action.payload]}
}
if(action.type === "DELETE_TODO"){
    return {...state , todos:[...state.todos.filter((item,idx)=>{return idx !== action.payload})]}
}
return state;
}


//STORE

export const store = createStore(todoReducer);