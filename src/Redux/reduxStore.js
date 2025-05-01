import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice";
import searchSliceReducer from "./searchSlice";
import liveChatReducer from "./liveChatSlice";

const reduxStore = configureStore({
  reducer: {
    appStore: appSliceReducer,
    searchStore: searchSliceReducer,
    liveChatStore: liveChatReducer,
  }
});

export default reduxStore;
