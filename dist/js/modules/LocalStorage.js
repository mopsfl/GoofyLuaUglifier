"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const self = __importStar(require("./LocalStorage"));
exports.default = {
    Create(key, value) {
        return localStorage.setItem(key, btoa(JSON.stringify(value || {})));
    },
    Set(key, name, value) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
        if (!_data)
            return console.warn(`invalid localstorage key '${key}'`);
        _data[name] = value;
        localStorage.setItem(key, btoa(JSON.stringify(_data)));
    },
    Edit(key, index, name, value) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
        if (!_data)
            return console.warn(`invalid localstorage key '${key}'`);
        _data[index][name] = value;
        localStorage.setItem(key, btoa(JSON.stringify(_data)));
    },
    GetKey(key, index) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
        if (!_data)
            return console.warn(`invalid localstorage key '${key}'`);
        return _data[index];
    },
    Exists(key) {
        return localStorage.getItem(key);
    },
    Clear(key) {
        return localStorage.removeItem(key);
    }
};
