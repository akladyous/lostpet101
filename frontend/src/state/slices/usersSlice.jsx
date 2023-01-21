import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
} from '@reduxjs/toolkit';
import { usersSignUp } from '../thunks/users/usersSignUp.jsx';
import { usersSignOut } from '../thunks/users/usersSignOut.jsx';
import { usersSignIn } from '../thunks/users/usersSignIn.jsx';

const isPendingAction = isPending(usersSignUp, usersSignIn, usersSignOut);
const isRejectedAction = isRejected(usersSignUp, usersSignIn, usersSignOut);
const isFulfilledAction = isFulfilled(usersSignUp, usersSignIn, usersSignOut);

export const initialState = {
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
    resetUser: (state) => {
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
        state.user = { ...action.payload };
      })
      .addCase(usersSignIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = { ...action.payload };
      })
      .addCase(usersSignOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addMatcher(isPendingAction, (state) => {
        state.status = 'loading';
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.status = 'succeeded';
      })
      .addMatcher(isRejectedAction, (state) => {
        state.status = 'faild';
      });
  },
});
export const userState = (state) => state.users;
export const userActions = usersSlice.actions;
export default usersSlice.reducer;
