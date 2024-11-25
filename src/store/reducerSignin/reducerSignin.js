import { createReducer } from "@reduxjs/toolkit";
import { login, setUser,logout } from "../actionSignin/actionSignin";
import { act } from "react";

const initialState = {  
    loading: false,
    error: false,
    user: null,
    token: null
};

 const reducerSignin = createReducer(initialState,(builder) => {
    builder.addCase(login.fulfilled,(state,action)=>{    
        state.loading = false;
        state.error = false;
        state.user = action.payload.user;
        state.token = action.payload.token
        localStorage.setItem("token", action.payload.token);

    })
    .addCase(login.pending,(state,action)=>{     
        state.loading = true,
        state.error = false,
        state.user = null,
        state.token = null
    })
    .addCase(login.rejected,(state,action)=>{
       
        localStorage.removeItem("token");
        state.loading = false,
        state.error = true,
        state.user = null,
        state.token = null
    })

    .addCase(setUser,(state,action)=>{      
        state.user = action.payload.user,
        state.token = action.payload.token || localStorage.getItem("token") 
        action.payload.token && localStorage.setItem("token", action.payload.token);
    })

    .addCase(logout,(state,action)=>{
        localStorage.removeItem("token");
        state.user = null,
        state.token = null
    })

})

export default reducerSignin;
