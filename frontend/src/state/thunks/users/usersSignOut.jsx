import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSignOut = createAsyncThunk(
  'users/signout',
  async (data, thunkAPI) => {
    var { user, controller } = data || {};
    controller ??= new AbortController();
    try {
      const response = await axios({
        url: 'http://localhost:3000/users/signout',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'delete',
        withCredentials: true,
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
