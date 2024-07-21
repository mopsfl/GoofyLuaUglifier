import index from "../index"
import self from "./Editor"
import LocalStorage from "./LocalStorage"
import Utils from "./Utils"

export default {
    Init() {
        function WaitForEditor() {
            if (typeof window.monaco_editor !== "undefined") {
                if (index.settings._settings.save_editor_code === true) {
                    window.monaco_editor.getEditors()[0].getModel().onDidChangeContent(() => {
                        LocalStorage.Set(index.settings.config.storage_key, "mEditorValue", Utils.CompressData(self.GetValue()))
                    })
                    const mEditorValue = Utils.UncompressData(LocalStorage.GetKey("_goofyuglifier", "mEditorValue"))
                    if (mEditorValue !== "%save_editor_code_DISABLED%") self.SetValue(mEditorValue)
                } else {
                    LocalStorage.Set(index.settings.config.storage_key, "mEditorValue", Utils.CompressData("%save_editor_code_DISABLED%"))
                }

                console.log(`[Client]: Loaded Monaco Editor (took ${new Date().getTime() - index.pageTime}ms).`);
            }
            else {
                setTimeout(WaitForEditor, 250);
            }
        }; WaitForEditor()
    },

    GetValue() {
        return window.monaco_editor?.getEditors()[0].getValue()
    },

    SetValue(value: string) {
        return window.monaco_editor?.getEditors()[0].setValue(value)
    },

    CopyValue() {
        navigator.clipboard.writeText(self.GetValue() || "")
    },

    Clear() {
        return window.monaco_editor?.getEditors()[0].setValue("")
    },

    ToggleReadOnly(state = true) {
        window.monaco_editor.getEditors()[0].updateOptions({ readOnly: state })
    },

    GetDomElement(): HTMLElement {
        return window.monaco_editor?.getEditors()[0].getDomNode()
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