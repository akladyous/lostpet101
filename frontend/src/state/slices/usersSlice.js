import {
    createSlice,
    isPending,
    isRejected,
    isFulfilled,
} from '@reduxjs/toolkit';
import { usersSignUp } from '../thunks/users/usersSignUp.js';
import { usersSignOut } from '../thunks/users/usersSignOut.js';
import { usersSignIn } from '../thunks/users/usersSignIn.js';

const isPendingAction = isPending(usersSignUp, usersSignIn, usersSignOut);
const isRejectedAction = isRejected(usersSignUp, usersSignIn, usersSignOut);
const isFulfilledAction = isFulfilled(usersSignUp, usersSignIn, usersSignOut);

const initialState = {
    isAuthenticated: false,
    user: null,
    status: 'idle', // idle | loading | succeeded | failed
};
const usersSlice = createSlice({
    name: 'users',
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(usersSignUp.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.message = 'Account successfully created';
                state.user = { ...action.payload };
                state.error = {};
            })
            .addCase(usersSignIn.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = { ...action.payload };
            })
            .addCase(usersSignOut.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = { ...action.payload };
            })
            .addMatcher(isPendingAction, (state) => {
                state.status = 'loading';
            })
            .addMatcher(isFulfilledAction, (state) => {
                state.status = 'succeeded';
            })
            .addMatcher(isRejectedAction, (state, action) => {
                state.status = 'faild';
            });
    },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
