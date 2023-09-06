"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = __importDefault(require("./Editor"));
exports.default = {
    async new(func, code, options) {
        if (!(func instanceof (Attr)))
            return Promise.reject("invalid arguments");
        const start_tick = new Date().getTime();
        console.log(`new function request`, func);
        const function_name = func.value;
        return await fetch(`${options.api_url()}${function_name}`, { method: "POST", body: code }).catch(error => {
            const _error = error;
            Editor_1.default.SetValue(`${_error.message}`);
            throw error;
        }).finally(() => {
            console.log(`function request finished. (took ${new Date().getTime() - start_tick}ms)`);
        });
    }
};
