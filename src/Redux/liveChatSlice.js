import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        message : []
    },
    reducers: {
        addChatMessage :(state, action) => {
            state.message.splice(25,1);
            state.message.unshift(action.payload);
        }
    }
})

export const {addChatMessage} = liveChatSlice.actions;
export default liveChatSlice.reducer;