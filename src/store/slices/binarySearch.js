import { createSlice } from "@reduxjs/toolkit";
import * as utils from "../../utils";

const slice = createSlice({
  name: "binarySearch",
  initialState: {
    list: [],
    target: 0,
    activeIndices: [],
    blockedIndices: [],
    message: "",
  },
  reducers: {
    init: (state, action) => {
      const { list, target } = action.payload;
      state.list = list;
      state.target = target;
      state.activeIndices = [];
      state.blockedIndices = [];
      state.message = `You need to search for the number ${state.target} in the given list of numbers`;
    },
    select: (state, action) => {
      const index = action.payload;
      if (
        state.activeIndices.includes(index) ||
        state.blockedIndices.includes(index)
      ) {
        return;
      }
      state.activeIndices.push(index);
      if (state.list[index] < state.target) {
        state.message = `The item at index ${index} has number ${state.list[index]}.
        It is less than ${state.target} (Search Target).
        search number in Right sublist.`;
        for (let i = 0; i < index; i++) {
          if (state.activeIndices.includes(i)) {
            continue;
          }
          state.blockedIndices.push(i);
        }
      } else if (state.list[index] > state.target) {
        state.message = `The item at index ${index} has number ${state.list[index]}.
        It is greater than ${state.target} (Search Target).
        search number in Left sublist.`;
        for (let i = index + 1; i < state.list.length; i++) {
          if (state.activeIndices.includes(i)) {
            continue;
          }
          state.blockedIndices.push(i);
        }
      } else {
        for (let i = 0; i < state.list.length; i++) {
          if (state.activeIndices.includes(i)) {
            continue;
          }
          state.blockedIndices.push(i);
        }
        state.message = `Search Target found at index ${index} of the List.`;
      }
    },
    showAll: (state, action) => {
      state.blockedIndices = [];
      state.activeIndices = [];
      for (let i = 0; i < state.list.length; i++) {
        state.activeIndices.push(i);
      }
    },
    reset: (state, action) => {
      state.activeIndices = [];
      state.blockedIndices = [];
      state.message = `You need to search for the number ${state.target} in the given list of numbers`;
    },
  },
});

export const actions = slice.actions;
export default slice.reducer;
