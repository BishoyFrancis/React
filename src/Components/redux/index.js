import {configureStore} from '@reduxjs/toolkit'
import { todoSliceReducer } from './features/TodoSlice';
import { counterSliceReducer } from './features/CounterSlice';




export const store = configureStore(
    
    {
        reducer:{
            todo:todoSliceReducer,
            counter:counterSliceReducer
        }
    });