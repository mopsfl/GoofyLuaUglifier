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
    }
};
