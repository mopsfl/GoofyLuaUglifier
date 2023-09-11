"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    GetValue() {
        return window.monaco_editor?.getEditors()[0].getValue();
    },
    SetValue(value) {
        return window.monaco_editor?.getEditors()[0].setValue(value);
    },
    Clear() {
        return window.monaco_editor?.getEditors()[0].setValue("");
    },
    GetDomElement() {
        return window.monaco_editor?.getEditors()[0].getDomNode();
    },
    ToggleLoading(loadingText = "Loading") {
        const loadingTextElement = document.querySelector(".loadingtext");
        document.querySelector(".main").classList.toggle("blur");
        loadingTextElement.innerText = `${loadingText}...`;
        loadingTextElement.classList.toggle("hide");
    }
};
