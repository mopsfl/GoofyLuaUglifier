import Editor from "./Editor"

export default {
    async CopyScript() {
        await navigator.clipboard.writeText(Editor.GetValue() || "")
        return console.log(`Copied editor content to clipboard.`);
    },

    Download(content?: string) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(!content ? Editor.GetValue() : content || ""));
        element.setAttribute('download', `GoofyLuaUglifier_${new Date().getTime()}.lua`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
}