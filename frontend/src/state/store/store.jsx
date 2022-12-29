import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.jsx';
import usersSlice, {
  initialState as userInitialState,
} from '../slices/usersSlice.jsx';
import { authSlice } from '../api/authSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authSlice.middleware),

  preloadedState: {
    users: loadState()?.users || userInitialState,
  },
});
