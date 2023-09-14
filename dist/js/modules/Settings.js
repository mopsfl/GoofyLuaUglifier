"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalStorage_1 = __importDefault(require("./LocalStorage"));
class Settings {
    config;
    constructor(config = {
        storage_key: "_goofyuglifier",
        default_settings: {
            ["settings"]: {
                ["beautify_output"]: false,
                ["test_slider"]: "50",
                ["watermark"]: "",
                ["protect_watermark"]: false,
                ["tester_access_key"]: ""
            }
        }
    }) {
        this.config = config;
        if (!LocalStorage_1.default.Exists(this.config.storage_key)) {
            LocalStorage_1.default.Create(this.config.storage_key, this.config.default_settings);
        }
    }
    init() {
        const _settings = LocalStorage_1.default.GetKey(this.config.storage_key, "settings");
        document.querySelectorAll(".setting").forEach(setting => {
            const input = setting.querySelector("input"), setting_id = $(input).attr("id");
            input.addEventListener("input", (e) => {
                const [setting_name, setting_id, value] = this.HandleInput(e, setting);
                this.UpdateSetting(setting_name, setting_id, value);
            });
            if (setting_id) {
                const value = _settings[setting_id];
                switch (input.type) {
                    case "checkbox":
                        input.checked = value;
                        break;
                    case "range":
                        const range_text = setting.querySelector(".slider-value"), range_text_value = range_text.attributes.getNamedItem("value-type").value || "";
                        range_text.innerText = `${value}${range_text_value}`;
                        input.value = value;
                        break;
                    case "text":
                        input.value = value;
                        break;
                    case "password":
                        input.value = value;
                        break;
                    default:
                        console.warn(`Invalid input type <${input.type}>`);
                        break;
                }
            }
        });
    }
    HandleInput(e, setting) {
        const name = setting.querySelector(".setting-name"), setting_id = $(setting.querySelector("input")).attr("id"), input = setting.querySelector("input");
        let new_value;
        if (e.target instanceof HTMLInputElement && e.target.type === "range") {
            const range_text = setting.querySelector(".slider-value"), range_text_value = range_text.attributes.getNamedItem("value-type").value || "";
            new_value = input.value;
            range_text.innerText = `${input.value}${range_text_value}`;
            //console.log(`${name.innerText}: ${input.value}${range_text_value}`);
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            new_value = input.checked;
            //console.log(`${name.innerText}: ${input.checked}`);
        }
        else if (e.target instanceof HTMLInputElement && e.target.type === "text" || "password") {
            new_value = input.value;
            //console.log(`${name.innerText}: ${input.value}`);
        }
        return [name.innerText, setting_id, new_value];
    }
    UpdateSetting(name, id, value) {
        LocalStorage_1.default.Edit(this.config.storage_key, "settings", id, value);
    }
}
exports.default = Settings;
