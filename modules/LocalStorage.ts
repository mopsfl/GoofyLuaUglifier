export default {
    Create(key: string, value?: any) {
        return localStorage.setItem(key, btoa(JSON.stringify(value || {})))
    },
    Set(key: string, name: string, value: string | Object | Array<any>) {
        const _data = atob(localStorage.getItem(key))
        _data[name] = value
        localStorage.setItem(key, btoa(JSON.stringify(_data)))
    },

    GetKey(key: string, index: string) {
        const _data = atob(localStorage.getItem(key))
        return _data[index]
    },

    Exists(key: string) {
        return localStorage.getItem(key)
    }
}