import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, registerUser } from "../slices/authSlice";
import type { AppDispatch, RootState } from "../store";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, token, loading, error } = useSelector((s: RootState) => s.auth);
  return {
    user,
    token,
    loading,
    error,
    register: (data: { username: string; email: string; password: string }) =>
      dispatch(registerUser(data)),
    login: (data: { email: string; password: string }) =>
      dispatch(loginUser(data)),
    logout: () => dispatch(logoutUser()),
  };
};
