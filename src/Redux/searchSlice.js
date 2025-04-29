import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchCache",
    initialState : {},
    reducers : {
        addSearchCache:(state,action)=> {
            const newObj = {...action.payload, ...state};
            return newObj;
    }
}
})

export const {addSearchCache} = searchSlice.actions;
export default searchSlice.reducer;