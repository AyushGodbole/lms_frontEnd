import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helper/axiosInstance"

const initialState = {
    lecture:[],
}

export const getCourseLecture = createAsyncThunk('/course/lecture/get', async(cid)=>{
    try {
        const response = await axiosInstance.get(`/course/:${cid}`);

        toast.promise(response,{
            loading:'Fetching Course Lectures',
            success: 'Lectures Fetched Successfully',
            error: 'Failed to Fetch Lectures'
        });

        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


export const addCourseLecture = createAsyncThunk('/course/lecture/add', async(data)=>{

    const formData = new FormData();
    formData.append('lecture',data.lecture);
    formData.append('title',data.title);
    formData.append('description',data.description);

    try {
        const response = await axiosInstance.post(`/course/:${data.id}`,formData);

        toast.promise(response,{
            loading:'Adding Course Lecture',
            success: 'Lecture Added Successfully',
            error: 'Failed to Add Lecture'
        });

        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const deleteCourseLecture = createAsyncThunk('/course/lecture/delete', async(data)=>{

    try {
        const response = await axiosInstance.delete(`/course?courseId=${data.courseId}&lectureId=${data.lectureId}`);

        toast.promise(response,{
            loading:'Deleting Course Lecture',
            success: 'Lecture Deleted Successfully',
            error: 'Failed to Delete Lecture'
        });

        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const lectureSlice = createSlice({
    name:'lecture',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLecture.fulfilled,(state,action)=>{
            console.log(action);
            state.lecture = action?.payload?.lecturesfound;
        })
        .addCase(addCourseLecture.fulfilled,(state,action)=>{
            console.log(action);
            state.lecture = action?.payload?.lectureData
        })
    }
})

export default lectureSlice.reducer;