import { createSlice } from "@reduxjs/toolkit";
import { InitialUserState } from "../Type";

const initialState: InitialUserState = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,//プロパティと変数名が同じ場合省略可能　=> initialState,でok
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});
// console.log(userSlice);

export default userSlice.reducer;