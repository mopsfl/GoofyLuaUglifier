"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Create(key, value) {
        return localStorage.setItem(key, btoa(JSON.stringify(value || {})));
    },
    Set(key, name, value) {
        const _data = atob(localStorage.getItem(key));
        _data[name] = value;
        localStorage.setItem(key, btoa(JSON.stringify(_data)));
    },
    GetKey(key, index) {
        const _data = atob(localStorage.getItem(key));
        return _data[index];
    },
    Exists(key) {
        return localStorage.getItem(key);
    }
};
