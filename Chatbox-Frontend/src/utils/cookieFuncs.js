import Cookies from "js-cookie";

// cookieFuncs.js
export const setCookie = (name, value) => {
    Cookies.set(name, value, {
        expires: 1,
        secure: true,
        sameSite: "strict",
        path: "/",
    });
};

export const removeCookie = (name) => {
    Cookies.remove(name);
};

export const getCookie = (name) => {
    return Cookies.get(name);
};
