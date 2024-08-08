import $ from "jquery";
import index, { OAuthGetResponse, UglifierStats } from "../index"
import self from "./Info"
import Utils from "./Utils"

export default {
    accountStateFetched: false,
    autoFetchAccountInformation: false,

    AccountPermission_Colors: {
        basic: "#698daf",
        tester: "#ac4a4a",
        developer: "#5fac4a",
    },

    Init() {
        if (self.autoFetchAccountInformation) self.UpdateAccoutState()

        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onOpenStart = (e) => {
            self.UpdateStats()
            self.UpdateAccoutState()
        }

        $(".account-login").on("click", async () => {
            location.replace(`${index.options.mopsfl_api_url()}oauth/login/discord`)
        })

        $(".account-logout").on("click", () => {
            $(".acc_logout").text("...").attr("disabled", "disabled")
            fetch(`${index.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
                self.ToggleLoginState(false)
                $(".acc_logout").text("Logout").removeAttr("disabled")
            })
        })

        console.log(`[Client]: Loaded Info Modal (took ${new Date().getTime() - index.pageTime}ms).`)
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
            fetch(`${index.options.mopsfl_api_url()}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res: OAuthGetResponse) => {
                if (res.code === 0) {
                    console.log("res code 0. not logged in");
                } else if (res.oauth === "discord") {
                    await fetch(`${index.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        $("#tester_access").text(res == true ? "Yes" : "No")
                        $("#account-information-perms").text(res == true ? "Tester" : "Basic")
                            .css("background", res == true ? self.AccountPermission_Colors.tester : self.AccountPermission_Colors.basic)

                    })
                    window.discordAccount = res.user
                    window.discordAvatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`
                    self.ToggleLoginState(true)
                }
            })
        } else self.ToggleLoginState(false)
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
                .css("background", self.AccountPermission_Colors.basic)
        }
    }
}