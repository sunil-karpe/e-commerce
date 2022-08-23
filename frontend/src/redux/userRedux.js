import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        errorMsg:""

    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.currentUser = action.payload


        },
        loginFailure: (state,action) => {

            state.isFetching=false
            state.error=true
            state.errorMsg=action.payload

        },
        logout:(state)=>{
            state.currentUser=null;
        },
    }

})

export const {loginStart,loginFailure,loginSuccess,logout } = userSlice.actions;
export default userSlice.reducer;