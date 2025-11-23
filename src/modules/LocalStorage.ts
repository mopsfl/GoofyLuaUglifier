import Utils from "./Utils"

export default {
    _getItem(key: string): Record<string, any> | null {
        const item = localStorage.getItem(key)
        if (!item) return null
        try {
            return JSON.parse(Utils.UncompressData(item))
        } catch (error) {
            console.warn(`Failed to parse localStorage key '${key}'`, error)
            return null
        }
    },

    _setItem(key: string, data: Record<string, any>): void {
        localStorage.setItem(key, Utils.CompressData(JSON.stringify(data)))
    },

    Create(key: string, value: Record<string, any> = {}): void {
        this._setItem(key, value)
    },

    Set(key: string, name: string, value: unknown): void {
        const data = this._getItem(key)
        if (!data) return console.warn(`Invalid localStorage key '${key}'`)
        data[name] = value
        this._setItem(key, data)
    },

    Edit(key: string, index: string | number, name: string, value: unknown): void {
        const data = this._getItem(key)
        if (!data || !data[index]) return console.warn(`Invalid localStorage key or index '${key}[${index}]'`)
        data[index][name] = value
        this._setItem(key, data)
    },

    Get<T = any>(key: string, index: string | number, defaultValue?: T): T | null {
        const data = this._getItem(key)
        if (!data || data[index] === undefined) return defaultValue ?? null
        return data[index] as T
    },

    Exists(key: string): boolean {
        return localStorage.getItem(key) !== null
    },

    Clear(key: string): void {
        localStorage.removeItem(key)
    }
}
