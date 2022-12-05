import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../freatures/usersSlice.js";
export const store = configureStore({
    reducer: {
        users: usersSlice,
    }
});
