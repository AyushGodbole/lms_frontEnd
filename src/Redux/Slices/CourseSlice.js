import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helper/axiosInstance";

const initialState = {
    courseData:[],
}

export const getAllCourses = createAsyncThunk('/course/get',async()=>{
    try {
        const response = axiosInstance.get('/course');
        toast.promise(response,{
            loading:'loading course data...',
            success:'course loaded successfully',
            error:'failed to fetch course details!'
        })
        return (await response).data.courses
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const courseSlice = createSlice({
    name:'course',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourses.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.courseData = [...action?.payload];
        })
    }
});

export default courseSlice.reducer;