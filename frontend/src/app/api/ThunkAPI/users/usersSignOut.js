import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "../../Axios.js";

export const usersSignOut = createAsyncThunk(
    "users/signout",
    async (data, thunkAPI) => {
        const { user, controller } = data;
        try {
            const response = await Axios({
                method: "post",
                url: "users/signup",
                data: user,
                ...(controller ?? { signal: controller.signal })
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (error) {
            if (error.response) {
                return thunkAPI.rejectWithValue(error.response.data.error);
            } else {
                return thunkAPI.rejectWithValue(error.message);
            }
        }
    }
);
