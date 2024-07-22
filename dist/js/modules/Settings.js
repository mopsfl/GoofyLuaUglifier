"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const LocalStorage_1 = __importDefault(require("./LocalStorage"));
const jquery_1 = __importDefault(require("jquery"));
class Settings {
    config;
    _settings;
    constructor(config = {
        storage_key: "_goofyuglifier",
        default_settings: {
            ["settings"]: {
                ["beautify_output"]: false,
                ["minify_output"]: false,
                ["target_lua_version"]: "5.3",
                ["save_editor_code"]: false,
                ["chinese_nonsense_characters"]: true,
                ["ignore_bytecode"]: false,
                ["ignore_bytestring"]: true,
                ["watermark"]: "",
                ["protect_watermark"]: false,
                ["tester_access_key"]: "",
                ["byte_encrypt_all_constants"]: false,
                ["rename_global_functions"]: false,
                ["table_length_number_rate"]: 25,
                ["table_length_number_memestrings"]: "",
                ["number_transform_offset_length"]: 999999,
                ["use_all_mathoperators_number_transform"]: false,
                ["memoize_function_calls"]: false,
                ["bytecode_watermark"]: "",
                ["byte_string_type"]: "Decimal",
                ["no_decoder_functions"]: false,
                ["returnwrap_code"]: false,
            }
        },
    }, _settings) {
        this.config = config;
        this._settings = _settings;
        if (!LocalStorage_1.default.Exists(this.config.storage_key)) {
            LocalStorage_1.default.Create(this.config.storage_key, this.config.default_settings);
        }
    }
    Init(reset) {
        if (reset) {
            LocalStorage_1.default.Clear(this.config.storage_key);
            LocalStorage_1.default.Create(this.config.storage_key, this.config.default_settings);
        }
        this._settings = LocalStorage_1.default.GetKey(this.config.storage_key, "settings");
        document.querySelectorAll(".setting").forEach(setting => {
            const input = setting.querySelector("input"), setting_id = (0, jquery_1.default)(input).attr("id");
            if (setting_id) {
                input.addEventListener("input", (e) => {
                    const [setting_name, setting_id, value] = this.HandleInput(e, setting);
                    this.UpdateSetting(setting_name, setting_id, value);
                });
                let value = this._settings[setting_id];
                if (value === undefined) {
                    value = this.config.default_settings.settings[setting_id];
                    this._settings[setting_id] = value;
                    this.UpdateSetting(setting_id, setting_id, value);
                    console.warn(`[Settings]: added missing setting > ${setting_id} = ${this._settings[setting_id]}`);
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
                    case "password":
                        input.value = value;
                        break;
                    default:
                        console.warn(`[Settings]: Invalid input type <${input.type}>`);
                        break;
                }
            }
            else {
                if (input?.classList.contains("select-dropdown")) {
                    let _dropdown_select = (0, jquery_1.default)(input).parent()[0].querySelector("select"), setting_id = _dropdown_select.getAttribute("id"), value = this._settings[setting_id];
                    if (value === undefined) {
                        value = this.config.default_settings.settings[setting_id];
                        this._settings[setting_id] = value;
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
            this.Init(true);
            console.log("Reseted settings to default", this.config.default_settings);
        });
        console.log(`[Client]: Loaded Settings (took ${new Date().getTime() - __1.default.pageTime}ms).`);
    }
    HandleInput(e, setting) {
        const name = setting.querySelector(".setting-name"), setting_id = (0, jquery_1.default)(setting.querySelector("input")).attr("id") || (0, jquery_1.default)(setting).children(".select-wrapper").children("select").attr("id"), input = setting.querySelector("input");
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
