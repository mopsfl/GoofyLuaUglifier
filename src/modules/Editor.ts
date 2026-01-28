import $ from "jquery";
import Client from "./Client"
import * as monaco from "monaco-editor"

let initialized = false

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
        if (initialized) throw Error("Editor module is already initialized!")

        const initTime = Date.now(),
            monacoElement = $(".monaco")

        Client.editor = monaco.editor.create(monacoElement.get(0), {
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
        monacoElement.find(".loading").remove()

        initialized = true
        console.log(`Loaded Monaco Editor. (took ${Date.now() - initTime}ms)`);
    },

    GetValue: () => Client.editor.getValue(),
    SetValue: (value: string) => Client.editor.setValue(value),
    Clear: () => Client.editor.setValue(""),
    ToggleReadOnly: (state = true) => Client.editor.updateOptions({ readOnly: state }),
    GetDomElement: () => Client.editor.getDomNode(),

    ToggleBlur(state?: boolean) {
        $(this.GetDomElement()).toggleClass("blur", state)
    },

    CopyValue() {
        this.GetValue() && navigator.clipboard.writeText(this.GetValue())
    },

    HighlightRange(range: monaco.Range, message: string) {
        if (!range) throw new Error("missing argument <range: monaco.Range>")
        if (typeof range !== "object") throw new Error(`expected argument <range: monaco.Range> but got <${typeof range}>`)
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