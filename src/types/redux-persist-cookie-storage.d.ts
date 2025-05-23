/* eslint-disable @typescript-eslint/no-explicit-any */
// src/types/redux-persist-cookie-storage.d.ts
declare module "redux-persist-cookie-storage" {
  import type { CookieAttributes } from "js-cookie";

  interface CookieStorageOptions {
    expiration?: CookieAttributes;
    path?: string;
    defaultExpires?: boolean;
    readCookies?: () => string;
    setCookies?: (key: string, value: string) => void;
  }

  export class CookieStorage {
    constructor(cookies: any, options?: CookieStorageOptions);
  }
}
