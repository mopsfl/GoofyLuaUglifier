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
                ["target_lua_version"]: "5.3",
                ["ignore_bytecode"]: false,
                ["ignore_bytestring"]: true,
                ["watermark"]: "",
                ["protect_watermark"]: false,
                ["tester_access_key"]: "",
                ["rename_global_functions"]: false,
                ["table_length_number_rate"]: 25,
                ["table_length_number_memestrings"]: ""
            }
        }
    }) {
        this.config = config;
        if (!LocalStorage_1.default.Exists(this.config.storage_key)) {
            LocalStorage_1.default.Create(this.config.storage_key, this.config.default_settings);
        }
    }
    init(reset) {
        let _settings;
        if (reset) {
            LocalStorage_1.default.Clear(this.config.storage_key);
            LocalStorage_1.default.Create(this.config.storage_key, this.config.default_settings);
        }
        _settings = LocalStorage_1.default.GetKey(this.config.storage_key, "settings");
        document.querySelectorAll(".setting").forEach(setting => {
            const input = setting.querySelector("input"), setting_id = $(input).attr("id");
            if (setting_id) {
                input.addEventListener("input", (e) => {
                    const [setting_name, setting_id, value] = this.HandleInput(e, setting);
                    this.UpdateSetting(setting_name, setting_id, value);
                });
                let value = _settings[setting_id];
                if (value === undefined) {
                    value = this.config.default_settings.settings[setting_id];
                    _settings[setting_id] = value;
                    this.UpdateSetting(setting_id, setting_id, value);
                    console.warn(`[Settings]: added missing setting > ${setting_id} = ${_settings[setting_id]}`);
                }
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
            else {
                if (input.classList.contains("select-dropdown")) {
                    let _dropdown_select = $(input).parent()[0].querySelector("select"), setting_id = _dropdown_select.getAttribute("id"), value = _settings[setting_id];
                    if (value === undefined) {
                        value = this.config.default_settings.settings[setting_id];
                        _settings[setting_id] = value;
                        console.warn(`[Settings]: added missing setting > ${setting_id}`);
                    }
                    input.value = value;
                    _dropdown_select.value = value;
                    _dropdown_select.addEventListener("change", (e) => {
                        const [setting_name, setting_id, value] = this.HandleInput(e, setting);
                        this.UpdateSetting(setting_name, setting_id, value);
                    });
                }
            }
        });
        document.querySelector("#resetdefault").addEventListener("click", (e) => {
            this.init(true);
            console.log("Reseted settings to default", this.config.default_settings);
        });
    }
    HandleInput(e, setting) {
        console.log(setting);
        const name = setting.querySelector(".setting-name"), setting_id = $(setting.querySelector("input")).attr("id") || $(setting).children(".select-wrapper").children("select").attr("id"), input = setting.querySelector("input");
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
        console.log(`Saved '${name}' setting to localStorage > ${value}`);
    }
}
exports.default = Settings;
