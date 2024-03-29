import { createAsyncThunk } from '@reduxjs/toolkit';
import { Axios } from '../../../lib/api/Axios.jsx';

export const usersSignUp = createAsyncThunk(
  'users/signup',
  async (data, thunkAPI) => {
    var { formData, controller } = data;
    controller ??= new AbortController();

    try {
      const response = await Axios.request({
        method: 'post',
        url: 'users/signup',
        headers: { 'content-type': 'multipart/form-data' },
        data: formData,
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
