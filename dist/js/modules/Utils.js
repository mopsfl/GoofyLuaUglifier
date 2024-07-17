"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pako_1 = __importDefault(require("pako"));
exports.default = {
    CompressData(data) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako_1.default.gzip(data)))));
    },
    UncompressData(data) {
        return pako_1.default.inflate(new Uint8Array(atob(decodeURIComponent(data)).split('').map(c => c.charCodeAt(0))), { to: 'string' });
    },
};
