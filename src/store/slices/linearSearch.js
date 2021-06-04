import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "linearSearch",
  initialState: {
    list: [],
    target: 0,
    activeIndex: 0,
  },
  reducers: {},
});

export const actions = slice.actions;
export default slice.reducer;
