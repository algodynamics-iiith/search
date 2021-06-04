import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "binarySearch",
  initialState: {
    list: [],
    target: 0,
    activeIndices: [],
    blockedIndices: [],
  },
  reducers: {},
});

export const actions = slice.actions;
export default slice.reducer;
