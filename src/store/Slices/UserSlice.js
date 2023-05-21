import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name:"user",
    initialState:{},
    reducers:{
        user:(state,action) => {
            state.data = action.payload
        }
        }
})


export default UserSlice.reducer
export const {user} = UserSlice.actions;