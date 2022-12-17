import { configureStore } from "@reduxjs/toolkit";
import { loadState } from "./localStorage.jsx";
import usersSlice, {
    initialState as userInitialState,
} from "../slices/usersSlice.jsx";

export const store = configureStore({
    reducer: {
        users: usersSlice,
    },
    preloadedState: {
        users: loadState()?.users || userInitialState,
    },
});
