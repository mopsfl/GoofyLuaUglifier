"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Editor_1 = __importDefault(require("./Editor"));
const LocalStorage_1 = __importDefault(require("./LocalStorage"));
const Utils_1 = __importDefault(require("./Utils"));
exports.default = {
    Init() {
        function WaitForEditor() {
            if (typeof window.monaco_editor !== "undefined") {
                if (index_1.default.settings._settings.save_editor_code === true) {
                    window.monaco_editor.getEditors()[0].getModel().onDidChangeContent(() => {
                        LocalStorage_1.default.Set(index_1.default.settings.config.storage_key, "mEditorValue", Utils_1.default.CompressData(Editor_1.default.GetValue()));
                    });
                    const mEditorValue = Utils_1.default.UncompressData(LocalStorage_1.default.GetKey("_goofyuglifier", "mEditorValue"));
                    if (mEditorValue !== "%save_editor_code_DISABLED%")
                        Editor_1.default.SetValue(mEditorValue);
                }
                else {
                    LocalStorage_1.default.Set(index_1.default.settings.config.storage_key, "mEditorValue", Utils_1.default.CompressData("%save_editor_code_DISABLED%"));
                }
                console.log(`[Client]: Loaded Monaco Editor (took ${new Date().getTime() - index_1.default.pageTime}ms).`);
            }
            else {
                setTimeout(WaitForEditor, 250);
            }
        }
        ;
        WaitForEditor();
    },
    GetValue() {
        return window.monaco_editor?.getEditors()[0].getValue();
    },
    SetValue(value) {
        return window.monaco_editor?.getEditors()[0].setValue(value);
    },
    CopyValue() {
        navigator.clipboard.writeText(Editor_1.default.GetValue() || "");
    },
    Clear() {
        return window.monaco_editor?.getEditors()[0].setValue("");
    },
    ToggleReadOnly(state = true) {
        window.monaco_editor.getEditors()[0].updateOptions({ readOnly: state });
    },
    GetDomElement() {
        return window.monaco_editor?.getEditors()[0].getDomNode();
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
