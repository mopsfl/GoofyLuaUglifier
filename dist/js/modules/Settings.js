"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalStorage_1 = __importDefault(require("./LocalStorage"));
class Settings {
    config;
    constructor(config = {
        storage_key: "_goofyuglifier"
    }) {
        this.config = config;
        if (!LocalStorage_1.default.Exists(this.config.storage_key)) {
            LocalStorage_1.default.Create(this.config.storage_key, {
                settings: {}
            });
        }
    }
    init() {
        document.querySelectorAll(".setting").forEach(setting => {
            const name = setting.querySelector(".setting-name");
            const input = setting.querySelector("input");
            input.addEventListener("input", (e) => {
                if (e.target instanceof HTMLInputElement && e.target.type === "range") {
                    const range_text = setting.querySelector(".slider-value");
                    range_text.innerText = `${input.value}${range_text.attributes.getNamedItem("value-type").value || ""}`;
                }
            });
        });
    }
}
exports.default = Settings;
