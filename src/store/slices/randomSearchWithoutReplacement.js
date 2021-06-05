import { createSlice } from "@reduxjs/toolkit";
import * as utils from "../../utils";

let data = utils.generateRandomListAndTarget();

const slice = createSlice({
  name: "randomSearchWithoutReplacement",
  initialState: {
    list: data[0],
    target: data[1],
    activeIndices: [],
    message: `You need to search for the number ${data[1]} in the given list of numbers`,
  },
  reducers: {
    select: (state, action) => {
      const index = action.payload;
      if (state.activeIndices.includes(index)) {
        state.message = `The item at index ${index} has number ${state.list[index]}. It has already been selected.`;
        return;
      }
      state.activeIndices.push(index);
      if (state.list[index] !== state.target) {
        state.message = `The item at index ${index} has number ${state.list[index]}.
        It does not match the search target of ${state.target}.
        Please search other indices.`;
      } else {
        state.message = `Search Target found at index ${index} of the List.`;
      }
    },
    reset: (state, action) => {
      state.activeIndices = [];
      state.message = `You need to search for the number ${state.target} in the given list of numbers`;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
