import pako from "pako"

export default {
    CompressData(data: string) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(data)))))
    },

    UncompressData(data: string) {
        return pako.inflate(new Uint8Array(atob(decodeURIComponent(data)).split('').map(c => c.charCodeAt(0))), { to: 'string' });
    },
}