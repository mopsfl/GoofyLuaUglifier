import index from "../index"
import self from "./Editor"
import LocalStorage from "./LocalStorage"
import Utils from "./Utils"
import * as monaco from "monaco-editor"

export default {
    _defaultScript: `local Players = game:GetService("Players")
print(Players.LocalPlayer:GetMouse())`.trim(),

    Init() {
        index.editor = monaco.editor.create(document.querySelector(".monaco"), {
            language: 'lua',
            theme: 'vs-dark',
            wordWrap: 'on',
            wordBreak: 'normal',
            automaticLayout: true,
            maxTokenizationLineLength: 1e5,
            minimap: { enabled: true }
        }); index.editor.layout()

        if (index.settings._settings.save_editor_code === true) {
            index.editor.getModel().onDidChangeContent(() => {
                LocalStorage.Set(index.settings.config.storage_key, "mEditorValue", Utils.CompressData(self.GetValue()))
            })
            const mEditorValue = Utils.UncompressData(LocalStorage.GetKey("_goofyuglifier", "mEditorValue"))
            if (mEditorValue !== "%save_editor_code_DISABLED%") self.SetValue(mEditorValue)
        } else {
            LocalStorage.Set(index.settings.config.storage_key, "mEditorValue", Utils.CompressData("%save_editor_code_DISABLED%"))
            index.editor.setValue(self._defaultScript)
        }

        console.log(`[Client]: Loaded Monaco Editor (took ${new Date().getTime() - index.pageTime}ms).`);

    },

    GetValue() {
        return index.editor.getValue()
    },

    SetValue(value: string) {
        return index.editor.setValue(value)
    },

    CopyValue() {
        navigator.clipboard.writeText(self.GetValue() || "")
    },

    Clear() {
        console.log(monaco.editor.getEditors());
        return index.editor.setValue("")
    },

    ToggleReadOnly(state = true) {
        index.editor.updateOptions({ readOnly: state })
    },

    GetDomElement(): HTMLElement {
        return index.editor.getDomNode()
    },

    ToggleLoading(loadingText: string = "Loading", noDots?: boolean, html?: boolean) {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")

        document.querySelector(".main").classList.toggle("blur")
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`
        loadingTextElement.classList.toggle("hide")
    },

    SetLoadingText(loadingText: string = "Loading", noDots?: boolean, html?: boolean) {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`
    }
}