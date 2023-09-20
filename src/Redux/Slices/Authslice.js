// Slices take name of slice , initial state , reducers of that slice which can be used anywhere
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn')||false,
    role : localStorage.getItem('role')||"",
    data : localStorage.getItem('data')||{}
}

const authSlice = createSlice({
    name:'slice',
    initialState,
    reducers:{},
})

// export const {} = authSlice.actions;
export default authSlice.reducer;