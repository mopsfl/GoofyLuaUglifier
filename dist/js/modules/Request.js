"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = __importDefault(require("./Editor"));
const Request_1 = __importDefault(require("./Request"));
const pako_1 = __importDefault(require("pako"));
exports.default = {
    async new(func, code, options, uglifier_options, clientSession) {
        if (!(func instanceof (Attr)))
            return Promise.reject("invalid arguments");
        const start_tick = new Date().getTime();
        console.log(`new function request`, func);
        return await fetch(`${options.api_url()}${func.value}`, { method: "POST", body: code, credentials: "include", headers: { "uglifier-options": JSON.stringify(uglifier_options), "uglifier-session": clientSession } }).catch(error => {
            const _error = error;
            Editor_1.default.SetValue(Request_1.default.CreateResponseError("lua", _error.message, Editor_1.default.GetValue()));
            Editor_1.default.ToggleLoading();
            throw error;
        }).finally(() => {
            console.log(`[Client] Function request finished. (took ${new Date().getTime() - start_tick}ms)`);
            /*fetch(`${self.default.options.mopsfl_api_url()}logs/glu_responsetime`, {
                method: "POST", body: JSON.stringify({
                    f: func.value,
                    u: options.api_url(),
                    t: new Date().getTime() - start_tick,
                    s: clientSession || null,
                    o: Object.values(uglifier_options)
                })
            })*/
            console.log({
                f: func.value,
                u: options.api_url(),
                t: new Date().getTime() - start_tick,
                s: clientSession || null,
                o: Object.values(uglifier_options)
            });
        });
    },
    CreateResponseError(format, error, code) {
        let message = error;
        if (code)
            code = code.replace(/--\[\[(.|\n)*]]/gm, "");
        switch (format) {
            case "lua": {
                message = `--[[
                  ┌ GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  │
                  └ ${error}
                ]]${code ? `\n\n\n${code}` : ""}`.replace(/^\s+/gm, "");
                break;
            }
        }
        return message;
    },
    EncodeRequestDataQuery(data) {
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(pako_1.default.gzip(JSON.stringify(data))))));
    },
};
