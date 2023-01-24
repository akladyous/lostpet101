import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSignIn = createAsyncThunk(
  'users/signin',
  async (formData, thunkAPI) => {
    var { user, controller } = formData;
    controller ??= new AbortController();
    try {
      const response = await axios({
        url: 'http://localhost:3000/users/signin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        data: user,
        method: 'post',
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
