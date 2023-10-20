// this store.js is used to keep multiple reducers together.

import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/Authslice'
import courseSliceReducer from "./Slices/CourseSlice";
import razorpaySliceReducer from './Slices/RazorpaySlice';

// creating store
const store = configureStore({
    reducer:{
        auth : authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
    },
    devTools:true
});

export default store;