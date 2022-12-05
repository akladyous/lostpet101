import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    user: null,
    status: "idle", // idle | loading | succeeded | failed
    error: "",
    message: "",
}
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...action.payload }
        },
        resetUser: (state, action) => {
            state.user = null;
        },
        resetState: () => {
            return { ...initialState }
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: builder => {

    }
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
