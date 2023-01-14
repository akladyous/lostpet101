import { configureStore } from '@reduxjs/toolkit';
import { loadState } from './localStorage.jsx';
import usersSlice, {
  initialState as userInitialState,
} from '../slices/usersSlice.jsx';

import { api } from '../api/api.js';
import { auth } from '../api/authSlice.js';
import { request } from '../api/requestSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, request.middleware),

  preloadedState: {
    users: loadState()?.users || userInitialState,
  },
});
