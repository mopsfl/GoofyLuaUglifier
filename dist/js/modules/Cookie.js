"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    GetCookie(cookieName) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2)
            return parts.pop().split(';').shift();
    },
    DeleteCookie(cookieName) {
        document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};
