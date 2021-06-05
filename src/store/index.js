import { configureStore } from "@reduxjs/toolkit";
import binarySearch from "./slices/binarySearch";
import linearSearch from "./slices/linearSearch";
import randomSearchWithoutReplacement from "./slices/randomSearchWithoutReplacement";
import randomSearchWithReplacement from "./slices/randomSearchWithReplacement";
import ui from "./slices/ui";

export default configureStore({
  reducer: {
    ui,
    randomSearchWithReplacement,
    randomSearchWithoutReplacement,
    linearSearch,
    binarySearch,
  },
});
