/* eslint-disable no-undef */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../../../lib/api/Axios.jsx';
// import axios from 'axios';
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const usersSignIn = createAsyncThunk(
  'users/signin',
  async (formData, thunkAPI) => {
    var { user, controller } = formData;
    controller ??= new AbortController();
    try {
      const response = await Axios.post('/users/signin', user, {
        signal: controller.signal,
      });

      // const response = await axios({
      //   url: '/users/signin',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   data: user,
      //   method: 'post',
      //   withCredentials: true,
      //   signal: controller.signal,
      // });
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
