import * as self from "./Editor"

export default {
    GetValue() {
        return window.monaco_editor?.getEditors()[0].getValue()
    },

    SetValue(value: string) {
        return window.monaco_editor?.getEditors()[0].setValue(value)
    },

    Clear() {
        return window.monaco_editor?.getEditors()[0].setValue("")
    },

    GetDomElement(): HTMLElement {
        return window.monaco_editor?.getEditors()[0].getDomNode()
    },

    ToggleLoading(loadingText: string = "Loading") {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")

        document.querySelector(".main").classList.toggle("blur")
        loadingTextElement.innerText = `${loadingText}...`
        loadingTextElement.classList.toggle("hide")
    },

    SetLoadingText(loadingText: string = "Loading") {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")
        loadingTextElement.innerText = `${loadingText}...`
    }
}