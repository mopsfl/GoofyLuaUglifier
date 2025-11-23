import $ from "jquery";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import Functions from "./modules/Functions";
import Client from "./modules/Client";

$(async () => {
    self.MonacoEnvironment = {
        getWorker(_, label) {
            console.log(`   > creating web worker '${label}'`)
            return label === "editorWorkerService"
                ? new Worker(new URL('monaco-editor/vs/editor/editor.worker.js', import.meta.url), { type: 'module' })
                : null
        }
    }

    const settings = new Settings().Init()
    Client.settings = settings

    Functions.Init()
    Editor.Init()
    M.AutoInit()

    Client.Init()

    new M.Modal(document.querySelector(".updateclaimer")).open()
})

$.readyException = (err => {
    console.error(err)
    Editor.ToggleLoading(`<div class="pageinit_error"><h5>Application error: a client-side exception has occurred!</h5><br><br><span>${err.name}: ${err.message}<br>Stack:<br>${err.stack.replace(/\s/gm, "<br>")}</span></div>`, true, true)
    Editor.ToggleReadOnly(true)
    Functions.blockFunctionTrigger = true
})

export interface OAuthGetResponse {
    code?: number,
    oauth: "discord" | "roblox",
    user: {
        id: string,
        username: string,
        avatar: string
    }
}