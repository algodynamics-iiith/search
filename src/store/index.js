import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import binarySearch from "./slices/binarySearch";
import linearSearch from "./slices/linearSearch";
import randomSearchWithoutReplacement from "./slices/randomSearchWithoutReplacement";
import randomSearchWithReplacement from "./slices/randomSearchWithReplacement";
import ui from "./slices/ui";
import { analyticsLogger } from "./middleware/analytics";

export default configureStore({
  reducer: {
    ui,
    randomSearchWithReplacement,
    randomSearchWithoutReplacement,
    linearSearch,
    binarySearch,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(analyticsLogger),
});
