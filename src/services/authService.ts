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
  api.post("/auth/admin/register", data).then((res) => res.data);

export const login = (data: LoginData) =>
  api.post("/auth/admin/login", data).then((res) => res.data);

export const logout = () =>
  api.post("/auth/admin/logout").then((res) => res.data);
