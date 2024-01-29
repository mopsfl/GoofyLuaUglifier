/**
 * TODO:
 * quick uglify config
 * custom configs
 * method settings
 */

import jQuery from "jquery";
import { Materialbox } from "materialize-css";
import Request, { UglifierHeaders } from "./modules/Request";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import LocalStorage from "./modules/LocalStorage";
import QuickActions from "./modules/QuickActions";
import * as self from "./index";

window.forceProduction = true
let clientSession = undefined

jQuery(() => {
    const settings = new Settings()
    M.AutoInit()
    settings.init()

    const function_buttons = document.querySelectorAll(".function-btn"),
        sidebar_buttons = document.querySelectorAll(".sidebar-btn")

    const quick_actions = {
        ["copy"]: QuickActions.CopyScript,
        ["download"]: QuickActions.Download
    }

    console.log(window.pako);
    function_buttons.forEach(btn => {
        $(btn).on("click", async (e) => {
            if (self.default.block_requests) return
            self.default.block_requests = true
            Editor.ToggleLoading("Processing")
            const func = e.target.attributes.getNamedItem("data-function"),
                _response = await Request.new(func, btoa(String.fromCharCode.apply(null, new Uint16Array(window.pako.gzip(Editor.GetValue())))), self.default.options, LocalStorage.GetKey(settings.config.storage_key, "settings"), clientSession),
                _headers = _response.headers,
                _session = _headers.get("uglifier-session"),
                _mstime = _headers.get("uglifier-ms-time")

            if (_response instanceof (Response)) {
                let _response_body = ""
                if (_response.ok) {
                    _response_body = await _response.text()
                    const _start_tick_decomp = new Date().getTime(),
                        _binData = new Uint8Array(atob(_response_body).split('').map(function (x) { return x.charCodeAt(0) }))
                    clientSession = _session
                    console.log(`Uglification process took ${_mstime}ms. (session: ${clientSession})`);
                    try {
                        console.log(_binData, _binData.buffer);
                        Editor.SetValue(Utf8ArrayToStr(window.pako.inflate(_binData)))
                        console.log(`Decompressed response. (took ${new Date().getTime() - _start_tick_decomp}ms)`);
                    } catch (error) {
                        console.error(`[Decompression Error]: `, error)
                        Editor.SetValue(Request.CreateResponseError("lua", `${error.message || error} - Decompression Error`, Editor.GetValue()))
                    }
                } else {
                    Editor.SetValue(Request.CreateResponseError("lua", `${_response.statusText} - ${_response.status}`, Editor.GetValue()))
                }
            }
            Editor.ToggleLoading()
            self.default.block_requests = false
        })
    })

    sidebar_buttons.forEach(btn => {
        $(btn).on("click", async (e) => {
            const func = e.target.attributes.getNamedItem("data-function").value
            if (func && quick_actions[func]) {
                try {
                    quick_actions[func]()
                } catch (error) { console.error(`[Quick Action Error]: ${error}`) }
            }
        })
    })

    window.modules = {
        jQuery, Request, Editor, self, settings, LocalStorage
    }
})

function Utf8ArrayToStr(array: Array<number>) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}

export default {
    block_requests: false,
    options: {
        api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6969/v1/GoofyLuaUglifier/" : "https://goofyluauglifier.mopsfl.de/api/goofyuglifier/"
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
        pako: {
            inflate: Function,
            deflate: Function,
            gzip: Function,
            ungzip: Function,
        }
    }
}