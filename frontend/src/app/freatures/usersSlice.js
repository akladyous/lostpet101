import {
    createSlice,
    isPending,
    isRejected,
    isFulfilled,
} from "@reduxjs/toolkit";
import { usersSignIn } from "../api/ThunkAPI/users/usersSignIn.js";
import { usersSignUp } from "../api/ThunkAPI/users/usersSignUp.js";

const isPendingAction = isPending(usersSignIn);
const isRejectedAction = isRejected(usersSignIn);
const isFulfilledAction = isFulfilled(usersSignIn);

const initialState = {
    isAuthenticated: false,
    user: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
    message: null,
};
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...action.payload };
        },
        resetUser: (state, action) => {
            state.user = null;
        },
        resetState: () => {
            return { ...initialState };
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            // .addCase(usersSignIn.fulfilled, (state, action) => {
            //     state.isAuthenticated = true;
            //     state.message = "login successfully completed";
            //     state.user = { ...action.payload };
            // })
            .addCase(usersSignUp.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.message = "Account successfully created";
                state.user = { ...action.payload };
            })
            .addMatcher(isPendingAction, state => {
                state.status = 'loading'
            })
            .addMatcher(isFulfilledAction, state => {
                state.status = 'succeeded'
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.status = 'faild'
                state.error = action.payload;
            })
    },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
