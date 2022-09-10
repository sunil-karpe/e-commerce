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
        },
        decrementQuantity:(state,action)=>{
            
            state.products.map((product,i)=>{

                if(product._id===action.payload._id){
                   
                    product.quantity--;
                    state.quantity--;
                    state.total-=product.price;
                  
                    // state.total=0;
                    // state.quantity=0;
                }
               
                
            })
        },
        incrementQuantity:(state,action)=>{
            
            state.products.map((product,i)=>{

                if(product._id===action.payload._id){
                   
                    product.quantity++;
                    state.quantity++;
                    state.total+=product.price;
                }
               
                
                
            })
        },
        removeItem:(state,action)=>{
            
            state.products=state.products.filter((product)=>product._id!==action.payload._id)
        },
    }

})


export const {addProduct,incrementQuantity,decrementQuantity,removeItem} =cartSlice.actions
export default cartSlice.reducer