import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isloading : false,
    err: {}
};

const baseURL = 'https://fakestoreapi.com'; 


//CreateAsyncThunk(TYPE,CALLBACK FUNCTION(REQUEST))
//TYPE: /name/
export const getProducts = createAsyncThunk('shop/getProducts', async ()=>{
    return await fetch(`${baseURL}/products`)
    .then(res=>res.json())
    .then((json) => json)
    .catch(err=>console.log(err))
})


const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{},
    extraReducers:{
        [getProducts.pending] : (state) => {
            //PENDING
            state.isloading = true;
        },
        [getProducts.fulfilled] : (state,action) => {
            //FULFILLED
            state.products = action.payload;
            state.isloading = false;
        },
        [getProducts.rejected] : (state , action) => {
            //REJECTED
            state.err = action.payload;
        }
    }
})


export const shopSliceReducer = shopSlice.reducer;