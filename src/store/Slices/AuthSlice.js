import { createSlice } from "@reduxjs/toolkit";

const localdata = JSON.parse(localStorage.getItem('loggedInUser'));

const initialValues = {
    isLoggedIn:localdata?.id || false,
    userid:localdata?.id || null,
    name:localdata?.name || null
}
const AuthSlice = createSlice({
    name:'auth',
    initialState:initialValues,
    reducers:{
        login:(state,action) =>{ 
            state.isLoggedIn = true;
            state.userid = action.payload.id;
            state.name = action.payload.name
        },
        logout:(state) =>{
            state.isLoggedIn = false;
            localStorage.removeItem('loggedInUser');
        }
    }
})


export const { login,logout } = AuthSlice.actions;

export default AuthSlice.reducer;