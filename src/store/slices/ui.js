import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    showSubmitModal: true,
  },
  reducers: {
    setShowSubmitModal: (state, action) => {
      state.showSubmitModal = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
