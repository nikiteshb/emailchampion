import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState:{
        data:null
    },
    reducers:{
        user:(state,action) => {
            state.data = action.payload
        }        
        }
})


export const {user} = UserSlice.actions;
export default UserSlice.reducer