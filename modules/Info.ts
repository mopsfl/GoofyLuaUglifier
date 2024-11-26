import $ from "jquery";
import index, { OAuthGetResponse, SessionInfo, UglifierStats, UIDInfo } from "../index"
import self from "./Info"
import Utils from "./Utils"

const updateItemTemplate = $(".glu-update-item-template"),
    updateList = $(".glu-updates")

export default {
    accountStateFetched: false,
    autoFetchAccountInformation: false,

    _uidInfo: null,

    AccountPermissions: {
        basic: { name: "Basic", color: "#698daf" },
        tester: { name: "Tester", color: "#ac4a4a" },
        developer: { name: "Developer", color: "#5fac4a" },
    },

    Init() {
        if (self.autoFetchAccountInformation) self.UpdateAccoutState()

        fetch(`${index.options.api_url()}uid`, { credentials: "include" }).then(async res => {
            if (!res.ok) return console.error(res)
            const uidInfo: UIDInfo = await res.json()
            $(".sidenav-openbtn").attr("notif-count", uidInfo.uN)
            $(".updates-new-label").attr("notif-count", uidInfo.uN)
        })

        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onOpenStart = async (e) => {
            self.UpdateStats()
            self.UpdateAccoutState()
            self.UpdateChangeLog()

            await fetch(`${index.options.api_url()}uid/update`, { credentials: "include", method: "POST" }).then(async res => {
                if (!res.ok) return console.error(res)
                const uidInfo: UIDInfo = await res.json()
                self._uidInfo = uidInfo
                $(".sidenav-openbtn").attr("notif-count", uidInfo.uN)
            })
        }

        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onCloseEnd = async () => {
            if (self._uidInfo) $(".updates-new-label").attr("notif-count", self._uidInfo.uN)
        }

        $(".account-login").on("click", async () => {
            $(".account-login").attr("disabled", "disabled")
            location.replace(`${index.options.mopsfl_api_url()}oauth/login/discord?r=${location.href}`)
        })

        $(".account-logout").on("click", () => {
            $(".account-logout").attr("disabled", "disabled")
            fetch(`${index.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
                self.ToggleLoginState(false)
                $(".account-logout").removeAttr("disabled")
            })
        })

        console.log(`[Client]: Loaded Info Modal (took ${new Date().getTime() - index.pageTime}ms).`)
    },

    async UpdateChangeLog() {
        updateList.empty()
        await fetch(`${index.options.api_url()}api/uglifier/updatelog`).then(res => res.json()).then(res => {
            Object.keys(res).forEach(date => {
                const updateData: Array<string> = res[date],
                    item = updateItemTemplate.contents().clone()
                item.find(".glu-update-date").text(date)

                updateData.forEach(updateContent => {
                    const span = $(document.createElement("span")),
                        tooltipContent = $(document.createElement("div"))

                    tooltipContent.attr("id", "tooltip-content").html(updateContent).hide()
                    span.addClass("glu-update-content").addClass("tooltipped")
                    span.attr("data-tooltip-id", "tooltip-content").attr("data-position", "right")

                    span.html(updateContent).attr("title", updateContent.replace(/\<\/?\w+>/gm, ""))
                    item.find(".glu-update-content-list").append(span).append(tooltipContent)

                    //M.Tooltip.init(span)
                })

                item.appendTo(updateList)
            })
        })
    },

    async UpdateStats() {
        await fetch(`${index.options.api_url()}api/uglifier/stats`, { cache: "no-store" }).then(async (res: Response) => {
            if (res.ok) {
                const stats: UglifierStats = await res.json()
                $("#total_requests").text(stats.total_requests)
                $("#total_functions_called").text(stats.total_functions_called)
                return
            }

            throw new Error(`Unable to update uglifier stats!\n${res.statusText} - ${res.status}`)
        }).catch(err => {
            console.error(err);
        })
    },

    async UpdateAccoutState() {
        if (self.accountStateFetched === true) return
        self.accountStateFetched = true
        if (Utils.GetCookie("_ASID")) {
            await fetch(`${index.options.mopsfl_api_url()}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res: OAuthGetResponse) => {
                if (res.code === 403) {
                    self.ToggleLoginState(false)
                    $(".sidenav-loading").hide()
                } else if (res.oauth === "discord") {
                    await fetch(`${index.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        $("#account-information-perms").text(self.AccountPermissions[res[2]].name || "N/A")
                            .css("background", self.AccountPermissions[res[2]].color || self.AccountPermissions.basic.color)

                    })
                    window.discordAccount = res.user
                    window.discordAvatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`
                    self.ToggleLoginState(true)
                }
            })
            $(".sidenav-loading").hide()
        } else {
            self.ToggleLoginState(false)
            $(".sidenav-loading").hide()
        }
    },

    ToggleLoginState(state: boolean) {
        if (state === true) {
            $(".account-login").hide()
            $("#account-information-perms").show()
            $("#discord-avatar").show()
            $(".account-logout").show()
            $("#account_username").text(window.discordAccount.username)
            $("#account_id").text(window.discordAccount.id)
            $("#discord-avatar").attr("src", window.discordAvatar)
            $(".account-information-user").css("display", "grid")
        } else {
            $(".account-logout").hide()
            $(".account-login").show()
            $("#account_username").text("Guest")
            $("#account_id").text("You are not logged in.")
            $("#discord-avatar").hide()
            $(".account-information-user").css("display", "flex")
            $("#account-information-perms").text("Basic")
                .css("background", self.AccountPermissions.basic.color)
        }
    }
}