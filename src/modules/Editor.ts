import Client from "./Client"
import * as monaco from "monaco-editor"

export default {
    errorHighlightCollection: null,
    defaultScript: `local numA = 123
local numB = 100
local messageText = "Hello World!"
local flagTrue = true
local flagFalse = false
local getValues = function()
    return { numA, numB, messageText, flagTrue, flagFalse }
end
local numG = 100

function calculateDifference(...)
    local inputArgs = {...}
    for index, value in pairs(getValues()) do
        print(index, value)
    end
    return inputArgs[1] - inputArgs[2]
end

print(calculateDifference(numA, numB))
print(numB - numG)`.trim(),

    Init() {
        const initTime = Date.now()
        Client.editor = monaco.editor.create(document.querySelector(".monaco"), {
            language: "lua",
            theme: "vs-dark",
            wordWrap: "on",
            wordBreak: "normal",
            automaticLayout: true,
            maxTokenizationLineLength: 1e5,
            minimap: { enabled: false },
            smoothScrolling: true,
            value: this.defaultScript
        })

        Client.editor.layout()
        console.log(`Loaded Monaco Editor. (took ${Date.now() - initTime}ms)`);
    },

    GetValue() {
        return Client.editor.getValue()
    },

    SetValue(value: string) {
        return Client.editor.setValue(value)
    },

    CopyValue() {
        this.GetValue() && navigator.clipboard.writeText(this.GetValue())
    },

    Clear() {
        Client.editor.setValue("")
    },

    ToggleReadOnly(state = true) {
        Client.editor.updateOptions({ readOnly: state })
    },

    GetDomElement(): HTMLElement {
        return Client.editor.getDomNode()
    },

    ToggleLoading(loadingText: string = "Loading", noDots?: boolean, html?: boolean) {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")

        document.querySelector(".monaco").classList.toggle("blur")
        document.querySelector(".sidebar").classList.toggle("blur")
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`
        loadingTextElement.classList.toggle("hide")
    },

    SetLoadingText(loadingText: string = "Loading", noDots?: boolean, html?: boolean) {
        const loadingTextElement: HTMLElement = document.querySelector(".loadingtext")
        !html ? loadingTextElement.innerText = `${loadingText}${!noDots ? "..." : ""}` : loadingTextElement.innerHTML = `${loadingText}${!noDots ? "..." : ""}`
    },

    HighlightRange(range: monaco.Range, message: string) {
        if (!range) return;

        if (this.errorHighlightCollection) this.errorHighlightCollection.clear()

        this.errorHighlightCollection = Client.editor.createDecorationsCollection([
            {
                range: new monaco.Range(range.startLineNumber, 1, range.startLineNumber, range.startColumn + 1),
                options: {
                    isWholeLine: true,
                    className: 'errorCodeHighlightLine',
                    hoverMessage: { value: message },
                },
            },
            { range, options: { inlineClassName: 'errorCodeHighlightPoint' } },
        ])
    },

    SyntaxErrorToRange(error: string) {
        const match = error.match(/\[(\d+):(\d+)\]/)
        if (!match) return null

        const line = +match[1]
        let column = +match[2]

        const lineLength = Client.editor.getModel().getLineMaxColumn(line) - 1
        column = Math.min(column, lineLength)
        const endCol = column < lineLength ? column + 1 : column

        return new monaco.Range(line, column, line, endCol + 1)
    }
}