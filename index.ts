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
import Utils from "./modules/Utils";

let clientSession = Cookie.GetCookie("_GLUSES") || undefined,
    RobloxConstants_LastUpdated = null,
    accountStateFetched = false


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
                    clientSession = _session
                    console.log(`[Server] Uglification process took ${_mstime}ms. (session: ${clientSession})`);
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
            const func = e.target.attributes.getNamedItem("data-function")?.value
            if (func && quick_actions[func]) {
                try {
                    quick_actions[func]()
                } catch (error) { console.error(`[Quick Action Error]: ${error}`) }
            }
        })
    })

    async function UpdateRobloxConstantsLastUpdated() {
        await fetch(`${self.default.options.api_url()}api/cache/RobloxConstants:LastUpdated`, { cache: "no-store" }).then(res => res.json()).then(res => {
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

    $(".rbxc_update").on("click", async () => {
        $(".rbxc_update").addClass("disabled").text("Requesting...")
        await fetch(`${self.default.options.api_url()}api/constants/update/roblox`, { method: "POST" }).then(res => res.json()).then(async res => {
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

    async function UpdatePresets() {
        await fetch(`${self.default.options.api_url()}api/uglifier/preset`).then(res => res.json()).then((presets: {}) => {
            Object.keys(presets).forEach(presetname => {
                let presetTemplateClone = document.querySelector(".preset").cloneNode(true),
                    presetfuncs = ""
                $(presetTemplateClone).removeClass("hide")
                $(presetTemplateClone).find(".preset-name").text(presetname)
                document.querySelector(".presets-content").append(presetTemplateClone)

                presets[presetname].forEach((_func: string, idx: number) => {
                    presetfuncs += _func + (idx === presets[presetname].length - 1 ? "" : ", ")
                })

                $(presetTemplateClone).find(".preset-funcs").text(presetfuncs)
            })

        })
    }

    async function UpdateStats() {
        await fetch(`${self.default.options.api_url()}api/uglifier/stats`, { cache: "no-store" }).then(res => res.json()).then((stats: UglifierStats) => {
            $("#total_requests").text(stats.total_requests)
            $("#total_functions_called").text(stats.total_functions_called)
        })
    }

    async function UpdateAccoutState() {
        if (accountStateFetched === true) return
        accountStateFetched = true
        if (Cookie.GetCookie("_ASID")) {
            fetch(`${self.default.options.mopsfl_api_url()}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res: OAuthGetResponse) => {
                if (res.code === 0) {
                    $(".acc_logout").hide()
                    $("#account_username").text("Not logged in")
                    $("#account_id").text("N/A")
                    $("#discord-avatar").hide()
                } else if (res.oauth === "discord") {
                    await fetch(`${self.default.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        $("#tester_access").text(res == true ? "Yes" : "No")
                    })
                    window.discordAccount = res.user
                    window.discordAvatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`
                    ToggleLoginState(true)
                }
            })
        } else ToggleLoginState(false)
    }

    /** OAUTH LOGIN - NEW */
    function ToggleLoginState(state: boolean) {
        if (state === true) {
            $(".acc_login").hide()
            $("#discord-avatar").show()
            $(".acc_logout").show()
            $("#account_username").text(window.discordAccount.username)
            $("#account_id").text(window.discordAccount.id)
            $("#discord-avatar").attr("src", window.discordAvatar)
        } else {
            $(".acc_logout").hide()
            $(".acc_login").show()
            $("#account_username").text("Not logged in")
            $("#account_id").text("N/A")
            $("#discord-avatar").hide()
        }
    }

    $(".acc_login").on("click", async () => {
        location.replace(`${self.default.options.mopsfl_api_url()}oauth/login/discord`)
    })

    $(".acc_logout").on("click", () => {
        $(".acc_logout").text("...").attr("disabled", "disabled")
        fetch(`${self.default.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
            ToggleLoginState(false)
            $(".acc_logout").text("Logout").removeAttr("disabled")
        })
    })


    M.Modal.getInstance(document.querySelector("#infomodal")).options.onOpenStart = async () => {
        //UpdatePresets()
        UpdateAccoutState().catch(console.error)
        UpdateRobloxConstantsLastUpdated().catch(console.error)
        UpdateStats().catch(console.error)
    }

    function WaitForEditor() {
        if (typeof window.monaco_editor !== "undefined") {
            if (settings._settings.save_editor_code === true) {
                window.monaco_editor.getEditors()[0].getModel().onDidChangeContent(() => {
                    LocalStorage.Set(settings.config.storage_key, "mEditorValue", Utils.CompressData(Editor.GetValue()))
                })
                const mEditorValue = Utils.UncompressData(LocalStorage.GetKey("_goofyuglifier", "mEditorValue"))
                if (mEditorValue !== "%save_editor_code_DISABLED%") Editor.SetValue(mEditorValue)
            } else {
                LocalStorage.Set(settings.config.storage_key, "mEditorValue", Utils.CompressData("%save_editor_code_DISABLED%"))
            }
        }
        else {
            setTimeout(WaitForEditor, 250);
        }
    }; WaitForEditor()
    /** END */
    /*window.modules = {
        jQuery, Request, Editor, self, settings, LocalStorage, RobloxConstants_LastUpdated
    }*/
})

export default {
    block_requests: false,
    options: {
        api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6968/v1/" : "https://goofyluauglifier.mopsfl.de/v1/",
        mopsfl_api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6969/v1/" : "https://api.mopsfl.de/v1/"
    }
}

export interface DiscordOAuthUserInfo {
    id: string,
    username: string,
    avatar: string
}

export interface RobloxOAuthUserInfo {
    sub: number,
    name: string,
    nickname: string,
    preferred_username: string,
    created_at: number,
    profile: string,
    picture: string
}

export interface OAuthGetResponse {
    code?: number,
    oauth: "discord" | "roblox",
    user: DiscordOAuthUserInfo
}

export interface UglifierStats {
    total_requests: number,
    total_functions_called: number,
    functions: { [_: string]: number }
}

declare let M: Materialbox
declare global {
    interface Window {
        forceProduction: boolean,
        discordAccount: DiscordOAuthUserInfo,
        discordAvatar: string,
        modules: Object,
        monaco_editor: {
            getEditors: Function
        },
        stringEncode: {
            str2buffer: Function,
            buffer2str: Function
        }
    }
}

export interface UglifierSettings {
    test_checkbox: boolean
    beautify_output: boolean
    minify_output: boolean,
    returnwrap_code: boolean,

    save_editor_code: boolean,

    ignore_bytecode: boolean,
    ignore_bytestring: boolean,

    chinese_nonsense_characters: boolean,
    byte_string_type: "Hexadecimal" | "Decimal",

    byte_encrypt_all_constants: boolean,
    rename_global_functions: boolean,

    table_length_number_memestrings: string,
    table_length_number_rate: number,

    protect_watermark: boolean
    target_lua_version: "5.1" | "5.2" | "5.3" | "LuaJIT"

    test_slider: number

    number_transform_offset_length: number,
    use_all_mathoperators_number_transform: boolean,

    watermark: string
    tester_access_key: string,
    bytecode_watermark: string,

    memoize_function_calls: boolean,
    no_decoder_functions: boolean
}