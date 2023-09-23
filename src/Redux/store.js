// this store.js is used to keep multiple reducers together.

import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/Authslice'
import courseSliceReducer from "./Slices/CourseSlice";

// creating store
const store = configureStore({
    reducer:{
        auth : authSliceReducer,
        course:courseSliceReducer
    },
    devTools:true
});

export default store;