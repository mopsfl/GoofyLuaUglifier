"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pako_1 = __importDefault(require("pako"));
const Editor_1 = __importDefault(require("./Editor"));
exports.default = {
    CompressData(data) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako_1.default.gzip(data)))));
    },
    UncompressData(data) {
        return pako_1.default.inflate(new Uint8Array(atob(decodeURIComponent(data)).split('').map(c => c.charCodeAt(0))), { to: 'string' });
    },
    DownloadContent(content) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(!content ? Editor_1.default.GetValue() : content || ""));
        element.setAttribute('download', `GoofyLuaUglifier_${new Date().getTime()}.lua`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },
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
