import $ from "jquery";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import Client from "./modules/Client";
import Toolbox from "./modules/Toolbox";
import Ripple from "./modules/UI/Ripple";
import Modal from "./modules/UI/Modal";

$(async () => {
    self.MonacoEnvironment = {
        getWorker(_, label) {
            return label === "editorWorkerService"
                ? new Worker(new URL('monaco-editor/vs/editor/editor.worker.js', import.meta.url), { type: 'module' })
                : null
        }
    }

    Client.Init()
    Client.settings = new Settings().Init()
    Toolbox.Init()
    Editor.Init()
    Ripple.Init()
    Modal.Init()
}) 