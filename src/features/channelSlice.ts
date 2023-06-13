import { createSlice } from "@reduxjs/toolkit";
import { InitialChannelState } from "../Type";

const initialState: InitialChannelState = {
    channelId: null,
    channelName: null,
};

export const channelSlice = createSlice({
    name: "channel",
    initialState: initialState,//プロパティと変数名が同じ場合省略可能　=> initialState,でok
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelId = action.payload.channelId;
            state.channelName = action.payload.channelName;
        },

    },
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;