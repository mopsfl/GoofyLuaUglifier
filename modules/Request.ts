import Editor from "./Editor";
import Request from "./Request"
import * as self from "./Request"

//@ts-ignore
String.prototype.hexEncode = function () {
    var hex: string, i: number;

    var result = "";
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += (hex).slice(-4);
    }

    return result
}

export default {
    async new(func: Attr, code: string, options: RequestOptions, uglifier_options?: Object, clientSession?: string): Promise<Response> {
        if (!(func instanceof (Attr))) return Promise.reject("invalid arguments")
        const start_tick = new Date().getTime()
        console.log(`new function request`, func);
        //@ts-ignore
        const routeB64 = "H4sIAEc7b2UA%2FwVAsQkAMAg7z6WrBziYEhACQod%2BH0LCP6%2FyDsFeA9iUFSQQAAAA"

        //@ts-ignore
        /*return await fetch(
            `${options.api_url()}?e=${routeB64}&t=${new Date().getTime()}&d=${self.default.EncodeRequestDataQuery({ requested_method: func.value, code: "[body]" })}`, { method: "POST", body: code, headers: { "uglifier-options": JSON.stringify(uglifier_options), "uglifier-session": clientSession } }).catch(error => {
                const _error: Error = error
                Editor.SetValue(Request.CreateResponseError("lua", _error.message, Editor.GetValue()))
                Editor.ToggleLoading()
                throw error
            }).finally(() => {
                console.log(`Function request finished. (took ${new Date().getTime() - start_tick}ms)`);
            })*/
        return await fetch(
            `${options.api_url()}${func.value}`, { method: "POST", body: code, headers: { "uglifier-options": JSON.stringify(uglifier_options), "uglifier-session": clientSession } }).catch(error => {
                const _error: Error = error
                Editor.SetValue(Request.CreateResponseError("lua", _error.message, Editor.GetValue()))
                Editor.ToggleLoading()
                throw error
            }).finally(() => {
                console.log(`Function request finished. (took ${new Date().getTime() - start_tick}ms)`);
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
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(window.pako.gzip(JSON.stringify(data))))))
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