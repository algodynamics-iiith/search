import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "randomSearchWithoutReplacement",
  initialState: {
    list: [],
    target: 0,
    activeIndices: [],
  },
  reducers: {},
});

export const actions = slice.actions;
export default slice.reducer;
