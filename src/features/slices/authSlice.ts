/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import authUtils from "../../utils/auth";

interface AuthState {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  userData: any;
  otpSent: boolean;
  otpVerified: boolean;
}

interface RegisterFormData {
  email: string;
  password: string;
  name?: string;
  [key: string]: any;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface LogoutData {
  refresh_token: string;
}

export const registerUser = createAsyncThunk(
  "auth/admin/register",
  async (formData: RegisterFormData, { rejectWithValue }) => {
    try {
      const response = await authService.adminRegistration(formData);
      return response.error ? rejectWithValue(response.error) : response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/admin/login",
  async (formData: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await authService.adminLogIn(formData);
      console.log("Login response:", response);

      if (response?.resultObj?.authToken) {
        authUtils.setToken(response?.resultObj?.authToken);
      }

      return response;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.displayMessage ||
        "Login failed. Please try again.";

      return rejectWithValue(errorMessage);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/admin/logout",
  async ({ refresh_token }: LogoutData, { rejectWithValue }) => {
    try {
      const response = await authService.adminLogOut(refresh_token);

      authUtils.logout();

      return response.error ? rejectWithValue(response.error) : response;
    } catch (error: any) {
      authUtils.logout();
      return rejectWithValue(error.message);
    }
  }
);

export const showSingleUser = createAsyncThunk(
  "auth/admin/showUser",
  async (id: string | number, { rejectWithValue }) => {
    try {
      const response = await authService.singleUser(id);
      return response.error
        ? rejectWithValue(response.error)
        : response.customer_details;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState: AuthState = {
  user: null,
  isAuthenticated: authUtils.isTokenValid(),
  isLoading: false,
  error: null,
  userData: null,
  otpSent: false,
  otpVerified: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    checkAuthStatus: (state) => {
      state.isAuthenticated = authUtils.isTokenValid();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = authUtils.isTokenValid();
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.userData = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(showSingleUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(showSingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(showSingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, checkAuthStatus } = authSlice.actions;
export default authSlice.reducer;
