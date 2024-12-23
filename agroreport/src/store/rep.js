import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";

export const GetAllRep = createAsyncThunk("/report", async ({id}) => {
  console.log(id)
  const t = await instance.get(`/report/${id}`);
  return t; 
});



const initialState = {
  rep: {
    repData: {
      items: [],
      status: "idle",
    },
  },
};

const repSlice = createSlice({
  name: "rep",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllRep.pending, (state) => {
        state.rep.repData.items = [];
        state.rep.repData.status = "loading";
      })
      .addCase(GetAllRep.fulfilled, (state, action) => {
        console.log(action)
        state.rep.repData.items = action.payload.data;
        state.rep.repData.status = "fulfilled";
      })
      .addCase(GetAllRep.rejected, (state) => {
        state.rep.repData.status = "error";
      })
  },
});

export const RepSlice = repSlice.reducer;
