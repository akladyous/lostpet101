import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../../Axios.js';

export const usersSignUp = createAsyncThunk(
    'users/signup',
    async (data, thunkAPI) => {
        var { user, controller } = data;
        controller ??= new AbortController();
        try {
            const response = await Axios({
                method: 'post',
                url: 'users/signup',
                data: user,
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
