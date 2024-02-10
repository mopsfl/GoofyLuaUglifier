/**
 * TODO:
 * quick uglify config
 * custom configs
 * method settings
 */

import jQuery from "jquery";
import { Materialbox } from "materialize-css";
import Request from "./modules/Request";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import LocalStorage from "./modules/LocalStorage";
import QuickActions from "./modules/QuickActions";
import * as self from "./index";
import TimeAgo from "./modules/Time";
import Cookie from "./modules/Cookie";

let clientSession = undefined,
    RobloxConstants_LastUpdated = null

jQuery(async () => {
    const settings = new Settings()
    M.AutoInit()
    settings.init()

    const function_buttons = document.querySelectorAll(".function-btn"),
        sidebar_buttons = document.querySelectorAll(".sidebar-btn")

    const quick_actions = {
        ["copy"]: QuickActions.CopyScript,
        ["download"]: QuickActions.Download,
        ["clear"]: Editor.Clear,
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
                    /*const _start_tick_decomp = new Date().getTime(),
                        _binData = new Uint8Array(atob(_response_body).split('').map(function (x) { return x.charCodeAt(0) }))
                        try {
                            console.log(_binData, _binData.buffer);
                            Editor.SetValue(Utf8ArrayToStr(window.pako.inflate(_binData)))
                            console.log(`Decompressed response. (took ${new Date().getTime() - _start_tick_decomp}ms)`);
                        } catch (error) {
                            console.error(`[Decompression Error]: `, error)
                            Editor.SetValue(Request.CreateResponseError("lua", `${error.message || error} - Decompression Error`, Editor.GetValue()))
                        }*/
                    clientSession = _session
                    console.log(`Uglification process took ${_mstime}ms. (session: ${clientSession})`);
                    Editor.SetValue(_response_body)
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

    async function UpdateRobloxConstantsLastUpdated() {
        await fetch(`${self.default.options.api_url()}cache/RobloxConstants:LastUpdated`).then(res => res.json()).then(res => {
            LocalStorage.Set(settings.config.storage_key, "RobloxConstants:LastUpdated", res)
            RobloxConstants_LastUpdated = res
        }).catch(error => {
            console.error(error)
            const _cached = LocalStorage.GetKey(settings.config.storage_key, "RobloxConstants:LastUpdated")
            RobloxConstants_LastUpdated = _cached
            M.toast({ html: `Error: ${error}` })
        }).finally(() => {
            //$("#rbxc_lastupdated").text(new Intl.RelativeTimeFormat(navigator.language, { style: 'long' }).format(-(new Date().getTime() - RobloxConstants_LastUpdated) / 60000, "minutes"))
            $("#rbxc_lastupdated").text(TimeAgo(RobloxConstants_LastUpdated))
        })
    }

    await UpdateRobloxConstantsLastUpdated()
    $(".rbxc_update").on("click", async () => {
        $(".rbxc_update").addClass("disabled").text("Requesting...")
        await fetch(`${self.default.options.api_url()}constants/update/roblox`, { method: "POST" }).then(res => res.json()).then(async res => {
            M.toast({ html: `Server Response: ${res.message} - ${res.code}${res.error ? `<br>Error: ${res.error}` : ""}` })
            console.log(res);
            await UpdateRobloxConstantsLastUpdated()
        }).finally(() => {
            $(".rbxc_update").removeClass("disabled").text("Update now")
        }).catch(error => {
            console.error(error)
            M.toast({ html: `Error: ${error}` })
        })
    })

    $(".acc_login").on("click", async () => {
        location.replace(`${self.default.options.api_url()}discord/oauth/login`)
    })

    fetch(`${self.default.options.api_url()}discord/oauth/get`, { method: "POST", credentials: 'include' }).then(res => {
        console.log(res.ok);
    }).catch((err) => {
        $(".acc_logout").hide()
        $("#account_username").text("Not logged in")
        $("#account_id").text("N/A")
        $("#discord-avatar").hide()
        console.error(err)
    }).finally(() => {
        if (!Cookie.GetCookie("GLU_acc")) {
            $(".acc_logout").hide()
            $("#account_username").text("Not logged in")
            $("#account_id").text("N/A")
            $("#discord-avatar").hide()
        } else {
            const _account: DiscordAccount = JSON.parse(atob(decodeURIComponent(Cookie.GetCookie("GLU_acc"))))
            if (_account) {
                window.discordAccount = _account
                window.discordAvatar = `https://cdn.discordapp.com/avatars/${_account.id}/${_account.avatar}`
                $("#account_username").text(_account.username)
                $("#account_id").text(_account.id)
                $("#discord-avatar").attr("src", window.discordAvatar)
                $(".acc_login").hide()
                $(".acc_logout").show()
                $(".acc_logout").on("click", () => {
                    Cookie.DeleteCookie("GLU_acc")
                    Cookie.DeleteCookie("GLU_rt")
                    Cookie.DeleteCookie("GLU_ses")
                    window.location.reload()
                })

                console.log(_account);
            }
        }
    })

    fetch(`${self.default.options.api_url()}discord/oauth/isTester`, { method: "POST", credentials: 'include' }).then(res => res.json()).then(res => {
        console.log(res);
        $("#tester_access").text(res == true ? "Yes" : "No")
    })

    window.modules = {
        jQuery, Request, Editor, self, settings, LocalStorage, RobloxConstants_LastUpdated
    }
})

export default {
    block_requests: false,
    options: {
        api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6968/v1/" : "https://goofyluauglifier.mopsfl.de/v1/"
    }
}

export interface DiscordAccount {
    id: string,
    username: string,
    avatar: string
}
declare let M: Materialbox
declare global {
    interface Window {
        forceProduction: boolean,
        discordAccount: DiscordAccount,
        discordAvatar: string,
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