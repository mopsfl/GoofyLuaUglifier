import pako from "pako"
import Editor from "../Editor";

export default {
    CompressData: (data: string, encode: boolean = true): string => encode ? encodeURIComponent(btoa(String.fromCharCode(...pako.gzip(new TextEncoder().encode(data))))) : btoa(String.fromCharCode(...pako.gzip(new TextEncoder().encode(data)))),
    UncompressData: (data: string) => new TextDecoder().decode(pako.inflate(Uint8Array.from(atob(decodeURIComponent(data)), c => c.charCodeAt(0)))),
    FormatMs: (ms: number) => ms < 1000 ? `${ms.toFixed(3)}ms` : `${(ms / 1000).toFixed(ms < 10000 ? 2 : ms < 100000 ? 1 : 0)}s`,

    GetCookie: (cookieName: string): string | undefined => document.cookie.split("; ").map(c => c.split("=")).find(([name]) => name === cookieName)?.[1],
    DeleteCookie(cookieName: string): void {
        document.cookie = `${cookieName}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`
    },

    DownloadContent(content?: string): void {
        const data = content ?? Editor.GetValue() ?? ""
        const url = URL.createObjectURL(new Blob([data], { type: "text/plain;charset=utf-8" }))

        const link = Object.assign(document.createElement("a"), {
            href: url,
            download: `GoofyLuaUglifier_${Date.now()}.lua`,
            style: "display: none"
        })

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    },

    ToCamelKey: (text: string): string => text.trim().toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase())
}