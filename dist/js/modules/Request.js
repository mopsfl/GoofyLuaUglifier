"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = __importDefault(require("./Editor"));
const Request_1 = __importDefault(require("./Request"));
const self = __importStar(require("./Request"));
//@ts-ignore
String.prototype.hexEncode = function () {
    var hex, i;
    var result = "";
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += (hex).slice(-4);
    }
    return result;
};
exports.default = {
    async new(func, code, options, uglifier_options) {
        if (!(func instanceof (Attr)))
            return Promise.reject("invalid arguments");
        const start_tick = new Date().getTime();
        console.log(`new function request`, func);
        //@ts-ignore
        const routeB64 = "H4sIAEc7b2UA%2FwVAsQkAMAg7z6WrBziYEhACQod%2BH0LCP6%2FyDsFeA9iUFSQQAAAA";
        //@ts-ignore
        return await fetch(`${options.api_url()}?e=${routeB64}&t=${new Date().getTime()}&d=${self.default.EncodeRequestDataQuery({ requested_method: func.value, code: "[body]" })}`, { method: "POST", body: code, headers: { "uglifier-options": JSON.stringify(uglifier_options) } }).catch(error => {
            const _error = error;
            Editor_1.default.SetValue(Request_1.default.CreateResponseError("lua", _error.message, Editor_1.default.GetValue()));
            Editor_1.default.ToggleLoading();
            throw error;
        }).finally(() => {
            console.log(`function request finished. (took ${new Date().getTime() - start_tick}ms)`);
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
        return encodeURIComponent(btoa(String.fromCharCode.apply(null, new Uint16Array(window.pako.gzip(JSON.stringify(data))))));
    }
};
