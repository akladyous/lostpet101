import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../../../lib/api/Axios.js';

export const usersSignOut = createAsyncThunk(
    'users/signout',
    async (data, thunkAPI) => {
        var { user, controller } = data || {};
        controller ??= new AbortController();
        try {
            const response = await Axios({
                method: 'delete',
                url: 'users/signout',
                signal: controller.signal,
            });
            return thunkAPI.fulfillWithValue(await response.data);
        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else {
                return thunkAPI.rejectWithValue({ message: error.message });
            }
        }
    }
);
