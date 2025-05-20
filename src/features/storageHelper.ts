import Cookies from "js-cookie";

const TOKEN_KEY = "token";
const COOKIE_OPTIONS = { expires: 7 }; // days

export const saveToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
};

export const clearToken = () => {
  Cookies.remove(TOKEN_KEY);
};

export const getToken = (): string | undefined => Cookies.get(TOKEN_KEY);
