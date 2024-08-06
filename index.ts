// todo: fully move settings to automated thing so i dont have to copy paste elements everytime i wanna make a new setting

import $ from "jquery";
import Editor from "./modules/Editor";
import Settings from "./modules/Settings";
import Functions from "./modules/Functions";
import Utils from "./modules/Utils";
import Info from "./modules/Info";
import "@materializecss/materialize"
import * as monaco from "monaco-editor"

const settings = new Settings()

$(() => {
    settings.Init()
    Functions.Init()
    Editor.Init()
    Info.Init()
    M.AutoInit()
})

$.readyException = (err => {
    console.error(err)
    Editor.ToggleLoading(`<div class="pageinit_error"><h5>Application error: a client-side exception has occurred!</h5><br><br><span>${err.name}: ${err.message}<br>Stack:<br>${err.stack.replace(/\s/gm, "<br>")}</span></div>`, true, true)
})

export default {
    editor: monaco.editor.CodeEditor,
    options: {
        api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6968/v1/" : "https://goofyluauglifier.mopsfl.de/v1/",
        mopsfl_api_url: () => (location.hostname == "localhost" && !window.forceProduction) ? "http://localhost:6969/v1/" : "https://api.mopsfl.de/v1/"
    },
    clientSession: Utils.GetCookie("_GLUSES") || undefined,
    pageTime: new Date().getTime(),
    settings,
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

declare global {
    interface Window {
        forceProduction: boolean,
        modules: Object,
        discordAccount: DiscordOAuthUserInfo,
        discordAvatar: string
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