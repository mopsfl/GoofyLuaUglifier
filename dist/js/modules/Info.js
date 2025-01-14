"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const index_1 = __importDefault(require("../index"));
const Info_1 = __importDefault(require("./Info"));
const Utils_1 = __importDefault(require("./Utils"));
const updateItemTemplate = (0, jquery_1.default)(".glu-update-item-template"), updateList = (0, jquery_1.default)(".glu-updates");
exports.default = {
    accountStateFetched: false,
    autoFetchAccountInformation: false,
    _uidInfo: null,
    AccountPermissions: {
        basic: { name: "Basic", color: "#698daf" },
        tester: { name: "Tester", color: "#ac4a4a" },
        developer: { name: "Developer", color: "#5fac4a" },
    },
    Init() {
        if (Info_1.default.autoFetchAccountInformation)
            Info_1.default.UpdateAccoutState();
        fetch(`${index_1.default.options.api_url()}uid`, { credentials: "include" }).then(async (res) => {
            if (!res.ok)
                return console.error(res);
            const uidInfo = await res.json();
            (0, jquery_1.default)(".sidenav-openbtn").attr("notif-count", uidInfo.uN);
            (0, jquery_1.default)(".updates-new-label").attr("notif-count", uidInfo.uN);
        });
        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onOpenStart = async (e) => {
            Info_1.default.UpdateStats();
            Info_1.default.UpdateAccoutState();
            Info_1.default.UpdateChangeLog();
            await fetch(`${index_1.default.options.api_url()}uid/update`, { credentials: "include", method: "POST" }).then(async (res) => {
                if (!res.ok)
                    return console.error(res);
                const uidInfo = await res.json();
                Info_1.default._uidInfo = uidInfo;
                (0, jquery_1.default)(".sidenav-openbtn").attr("notif-count", uidInfo.uN);
            });
        };
        M.Sidenav.getInstance(document.querySelector(".leftmenu-sidebar")).options.onCloseEnd = async () => {
            if (Info_1.default._uidInfo)
                (0, jquery_1.default)(".updates-new-label").attr("notif-count", Info_1.default._uidInfo.uN);
        };
        (0, jquery_1.default)(".account-login").on("click", async () => {
            (0, jquery_1.default)(".account-login").attr("disabled", "disabled");
            location.replace(`${index_1.default.options.mopsfl_api_url()}oauth/login/discord?r=${location.href}`);
        });
        (0, jquery_1.default)(".account-logout").on("click", () => {
            (0, jquery_1.default)(".account-logout").attr("disabled", "disabled");
            fetch(`${index_1.default.options.mopsfl_api_url()}oauth/account/logout`, { credentials: "include" }).then(res => {
                Info_1.default.ToggleLoginState(false);
                (0, jquery_1.default)(".account-logout").removeAttr("disabled");
            });
        });
        console.log(`[Client]: Loaded Info Modal (took ${new Date().getTime() - index_1.default.pageTime}ms).`);
    },
    async UpdateChangeLog() {
        updateList.empty();
        await fetch(`${index_1.default.options.api_url()}api/uglifier/updatelog`).then(res => res.json()).then(res => {
            Object.keys(res).forEach(date => {
                const updateData = res[date], item = updateItemTemplate.contents().clone();
                item.find(".glu-update-date").text(date);
                updateData.forEach(updateContent => {
                    const span = (0, jquery_1.default)(document.createElement("span")), tooltipContent = (0, jquery_1.default)(document.createElement("div"));
                    tooltipContent.attr("id", "tooltip-content").html(updateContent).hide();
                    span.addClass("glu-update-content").addClass("tooltipped");
                    span.attr("data-tooltip-id", "tooltip-content").attr("data-position", "right");
                    span.html(updateContent).attr("title", updateContent.replace(/\<\/?\w+>/gm, ""));
                    item.find(".glu-update-content-list").append(span).append(tooltipContent);
                    //M.Tooltip.init(span)
                });
                item.appendTo(updateList);
            });
        });
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
            await fetch(`${index_1.default.options.mopsfl_api_url()}oauth/account/get`, { credentials: 'include' }).then(res => res.json()).then(async (res) => {
                if (res.code === 403) {
                    Info_1.default.ToggleLoginState(false);
                    (0, jquery_1.default)(".sidenav-loading").hide();
                }
                else if (res.oauth === "discord") {
                    await fetch(`${index_1.default.options.api_url()}oauth/account/isTester`, { credentials: "include" }).then(res => res.json()).then(res => {
                        (0, jquery_1.default)("#account-information-perms").text(Info_1.default.AccountPermissions[res[2]].name || "N/A")
                            .css("background", Info_1.default.AccountPermissions[res[2]].color || Info_1.default.AccountPermissions.basic.color);
                    });
                    window.discordAccount = res.user;
                    window.discordAvatar = `https://cdn.discordapp.com/avatars/${res.user.id}/${res.user.avatar}`;
                    Info_1.default.ToggleLoginState(true);
                }
            });
            (0, jquery_1.default)(".sidenav-loading").hide();
        }
        else {
            Info_1.default.ToggleLoginState(false);
            (0, jquery_1.default)(".sidenav-loading").hide();
        }
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
                .css("background", Info_1.default.AccountPermissions.basic.color);
        }
    }
};
