import cookie from "js-cookie";
import router from "next/router";

export function openInNewTab(url: string) {
  window.open(url, "_blank")?.focus();
}

export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export const getCookie = (key: string) => {
  if (window) {
    return cookie.get(key);
  }
};

export const removeCookie = (key: string) => {
  if (window) {
    cookie.remove(key);
  }
};

export const setCookie = (key: string, value: any) => {
  if (window) {
    cookie.set(key, value);
  }
};
export const setLocalStorage = (key: string, value: any) => {
  if (window && window.localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key: string) => {
  if (window && window.localStorage) {
    localStorage.removeItem(key);
  }
};

export const getLocalStorage = (key: string) => {
  if (window && window.localStorage) {
    return JSON.parse(localStorage.getItem(key) ?? "");
  }
};

export const setAuthData = (response: any, next: Function) => {
  if (window) {
    setCookie("token", response.data.token);
    setLocalStorage("user", response.data.user);
    next();
  }
};

export const userAuthenticatedData = () => {
  if (window && getCookie("token")) {
    return getLocalStorage("user");
  }
};

export const logout = () => {
  if (window) {
    removeCookie("token");
    removeLocalStorage("user");
  }
};
