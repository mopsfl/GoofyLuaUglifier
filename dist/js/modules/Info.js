"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const index_1 = __importDefault(require("../index"));
const Info_1 = __importDefault(require("./Info"));
const Utils_1 = __importDefault(require("./Utils"));
exports.default = {
    accountStateFetched: false,
    autoFetchAccountInformation: false,
    AccountPermission_Colors: {
        basic: "#698daf",
        tester: "#ac4a4a",
        developer: "#5fac4a",
    },
    Init() {
        if (Info_1.default.autoFetchAccountInformation)
            Info_1.default.UpdateAccoutState();
        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onOpenStart = (e) => {
            Info_1.default.UpdateStats();
            Info_1.default.UpdateAccoutState();
        };
        (0, jquery_1.default)(".account-login").on("click", async () => {
            location.replace(`${index_1.default.options.mopsfl_api_url()}oauth/login/discord`);
        });
        (0, jquery_1.default)(".account-logout").on("click", () => {
            (0, jquery_1.default)(".acc_logout").text("...").attr("disabled", "disabled");
            fetch(`${index_1.default.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
                Info_1.default.ToggleLoginState(false);
                (0, jquery_1.default)(".acc_logout").text("Logout").removeAttr("disabled");
            });
        });
        console.log(`[Client]: Loaded Info Modal (took ${new Date().getTime() - index_1.default.pageTime}ms).`);
    },
    async UpdateStats() {
        await fetch(`${index_1.default.options.api_url()}api/uglifier/stats`, { cache: "no-store" }).then(async (res) => {
            if (res.ok) {
                const stats = await res.json();
                (0, jquery_1.default)("#total_requests").text(stats.total_requests);
                (0, jquery_1.default)("#total_functions_called").text(stats.total_functions_called);
                return;
            }
            throw new Error(`Unable to update uglifier stats!\n${res.statusText} - ${res.status}`);
        }).catch(err => {
            console.error(err);
        });
    },
    async UpdateAccoutState() {
        if (Info_1.default.accountStateFetched === true)
            return;
        Info_1.default.accountStateFetched = true;
        if (Utils_1.default.GetCookie("_ASID")) {
            fetch(`${index_1.default.options.mopsfl_api_url()}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res) => {
                if (res.code === 0) {
                    console.log("res code 0. not logged in");
                }
                else if (res.oauth === "discord") {
                    await fetch(`${index_1.default.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        (0, jquery_1.default)("#tester_access").text(res == true ? "Yes" : "No");
                        (0, jquery_1.default)("#account-information-perms").text(res == true ? "Tester" : "Basic")
                            .css("background", res == true ? Info_1.default.AccountPermission_Colors.tester : Info_1.default.AccountPermission_Colors.basic);
                    });
                    window.discordAccount = res.user;
                    window.discordAvatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`;
                    Info_1.default.ToggleLoginState(true);
                }
            });
        }
        else
            Info_1.default.ToggleLoginState(false);
    },
    ToggleLoginState(state) {
        if (state === true) {
            (0, jquery_1.default)(".account-login").hide();
            (0, jquery_1.default)("#account-information-perms").show();
            (0, jquery_1.default)("#discord-avatar").show();
            (0, jquery_1.default)(".account-logout").show();
            (0, jquery_1.default)("#account_username").text(window.discordAccount.username);
            (0, jquery_1.default)("#account_id").text(window.discordAccount.id);
            (0, jquery_1.default)("#discord-avatar").attr("src", window.discordAvatar);
            (0, jquery_1.default)(".account-information-user").css("display", "grid");
        }
        else {
            (0, jquery_1.default)(".account-logout").hide();
            (0, jquery_1.default)(".account-login").show();
            (0, jquery_1.default)("#account_username").text("Guest");
            (0, jquery_1.default)("#account_id").text("You are not logged in.");
            (0, jquery_1.default)("#discord-avatar").hide();
            (0, jquery_1.default)(".account-information-user").css("display", "flex");
            (0, jquery_1.default)("#account-information-perms").text("Basic")
                .css("background", Info_1.default.AccountPermission_Colors.basic);
        }
    }
};
