/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const usersSignUp = createAsyncThunk(
  'users/signup',
  async (data, thunkAPI) => {
    var { formData, controller } = data;
    controller ??= new AbortController();

    try {
      const response = await axios({
        url: '/users/signup',
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
