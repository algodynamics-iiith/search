import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "randomSearchWithoutReplacement",
  initialState: {
    list: [],
    target: 0,
    activeIndices: [],
    message: "",
  },
  reducers: {
    init: (state, action) => {
      const { list, target } = action.payload;
      state.list = list;
      state.target = target;
      state.message = `You need to search for the number ${state.target} in the given list of numbers`;
    },
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
