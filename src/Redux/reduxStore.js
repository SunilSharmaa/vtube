import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSliceReducer from "./searchSlice";

const reduxStore = configureStore({
  reducer: {
    appStore: appSliceReducer,
    searchStore: searchSliceReducer,
  }
});

export default reduxStore;
