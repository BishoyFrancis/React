import { createSlice } from "@reduxjs/toolkit";


//INITIAL STATE
const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodoSliceAction : (state,action) =>{
            state.todos.push(action.payload);

        },

        deleteTodoSliceAction : (state,action)=>{
            state.todos = state.todos.filter((item , index) => index !== action.payload)
        }
    }
})

export const {addTodoSliceAction , deleteTodoSliceAction} = todoSlice.actions;
export const {deleteTodo} = todoSlice.actions;
export const todoSliceReducer = todoSlice.reducer;