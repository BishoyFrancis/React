import { createSlice } from "@reduxjs/toolkit";


//INITIAL STATE
const initialState = {
    counter: 0
}
export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        incrementCounterSliceAction: (state)=>{
            state.counter++;
        },
        decrementCounterSliceAction: (state)=>{
            state.counter--;
        }
    }
})


export const {incrementCounterSliceAction , decrementCounterSliceAction} = counterSlice.actions;
export const counterSliceReducer = counterSlice.reducer;