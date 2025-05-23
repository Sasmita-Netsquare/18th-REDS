/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, type FormEvent } from "react";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import authUtils from "../../utils/auth";
import {
  checkAuthStatus,
  clearError,
  loginUser,
  logOutUser,
  registerUser,
  showSingleUser,
} from "../slices/authSlice";
import type { AppDispatch, RootState } from "../store";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const {
    user,
    isAuthenticated,
    error,
    isLoading,
    userData,
    otpSent,
    otpVerified,
  } = useTypedSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  const register = async (formData: any) => {
    const response = await dispatch(registerUser(formData)).unwrap();
    // await dispatch(showSingleUser(response?.customer_id));
    return response;
  };

  const userLogin = async (formData: any) => {
    const response = await dispatch(loginUser(formData)).unwrap();
    console.log("Login response:", response);
    dispatch(checkAuthStatus());
    // await dispatch(showSingleUser(response?.profile_data?.customer_id));
    return response;
  };

  const userLogOut = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        logOutUser({ refresh_token: user?.refresh })
      ).unwrap();
      return response;
    } catch (error) {
      // Even if the server logout fails, we should clear local auth state
      authUtils.logout();
      dispatch(checkAuthStatus());
      throw error;
    }
  };

  const checkTokenValidity = (buffer = 0) => {
    const isValid = authUtils.isTokenValid(buffer);
    dispatch(checkAuthStatus());
    return isValid;
  };
  const getSingleUser = async (id: string) => {
    return await dispatch(showSingleUser(id)).unwrap();
  };

  const handleClearError = () => dispatch(clearError());

  // Inside your useAuth hook
  useEffect(() => {
    // Set up automatic token refresh when the hook is initialized
    const cleanupTokenRefresh = authUtils.setupTokenRefresh();

    // Return cleanup function
    return cleanupTokenRefresh;
  }, []);
  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    userData,
    otpSent,
    otpVerified,
    register,
    userLogin,
    userLogOut,
    getSingleUser,
    clearError: handleClearError,
    checkTokenValidity,
  };
};
