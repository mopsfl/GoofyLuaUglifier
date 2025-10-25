"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Create(key, value) {
        return localStorage.setItem(key, btoa(JSON.stringify(value || {})));
    },
    Set(key, name, value) {
        const _data = this.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
        if (!_data)
            return console.warn(`invalid localstorage key '${key}'`);
        _data[name] = value;
        localStorage.setItem(key, btoa(JSON.stringify(_data)));
    },
    Edit(key, index, name, value) {
        const _data = this.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
        if (!_data)
            return console.warn(`invalid localstorage key '${key}'`);
        _data[index][name] = value;
        localStorage.setItem(key, btoa(JSON.stringify(_data)));
    },
    GetKey(key, index) {
        const _data = this.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
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
