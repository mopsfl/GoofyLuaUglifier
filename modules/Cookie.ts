import * as self from "./Cookie"

export default {
    GetCookie(cookieName: string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    },

    DeleteCookie(cookieName: string) {
        document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}