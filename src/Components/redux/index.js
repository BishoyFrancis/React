import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from './config';
import { todoSlice } from './features/TodoSlice';



console.log("TODO SLICE:" ,todoSlice)
export const store = configureStore(
    
    {
        reducer:todoSlice.reducer
    });