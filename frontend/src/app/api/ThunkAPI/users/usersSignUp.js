import { createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from '../../Axios.js'

export const usersSignUp = createAsyncThunk(
    'users/signup',
    async (userData, thunkAPI) => {
        debugger
        // const controller = new AbortController()
        thunkAPI.signal.addEventListener('abort', () => {
            console.log('aborted by ThnunkAPI signal')
        })
        try {
            const response = await Axios.post({ data: userData, signal: thunkAPI.signal })
            thunkAPI.fulfillWithValue(response)
        } catch (error) {
            if (error.response) {
                thunkAPI.rejectWithValue(error.response.data.error)
            } else {
                thunkAPI.rejectWithValue(error.message)
            }
        } finally {
            thunkAPI.abort();
        }
    }
)
createAsyncThunk('')
