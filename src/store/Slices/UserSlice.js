import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        addUser:(state,action) => {},
        deleteUser:(state,action) =>{},
        userLogin:(state,action)=>{
           
        }
    }
})


export default UserSlice.reducer

export const {userLogin} = UserSlice.actions;