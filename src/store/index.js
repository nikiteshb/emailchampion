import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import ContactSlice from "./Slices/ContactSlice";
import AuthSlice from "./Slices/AuthSlice";


const store = configureStore({
    reducer:{
        auth:AuthSlice,
        users: UserSlice,
        contacts:ContactSlice
    },
    devTools:true,

})

// function saveToLocalStorage(state) {
//     try {
//       const serialisedState = JSON.stringify(state);
//     //   console.log(serialisedState);
//       localStorage.setItem("persistantState", serialisedState);
//     } catch (e) {
//       console.warn(e);
//     }
//   }

//   function loadFromLocalStorage() {
//     try {
//       const serialisedState = localStorage.getItem("persistantState");
//       if (serialisedState === null) return undefined;
//       return JSON.parse(serialisedState);
//     } catch (e) {
//       console.warn(e);
//       return undefined;
//     }
//   }

// store.subscribe(() => saveToLocalStorage(store.getState()));
export default store