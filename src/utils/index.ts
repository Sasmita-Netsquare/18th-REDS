/* eslint-disable @typescript-eslint/no-explicit-any */

import Cookies from "js-cookie";

export function setCookie(name: string, value: any, days: number = 1) {
  Cookies.set(name, JSON.stringify(value), {
    expires: days,
    secure: import.meta.env.MODE === "production",
    sameSite: "Strict",
    path: "/",
  });
}

export function getCookie(name: string) {
  const cookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  if (!cookies) return null;

  const value = cookies.split("=")[1];
  if (value && value !== "undefined") {
    try {
      const decoded = decodeURIComponent(value);
      return JSON.parse(decoded);
    } catch (error) {
      console.error("Error parsing cookie:", error);
      return value;
    }
  } else {
    return null;
  }
}

export function removeCookie(name: string) {
  Cookies.remove(name, { path: "/" });
}
