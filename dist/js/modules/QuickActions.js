"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Editor_1 = __importDefault(require("./Editor"));
exports.default = {
    async CopyScript() {
        await navigator.clipboard.writeText(Editor_1.default.GetValue() || "");
        return console.log(`Copied editor content to clipboard.`);
    },
    Download() {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(Editor_1.default.GetValue() || ""));
        element.setAttribute('download', `GoofyLuaUglifier_${new Date().getTime()}.lua`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
};
