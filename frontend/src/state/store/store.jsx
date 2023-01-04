import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.jsx';
import usersSlice, {
  initialState as userInitialState,
} from '../slices/usersSlice.jsx';
import { authSlice } from '../api/authSlice.js';
import { reportsSlice } from '../api/reportsSlice.js';
import { requestSlice } from '../api/requestSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [authSlice.reducerPath]: authSlice.reducer,
    [requestSlice.reducerPath]: requestSlice.reducer,
    [reportsSlice.reducerPath]: reportsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authSlice.middleware,
      requestSlice.middleware,
      reportsSlice.middleware
    ),

  preloadedState: {
    users: loadState()?.users || userInitialState,
  },
});
