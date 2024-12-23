import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";

export const GetAllMachines = createAsyncThunk("/getmach", async () => {
  const t = await instance.get("/getmach");
  return t; 
});



const initialState = {
  mach: {
    machData: {
      items: [],
      status: "idle",
    },
  },
};

const machSlice = createSlice({
  name: "mach",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAllMachines.pending, (state) => {
        state.mach.machData.items = [];
        state.mach.machData.status = "loading";
      })
      .addCase(GetAllMachines.fulfilled, (state, action) => {
        console.log(action)
        state.mach.machData.items = action.payload.data.rows;
        state.mach.machData.status = "fulfilled";
      })
      .addCase(GetAllMachines.rejected, (state) => {
        state.mach.machData.status = "error";
      })
  },
});

export const MachSlice = machSlice.reducer;
