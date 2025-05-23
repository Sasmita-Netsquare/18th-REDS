/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getToken, isTokenValid } from "./auth";
import axiosInstance from "./service";

interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

interface RequestOptions {
  requireAuth?: boolean;
}

// Helper to get auth headers if needed
const getAuthHeaders = (requireAuth: boolean = true) => {
  const headers: Record<string, string> = {};

  if (requireAuth && isTokenValid()) {
    console.log("Token is valid, adding to headers");

    const token = getToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};

// Create a new item
export const create = async <T = any, R = any>(
  url: string,
  data: T,
  options: RequestOptions = { requireAuth: true }
): Promise<R> => {
  const headers = getAuthHeaders(options.requireAuth);

  const isFileUpload =
    data instanceof FormData ||
    (data &&
      typeof data === "object" &&
      Object.values(data as Record<string, unknown>).some(
        (value) => value instanceof File
      ));

  if (isFileUpload) {
    const formData =
      data instanceof FormData
        ? data
        : Object.entries(data as Record<string, any>).reduce(
            (formData, [key, value]) => {
              formData.append(key, value);
              return formData;
            },
            new FormData()
          );

    const response = await axiosInstance.post<R>(`/${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...headers,
      },
    });

    return response.data;
  }

  const response = await axiosInstance.post<R>(`/${url}`, data, { headers });
  return response.data;
};

// Get all items
export const get = async <T = any>(
  url: string,
  options: RequestOptions = { requireAuth: true }
): Promise<T> => {
  const headers = getAuthHeaders(options.requireAuth);
  const response = await axiosInstance.get<T>(`/${url}`, { headers });
  return response.data;
};

// Get item by ID
export const getById = async <T = any>(
  url: string,
  id: string | number,
  options: RequestOptions = { requireAuth: true }
): Promise<T> => {
  try {
    const headers = getAuthHeaders(options.requireAuth);
    const response = await axiosInstance.get<T>(`/${url}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch ${url}/${id}:`, error);
    throw error; // now it's not useless
  }
};

// Update item
export const update = async <T = any, R = any>(
  url: string,
  id: string | number,
  data: T,
  options: RequestOptions = { requireAuth: true }
): Promise<R> => {
  try {
    const headers = getAuthHeaders(options.requireAuth);
    const response = await axiosInstance.put<R>(`/${url}/${id}`, data, {
      headers,
    });
    return response.data;
  } catch (error) {
    // Custom logic (e.g. logging or error transformation)
    console.error("Update request failed:", error);
    throw error; // re-throw after logging
  }
};

// Delete item
export const _delete = async <T = any>(
  url: string,
  id: string | number,
  options: RequestOptions = { requireAuth: true }
): Promise<T> => {
  try {
    const headers = getAuthHeaders(options.requireAuth);
    const response = await axiosInstance.delete<T>(`/${url}/${id}`, {
      headers,
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Delete request failed:", error);
    throw error;
  }
};

// Delete multiple items
export const _deleteAll = async <T = any>(
  url: string,
  data: any,
  options: RequestOptions = { requireAuth: true }
): Promise<T> => {
  const headers = getAuthHeaders(options.requireAuth);
  const response = await axiosInstance.delete<T>(`/${url}`, {
    headers,
    data,
  });
  return response.data;
};
