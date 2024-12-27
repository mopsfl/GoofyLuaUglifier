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
const index_1 = __importDefault(require("../index"));
const Editor_1 = __importDefault(require("./Editor"));
const LocalStorage_1 = __importDefault(require("./LocalStorage"));
const Utils_1 = __importDefault(require("./Utils"));
const monaco = __importStar(require("monaco-editor"));
exports.default = {
    _defaultScript: `local Players = game:GetService("Players")
print(Players.LocalPlayer:GetMouse())`.trim(),
    Init() {
        index_1.default.editor = monaco.editor.create(document.querySelector(".monaco"), {
            language: 'lua',
            theme: 'vs-dark',
            wordWrap: 'on',
            wordBreak: 'normal',
            automaticLayout: true,
            maxTokenizationLineLength: 1e5,
            minimap: { enabled: true }
        });
        index_1.default.editor.layout();
        if (index_1.default.settings._settings.save_editor_code === true) {
            index_1.default.editor.getModel().onDidChangeContent(() => {
                LocalStorage_1.default.Set(index_1.default.settings.config.storage_key, "mEditorValue", Utils_1.default.CompressData(Editor_1.default.GetValue()));
            });
            const mEditorValue = Utils_1.default.UncompressData(LocalStorage_1.default.GetKey("_goofyuglifier", "mEditorValue"));
            if (mEditorValue !== "%save_editor_code_DISABLED%")
                Editor_1.default.SetValue(mEditorValue);
        }
        else {
            LocalStorage_1.default.Set(index_1.default.settings.config.storage_key, "mEditorValue", Utils_1.default.CompressData("%save_editor_code_DISABLED%"));
            index_1.default.editor.setValue(Editor_1.default._defaultScript);
        }
        console.log(`[Client]: Loaded Monaco Editor (took ${new Date().getTime() - index_1.default.pageTime}ms).`);
    },
    GetValue() {
        return index_1.default.editor.getValue();
    },
    SetValue(value) {
        return index_1.default.editor.setValue(value);
    },
    CopyValue() {
        navigator.clipboard.writeText(Editor_1.default.GetValue() || "");
    },
    Clear() {
        console.log(monaco.editor.getEditors());
        return index_1.default.editor.setValue("");
    },
    ToggleReadOnly(state = true) {
        index_1.default.editor.updateOptions({ readOnly: state });
    },
    GetDomElement() {
        return index_1.default.editor.getDomNode();
    },
    ToggleLoading(loadingText = "Loading", noDots, html) {
        const loadingTextElement = document.querySelector(".loadingtext");
        document.querySelector(".main").classList.toggle("blur");
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`;
        loadingTextElement.classList.toggle("hide");
    },
    SetLoadingText(loadingText = "Loading", noDots, html) {
        const loadingTextElement = document.querySelector(".loadingtext");
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`;
    }
};
