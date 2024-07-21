import Editor from "./Editor";
import Request from "./Request"
import pako from "pako"

export default {
    async new(func: string, code: string, options: RequestOptions, uglifier_options?: Object, clientSession?: string): Promise<Response> {
        const start_tick = new Date().getTime()
        console.log(`new function request`, func);

        return await fetch(
            `${options.api_url()}${func}`, { method: "POST", body: code, credentials: "include", headers: { "uglifier-options": JSON.stringify(uglifier_options), "uglifier-session": clientSession } }).catch(error => {
                const _error: Error = error
                Editor.SetValue(Request.CreateResponseError("lua", _error.message, Editor.GetValue()))
                Editor.ToggleLoading()
                throw error
            }).finally(() => {
                console.log(`[Client] Function request finished. (took ${new Date().getTime() - start_tick}ms)`);
            })
    },

    CreateResponseError(format: "lua", error: string, code?: string) {
        let message = error
        if (code) code = code.replace(/--\[\[(.|\n)*]]/gm, "")
        switch (format) {
            case "lua": {
                message = `--[[
                  ┌ GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  │
                  └ ${error}
                ]]${code ? `\n\n\n${code}` : ""}`.replace(/^\s+/gm, "")
                break;
            }
        }
        return message
    },

    EncodeRequestDataQuery(data: Object) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(JSON.stringify(data))))))
    },
}

export interface RequestOptions {
    api_url: Function
}

export interface UglifierHeaders {
    "uglifier-session": string,
    "uglifier-ms-time": string,
    "uglifier-function": string
}