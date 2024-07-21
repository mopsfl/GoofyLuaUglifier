"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const Info_1 = __importDefault(require("./Info"));
const Utils_1 = __importDefault(require("./Utils"));
exports.default = {
    accountStateFetched: false,
    Init() {
        const infoModalBtn = $(".infomodal-openbtn");
        infoModalBtn.on("click", () => {
            Info_1.default.UpdateStats();
            Info_1.default.UpdateAccoutState();
        });
        $(".acc_login").on("click", async () => {
            location.replace(`${index_1.default.options.mopsfl_api_url()}oauth/login/discord`);
        });
        $(".acc_logout").on("click", () => {
            $(".acc_logout").text("...").attr("disabled", "disabled");
            fetch(`${index_1.default.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
                Info_1.default.ToggleLoginState(false);
                $(".acc_logout").text("Logout").removeAttr("disabled");
            });
        });
    },
    async UpdateStats() {
        await fetch(`${index_1.default.options.api_url()}api/uglifier/stats`, { cache: "no-store" }).then(async (res) => {
            if (res.ok) {
                const stats = await res.json();
                $("#total_requests").text(stats.total_requests);
                $("#total_functions_called").text(stats.total_functions_called);
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
                    $(".acc_logout").hide();
                    $("#account_username").text("Not logged in");
                    $("#account_id").text("N/A");
                    $("#discord-avatar").hide();
                }
                else if (res.oauth === "discord") {
                    await fetch(`${index_1.default.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        $("#tester_access").text(res == true ? "Yes" : "No");
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
            $(".acc_login").hide();
            $("#discord-avatar").show();
            $(".acc_logout").show();
            $("#account_username").text(window.discordAccount.username);
            $("#account_id").text(window.discordAccount.id);
            $("#discord-avatar").attr("src", window.discordAvatar);
        }
        else {
            $(".acc_logout").hide();
            $(".acc_login").show();
            $("#account_username").text("Not logged in");
            $("#account_id").text("N/A");
            $("#discord-avatar").hide();
        }
    }
};
