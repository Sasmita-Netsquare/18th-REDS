/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as authService from "../../services/authService";
import { clearToken, getToken, saveToken } from "../storageHelper";

interface AuthState {
  user: any;
  token: string | null;
  loading: boolean;
  error: string | null;
}
const initialState: AuthState = {
  user: null,
  token: getToken() || null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/register-admin",
  async (data: authService.RegisterData, thunkAPI) => {
    try {
      return await authService.register(data);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login-admin",
  async (data: authService.LoginData, thunkAPI) => {
    try {
      return await authService.login(data);
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout-admin",
  async (_, thunkAPI) => {
    try {
      await authService.logout();
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        saveToken(action.payload.accessToken);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        saveToken(action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        clearToken();
      });
  },
});

export default authSlice.reducer;
