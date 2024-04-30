import axios from "axios";
import { AUTHENTICATE_USER_URL } from "../../api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getToken = createAsyncThunk(
  'user/getToken', 
  async(userData) => {
    const response = await axios.post(AUTHENTICATE_USER_URL,userData);
    console.log('getToken',response);
    return response?.data;
  }
);

const initialState = {
  loadingToken: false,
  token: "",
  tokenError: null, 
}

const tokenSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(getToken.pending , (state) => {
      state.loadingToken = true;
    })
    .addCase(getToken.fulfilled, (state,action) => {
      state.loadingToken = false;
      state.token = action.payload;
      state.tokenError = null;
    })
    .addCase(getToken.rejected, (state,action) => {
      state.loadingToken = false;
      state.token = "";
      state.tokenError = action.error?.message;
    })
    .addDefaultCase((state)=>{
      return state;
    });
  },
})

export default tokenSlice.reducer;