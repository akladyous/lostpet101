import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSignUp = createAsyncThunk(
  'users/signup',
  async (data, thunkAPI) => {
    var { formData, controller } = data;
    controller ??= new AbortController();

    try {
      const response = await axios({
        url: 'http://localhost:3000/users/signup',
        headers: {
          Accept: 'application/json',
          'content-type': 'multipart/form-data',
        },
        data: formData,
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
