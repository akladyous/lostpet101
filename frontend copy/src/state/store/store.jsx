import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.jsx';
import usersSlice, {
  initialState as userInitialState,
} from '../slices/usersSlice.jsx';
import { authSlice } from '../api/authSlice.js';
import { requestSlice } from '../api/requestSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [authSlice.reducerPath]: authSlice.reducer,
    [requestSlice.reducerPath]: requestSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authSlice.middleware,
      requestSlice.middleware
    ),

  preloadedState: {
    users: loadState()?.users || userInitialState,
  },
});
