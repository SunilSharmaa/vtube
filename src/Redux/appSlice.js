import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    addIsSideBarOpen: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
  }
});

export const { addIsSideBarOpen } = appSlice.actions;
export default appSlice.reducer;
