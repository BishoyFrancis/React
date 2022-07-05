import {configureStore} from '@reduxjs/toolkit'
import { todoSliceReducer } from './features/TodoSlice';
import { counterSliceReducer } from './features/CounterSlice';
import { shopSliceReducer } from './features/ShopSlice';


console.log('shopSliceReducer',shopSliceReducer);


export const store = configureStore(
    
    {
        reducer:{
            todo:todoSliceReducer,
            counter:counterSliceReducer,
            shop:shopSliceReducer
        }
    });