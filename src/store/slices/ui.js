import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui",
  initialState: {
    selectedTab: "home",
    showSubmitModal: false,
    showAnalyticsModal: false,
  },
  reducers: {
    setSelectedTab: (state, action) => {
      const { tabKey } = action.payload;
      state.selectedTab = tabKey;
    },
    setShowSubmitModal: (state, action) => {
      state.showSubmitModal = action.payload;
    },
    setShowAnalyticsModal: (state, action) => {
      state.showAnalyticsModal = action.payload;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
