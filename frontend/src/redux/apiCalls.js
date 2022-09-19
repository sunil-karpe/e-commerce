import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login=async(dispatch,user)=>{
    
    dispatch(loginStart());

    try {
        const res=await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        let errorMsg=error.response.data.error
        console.log(errorMsg)
        dispatch(loginFailure(errorMsg))
    }
}


export const register=async(dispatch,user)=>{
   
    

    try {
        alert("register started");
        const res=await publicRequest.post("/auth/register",user);
        console.log(res.data);

        if(res&&res.data!==null){
           login(dispatch,{"username":user.username,"password": user.password});
        
        }
        alert("registerd")


    } catch (error) {
        console.log(error)
        
    }
}

