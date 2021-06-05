import { createSlice } from "@reduxjs/toolkit";
import * as utils from "../../utils";

const data = utils.generateRandomListAndTarget();

const slice = createSlice({
  name: "linearSearch",
  initialState: {
    list: data[0],
    target: data[1],
    activeIndex: -1,
    message: `You need to search for the number ${data[1]} in the given list of numbers`,
  },
  reducers: {
    next: (state, action) => {
      const index = state.activeIndex + 1;
      state.activeIndex = index;
      if (state.list[index] !== state.target) {
        state.message = `The item at index ${index} has number ${state.list[index]}.
        It does not match the search target of ${state.target}.`;
      } else {
        state.message = `Search Target found at index ${index} of the List.`;
      }
    },
    reset: (state, action) => {
      state.activeIndex = -1;
      state.message = `You need to search for the number ${state.target} in the given list of numbers`;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
