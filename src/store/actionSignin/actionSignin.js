import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    const pay={
        user:datos.user,
        token:datos.token
    }
    return {        
        payload:pay,
    }
})


const logout = createAction("logout");

const login = createAsyncThunk("login", async({email,password}) => {
    const credentials = {
        email:email,
        password:password
    }
    
    const response = await axios.post("http://localhost:8080/api/auth/signIn",credentials)
    console.log("Se proceso la solicitud");
    console.log("Response",response.data);
    console.log("Superamos la solicitud de Login");
    
    return response.data
}) //fullfilled,pending,rejected


export {login,setUser,logout};