import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"Cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
            state.quantity+=1;
            state.total+=action.payload.quantity*action.payload.price;
        }
    }

})

export const {addProduct} =cartSlice.actions;
export default cartSlice.reducer;