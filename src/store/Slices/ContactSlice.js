import { createSlice } from "@reduxjs/toolkit";


const ContactSlice = createSlice({
    name:"contact",
    initialState:[],
    reducers:{
        addContact:(state,action) => {},
        deleteContact:(state,action) =>{}
    }
})

export default ContactSlice.reducer