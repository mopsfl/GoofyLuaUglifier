import * as monaco from "monaco-editor"
import Settings from "./Settings"
import Console from "./Console"
import Utils from "./Misc/Utils"
import $ from "jquery"

export default {
    token: null,
    session: null,
    editor: null,
    settings: null,
    account: null,
    endpoints: {
        goofyLuaUglifierApi: null,
        mopsflApi: null
    },

    async Init() {
        const initTime = Date.now(),
            consoleDiv = $(".console"),
            consoleResizeHandle = consoleDiv.find(".resize-handle")

        this.endpoints.goofyLuaUglifierApi = location.hostname === "localhost" ? "http://localhost:6968/api/" : "https://goofyluauglifier.mopsfl.de/api/"
        this.endpoints.mopsflApi = location.hostname === "localhost" ? "http://localhost:6969/v1/" : "https://api.mopsfl.de/v1/"

        await this.UpdateCsfrToken()
        await this.FetchAccount()


        consoleResizeHandle.on("pointerdown", (e) => {
            e.preventDefault()

            const startY = e.clientY
            const startHeight = consoleDiv.height()!

            function onPointerMove(e: PointerEvent) {
                const dy = e.clientY - startY
                consoleDiv.css("height", Math.max(startHeight - dy, 10) + "px")
            }

            function onPointerUp() {
                document.removeEventListener("pointermove", onPointerMove)
                document.removeEventListener("pointerup", onPointerUp)
            }

            document.addEventListener("pointermove", onPointerMove)
            document.addEventListener("pointerup", onPointerUp)
        })

        Console.log(`Welcome to GoofyLuaUglifier${this.account ? `, ${this.account.user.username}!` : "!"}`, "info")
        console.log(`Loaded Client (took ${Date.now() - initTime}ms).`)
    },

    async UpdateCsfrToken() {
        await fetch(`${this.endpoints.goofyLuaUglifierApi}ide`, { credentials: "include" }).then(res => res.json()).then(res => {
            this.token = res.token
        }).catch(error => {
            console.error(error)
            Console.log("unable to update client authentication token! check developer console for more information.", "error")
        })
    },

    async FetchAccount() {
        if (this.account) return
        if (Utils.GetCookie("_ASID")) {
            await fetch(`${this.endpoints.mopsflApi}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res: AccountInformation) => {
                if (res.code === 403) {
                    console.warn(res);
                } else if (res.oauth === "discord") {
                    this.account = res
                    this.account.user.avatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`
                }
            })
        }
    }
} as {
    Init: () => void
    UpdateCsfrToken: () => void

    token: string,
    session: string,
    account: AccountInformation,
    editor: monaco.editor.IStandaloneCodeEditor
    settings: Settings
    endpoints: {
        goofyLuaUglifierApi: string,
        mopsflApi: string,
    }
}

export interface AccountInformation {
    code?: number,
    oauth: "discord" | "roblox",
    user: {
        id: string,
        username: string,
        avatar: string
    }
}