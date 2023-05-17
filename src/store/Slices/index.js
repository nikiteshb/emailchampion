import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import ContactSlice from "./ContactSlice";
import AuthSlice from "./AuthSlice";


const store = configureStore({
    reducer:{
        auth:AuthSlice,
        users: UserSlice,
        contacts:ContactSlice
    },
    devTools:true,

})

export default store