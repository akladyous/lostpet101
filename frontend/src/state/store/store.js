import { configureStore } from '@reduxjs/toolkit';
import { saveState, loadState } from './localStorage.js';
import usersSlice, {
    initialState as userInitialState,
} from '../slices/usersSlice.js';

export const store = configureStore({
    reducer: {
        users: usersSlice,
    },
    preloadedState: {
        users: loadState()?.users || userInitialState,
    },
});
