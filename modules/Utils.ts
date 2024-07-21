import pako from "pako"
import Editor from "./Editor";

export default {
    CompressData(data: string) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(data)))))
    },

    UncompressData(data: string) {
        return pako.inflate(new Uint8Array(atob(decodeURIComponent(data)).split('').map(c => c.charCodeAt(0))), { to: 'string' });
    },

    DownloadContent(content?: string) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(!content ? Editor.GetValue() : content || ""));
        element.setAttribute('download', `GoofyLuaUglifier_${new Date().getTime()}.lua`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    GetCookie(cookieName: string) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${cookieName}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    },

    DeleteCookie(cookieName: string) {
        document.cookie = cookieName + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}