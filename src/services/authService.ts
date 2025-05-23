/* eslint-disable @typescript-eslint/no-explicit-any */
import { create, get } from "../utils/api";

interface AdminRegistrationData {
  name?: string;
  email: string;
  password: string;
  [key: string]: any;
}

interface LoginData {
  email: string;
  password: string;
}

const authService = {
  adminRegistration: async (formData: AdminRegistrationData) => {
    try {
      const response = await create<AdminRegistrationData, any>(
        "auth/admin/register",
        formData,
        { requireAuth: false }
      );
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw new Error("Registration failed. Please try again.");
    }
  },

  adminLogIn: async (formData: LoginData) => {
    try {
      const response = await create<LoginData, any>(
        "auth/admin/login",
        formData,
        { requireAuth: false }
      );
      console.log("Login response from auth service:", response);

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed. Please try again.");
    }
  },

  adminLogOut: async (token: string) => {
    try {
      const response = await create<{ refresh_token: string }, any>(
        "auth/admin/logout",
        { refresh_token: token },
        { requireAuth: false }
      );
      return response;
    } catch (error) {
      console.error("Logout failed:", error);
      throw new Error("Logout failed. Please try again.");
    }
  },

  singleUser: async (id: string | number) => {
    try {
      const response = await get<any>(`profile/?customer_id=${id}`);
      return response;
    } catch (error) {
      console.error("Single user fetch failed:", error);
      throw new Error("Single user fetch failed. Please try again.");
    }
  },
};

export default authService;
