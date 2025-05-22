import api from "../utils/api";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export const register = (data: RegisterData) =>
  api.post("/auth/register-admin", data).then((res) => res.data);

export const login = (data: LoginData) =>
  api.post("/auth/login-admin", data).then((res) => res.data);

export const logout = () =>
  api.post("/auth/logout-admin").then((res) => res.data);
