/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "./service";

export const setToken = (token: string): void => {
  Cookies.set("accessToken", token);
};

export const getToken = (): string | undefined => {
  return Cookies.get("accessToken");
};

export const isTokenValid = (buffer: number = 0): boolean => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp ? decoded.exp > currentTime + buffer : false;
  } catch (error) {
    console.error("Invalid token:", error);
    return false;
  }
};

export const getTimeUntilExpiry = (): number | null => {
  const token = getToken();
  if (!token) return null;
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp ? Math.max(0, decoded.exp - currentTime) : null;
  } catch {
    return null;
  }
};
let refreshTimerID: number | null = null;

export const setupTokenRefresh = () => {
  if (refreshTimerID) {
    window.clearInterval(refreshTimerID);
    refreshTimerID = null;
  }

  const checkAndRefreshToken = async () => {
    const token = getToken();
    if (!token) {
      console.warn("No token found. Skipping token refresh.");
      return;
    }

    if (!isTokenValid(120)) {
      console.log("Token is about to expire. Refreshing...");
      try {
        const response = await axiosInstance.post(
          "/auth/refresh-token",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        console.log("Token refresh response:", response);

        if (response.data?.resultObj?.authToken) {
          setToken(response.data.resultObj.authToken);
          console.log("Token refreshed successfully");
        } else {
          console.error("No auth token received in refresh response");
        }
      } catch (error) {
        console.error("Failed to refresh token:", error);

        if (refreshTimerID) {
          window.clearInterval(refreshTimerID);
          refreshTimerID = null;
        }
        logout();
      }
    }
  };

  checkAndRefreshToken();
  refreshTimerID = window.setInterval(checkAndRefreshToken, 10000);
  return () => {
    if (refreshTimerID) {
      window.clearInterval(refreshTimerID);
      refreshTimerID = null;
    }
  };
};

export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post(
      "/auth/admin/logout",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    Cookies.remove("accessToken");
  } catch (err) {
    console.error("Error during logout:", err);
  }
};

export const authUtils = {
  setToken,
  getToken,
  isTokenValid,
  getTimeUntilExpiry,
  setupTokenRefresh,
  logout,
};

export default authUtils;
