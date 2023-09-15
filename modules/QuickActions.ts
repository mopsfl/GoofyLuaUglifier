import Editor from "./Editor"

export default {
    async CopyScript() {
        await navigator.clipboard.writeText(Editor.GetValue() || "")
        return console.log(`Copied editor content to clipboard.`);
    }
}