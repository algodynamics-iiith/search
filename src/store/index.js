import { configureStore } from "@reduxjs/toolkit";
import binarySearch from "./slices/binarySearch";
import linearSearch from "./slices/linearSearch";
import randomSearchWithoutReplacement from "./slices/randomSearchWithoutReplacement";
import randomSearchWithReplacement from "./slices/randomSearchWithReplacement";

export default configureStore({
  reducer: {
    randomSearchWithReplacement,
    randomSearchWithoutReplacement,
    linearSearch,
    binarySearch,
  },
});
