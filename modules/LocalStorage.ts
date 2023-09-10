import * as self from "./LocalStorage"

export default {
    Create(key: string, value?: any) {
        return localStorage.setItem(key, btoa(JSON.stringify(value || {})))
    },

    Set(key: string, name: string, value: string | Object | Array<any>) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)))
        if (!_data) return console.warn(`invalid localstorage key '${key}'`);
        _data[name] = value
        localStorage.setItem(key, btoa(JSON.stringify(_data)))
    },

    Edit(key: string, index: string, name: string, value: string | Object | Array<any>) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)))
        if (!_data) return console.warn(`invalid localstorage key '${key}'`);
        _data[index][name] = value
        localStorage.setItem(key, btoa(JSON.stringify(_data)))
    },

    GetKey(key: string, index: string) {
        const _data = self.default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)))
        if (!_data) return console.warn(`invalid localstorage key '${key}'`);
        return _data[index]
    },

    Exists(key: string) {
        return localStorage.getItem(key)
    }
}