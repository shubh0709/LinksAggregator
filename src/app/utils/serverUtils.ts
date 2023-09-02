import { cookies as nextCookie } from "next/headers";

export const getCookieFromServer = (key: string) => {
  return nextCookie().get(key);
};
