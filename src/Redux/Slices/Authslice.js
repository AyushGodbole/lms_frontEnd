// Slices take name of slice , initial state , reducers of that slice which can be used anywhere
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from '../../Helper/axiosInstance'
 
const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn')||false,
    role : localStorage.getItem('role')||"",
    data : localStorage.getItem('data')||{}
}

export const createUserAccount = createAsyncThunk('/auth/signup',async (data)=>{
    try {
        const res = axiosInstance.post('/user/register',data);

        toast.promise(res,{
            loading:'wait! creating your account',
            success:(data)=>{
                return data?.data?.message;
            },
            error:'failed to create account'
        })

        return (await res).data

    } catch (error) {
        toast.error(error?.response?.message);
    }
});

export const login = createAsyncThunk('/auth/login',async (data)=>{
    try {
        const res = axiosInstance.post('/user/login',data);

        toast.promise(res,{
            loading:'wait! authentication in process',
            success:(data)=>{
                return data?.data?.message;
            },
            error:'failed to create login!'
        })

        return (await res).data

    } catch (error) {
        toast.error(error?.response?.message);
    }
})

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.fulfilled,(state,action)=>{
            localStorage.setItem('data',action?.payload?.data);
            localStorage.setItem('isLoggedIn',true);
            localStorage.setItem('role',action?.payload?.user?.role);
            state.data=action?.payload?.data;
            state.isLoggedIn=true
            state.role=action?.payload?.user?.role
        })
    }
})

// export const {} = authSlice.actions;
export default authSlice.reducer;