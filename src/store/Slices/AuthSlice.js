import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:false,
        userid:null,
        name:null
    },
    reducers:{
        login:(state,action) =>{ 
            state.isLoggedIn = true;
            state.userid = action.payload.id;
            state.name = action.payload.name
        },
        logout:(state) =>{
            state.isLoggedIn = false;
        }
    }
})


export const { login,logout } = AuthSlice.actions;

export default AuthSlice.reducer;