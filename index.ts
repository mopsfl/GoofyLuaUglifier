/**
 * TODO:
 * > finish settings system
 */

import jQuery from "jquery";
import { Materialbox } from "materialize-css";
import Request from "./modules/Request";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import * as self from "./index";

jQuery(() => {
    const settings = new Settings()
    M.AutoInit()
    settings.init()

    const sidebar_buttons = document.querySelectorAll(".function-btn")
    sidebar_buttons.forEach(btn => {
        $(btn).on("click", async (e) => {
            if (self.default.block_requests) return
            self.default.block_requests = true
            Editor.ToggleLoading("Processing")
            const func = e.target.attributes.getNamedItem("data-function"),
                _response = await Request.new(func, Editor.GetValue(), self.default.options)

            if (_response instanceof (Response)) {
                let _response_body = ""
                if (_response.ok) {
                    _response_body = await _response.text()
                    Editor.SetValue(_response_body)
                } else {
                    Editor.SetValue(Request.CreateResponseError("lua", `${_response.statusText} - ${_response.status}`, Editor.GetValue()))
                }
            }
            Editor.ToggleLoading()
            self.default.block_requests = false
        })
    })

    window.modules = {
        jQuery, Request, Editor, self, settings
    }
})

export default {
    block_requests: false,
    options: {
        api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6969/api/goofyuglifier/" : "https://mopsflgithubio.mopsfl.repl.co/api/goofyuglifier/"
    }
}

declare let M: Materialbox
declare global {
    interface Window {
        forceProduction: boolean,
        modules: Object,
        monaco_editor: {
            getEditors: Function
        },
        stringEncode: {
            str2buffer: Function,
            buffer2str: Function
        },
    }
}