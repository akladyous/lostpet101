import {
    createSlice,
    isPending,
    isRejected,
    isFulfilled,
} from "@reduxjs/toolkit";
import { usersSignUp } from "../api/ThunkAPI/users/usersSignUp.js";
import { usersSignOut } from "../api/ThunkAPI/users/usersSignOut.js";
import { usersSignIn } from '../api/ThunkAPI/users/usersSignIn.js'

const isPendingAction = isPending(usersSignUp, usersSignIn, usersSignOut);
const isRejectedAction = isRejected(usersSignUp, usersSignIn, usersSignOut);
const isFulfilledAction = isFulfilled(usersSignUp, usersSignIn, usersSignOut);

const initialState = {
    isAuthenticated: false,
    user: undefined,
    status: "idle", // idle | loading | succeeded | failed
    error: {},
    message: undefined,
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
            .addCase(usersSignUp.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.message = "Account successfully created";
                state.user = { ...action.payload };
            })
            .addCase(usersSignIn.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.message = "login successfully completed";
                state.user = { ...action.payload };
            })
            .addCase(usersSignOut.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.message = "login successfully completed";
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
                state.error = (() => {
                    let errorsParsed;
                    try {
                        errorsParsed = JSON.parse(action.payload)
                    } catch (error) {
                        errorsParsed = null
                    }
                    return errorsParsed
                })()
            })
    },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
