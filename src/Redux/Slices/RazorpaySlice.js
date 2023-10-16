import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helper/axiosInstance"
import toast from "react-hot-toast";
import { data } from "autoprefixer";

const initialState = {
    key:"",
    subscription_id:"",
    isPaymentVerified:false,
    allPayments:{},
    finalMonth:{},
    monthlySalesRecord:[]
}

export const getRazorpayId = createAsyncThunk('/razorpay/getId',async ()=>{
    try {
        const response = await axiosInstance.get('/payments/getRazorpayApiKey');
        return response.data;
    } catch (error) {
        toast.error('Failed to load Data!');
    }
})

export const purchaseCourseBundle = createAsyncThunk('purchaseCourse',async ()=>{
    try {
        const response = await axiosInstance.post('/payments/subscribe');
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const verifyPayment = createAsyncThunk('payment/verify',async (data)=>{
    try {
        const response = await axiosInstance.post('/payments/subscribe',{
            razorpay_payment_id : data.razorpay_payment_id,
            razorpay_subscription_id : data.razorpay_subscription_id,
            razorpay_signature : data.razorpay_signature
        });
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const getPaymentRecord = createAsyncThunk('payment/record',async ()=>{
    try {
        const response =  axiosInstance.get('/payments?count=100');
        toast.promise(response,{
            loading:'getting payment record',
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to get payment records!",
            // continue from 7 minutes
        })
        return (await response).data
    } catch (error) {
        toast.error("Operation Failed!");
    }
})

export const cancelCourseBundle = createAsyncThunk('payment/cancel',async ()=>{
    try {
        const response =  axiosInstance.post('/payments/unsubscribe');
        toast.promise(response,{
            loading:'unsubscribing please wait!',
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to unsubscribe!",
            // continue from 7 minutes
        })
        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const razorpaySlice = createSlice({
    name:'razorpay',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getRazorpayId.fulfilled,(state,action)=>{
            state.key = action?.payload?.key;
        })
        .addCase(purchaseCourseBundle.fulfilled,(state,action)=>{
            state.subscription_id = action?.payload?.subscription_id
        })
        .addCase(verifyPayment.fulfilled,(state,action)=>{
            toast.success(action?.payload?.message);
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(verifyPayment.rejected,(state,action)=>{
            toast.success(action?.payload?.message);
            state.isPaymentVerified = action?.payload?.success;
        })
        .addCase(getPaymentRecord.fulfilled,(state,action)=>{
            state.allPayments = action?.payload?.allPayments;
            state.finalMonth = action?.payload?.finalMonth;
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
        })
    }
})