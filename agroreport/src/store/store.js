import { configureStore } from "@reduxjs/toolkit";
import {MachSlice} from "./mach"
import { RepSlice } from "./rep";

const store = configureStore({
  reducer: {
    Mach: MachSlice,
    Rep: RepSlice
  }
})

export default store;