import jQuery from "jquery";
import { Materialbox } from "materialize-css";
import Request from "./modules/Request";
import Editor from "./modules/Editor";
import * as self from "./index"

jQuery(() => {
    M.AutoInit()

    const sidebar_buttons = document.querySelectorAll(".function-btn")
    sidebar_buttons.forEach(btn => {
        $(btn).on("click", async (e) => {
            if (self.default.block_requests) return
            self.default.block_requests = true
            Editor.ToggleLoading("Processing")
            const func = e.target.attributes.getNamedItem("data-function"),
                _request = await Request.new(func, Editor.GetValue(), self.default.options)

            if (_request instanceof (Response)) {
                let _response_body = ""
                if (_request.ok) _response_body = await _request.text()
                Editor.SetValue(_response_body)
                Editor.ToggleLoading("")
                self.default.block_requests = false
            }
        })
    })

    window.modules = {
        jQuery, Request, Editor, self
    }
})

export default {
    block_requests: false,
    options: {
        api_url: location.hostname == "localhost" ? "http://localhost:6969/api/goofyuglifier/" : "https://mopsflgithubio.mopsfl.repl.co/api/goofyuglifier/"
    }
}

declare let M: Materialbox
declare global {
    interface Window {
        modules: Object,
        monaco_editor: {
            getEditors: Function
        }
    }
}