// this store.js is used to keep multiple reducers together.

import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/Authslice'

const store = configureStore({
    reducer:{
        auth : authSliceReducer
    },
    devTools:true
});

export default store;