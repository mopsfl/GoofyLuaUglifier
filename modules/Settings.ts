import index, { UglifierSettings } from "..";
import LocalStorage from "./LocalStorage";
import $ from "jquery";

export default class Settings {
    constructor(
        public config = {
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
                    ["number_nonsense_length_limit"]: 100,
                    ["use_all_mathoperators_number_transform"]: false,
                    ["memoize_function_calls"]: false,
                    ["bytecode_watermark"]: "",
                    ["byte_string_type"]: "Decimal",
                    ["no_decoder_functions"]: false,
                    ["returnwrap_code"]: false,
                }
            },
        },
        public _settings?: UglifierSettings
    ) {
        if (!LocalStorage.Exists(this.config.storage_key)) {
            LocalStorage.Create(this.config.storage_key, this.config.default_settings)
        }
    }

    Init(reset?: boolean) {
        if (reset) {
            LocalStorage.Clear(this.config.storage_key)
            LocalStorage.Create(this.config.storage_key, this.config.default_settings)
        }

        this._settings = LocalStorage.GetKey(this.config.storage_key, "settings")
        document.querySelectorAll(".setting").forEach(setting => {
            const input: HTMLInputElement = setting.querySelector("input"),
                setting_id = $(input).attr("id")

            if (setting_id) {
                input.addEventListener("input", (e) => {
                    const [setting_name, setting_id, value] = this.HandleInput(e, setting)
                    this.UpdateSetting(setting_name, setting_id, value)
                })
                let value = this._settings[setting_id]
                if (value === undefined) {
                    value = this.config.default_settings.settings[setting_id];
                    this._settings[setting_id] = value
                    this.UpdateSetting(setting_id, setting_id, value)
                    console.warn(`[Settings]: added missing setting > ${setting_id} = ${this._settings[setting_id]}`);
                }
                switch (input.type) {
                    case "checkbox":
                        input.checked = value
                        break;
                    case "range":
                        const range_text: HTMLElement = setting.querySelector(".slider-value"),
                            range_text_value = range_text.attributes.getNamedItem("value-type").value || ""
                        range_text.innerText = `${value}${range_text_value}`
                        input.value = value
                        break;
                    case "text":
                    case "password":
                    case "number":
                        input.value = value
                        break;
                    default:
                        console.warn(`[Settings]: Invalid input type <${input.type}>`)
                        break;
                }
            } else {
                // todo: fix select dropdown setting
                /*if (setting?.classList.contains("select-dropdown")) {
                    let _dropdown_select = setting.querySelector("select"),
                        setting_id = _dropdown_select.getAttribute("id"),
                        value = this._settings[setting_id]

                    if (value === undefined) {
                        value = this.config.default_settings.settings[setting_id];
                        this._settings[setting_id] = value
                        console.warn(`[Settings]: added missing setting > ${setting_id}`);
                    }

                    input.value = value
                    _dropdown_select.value = value
                    _dropdown_select.addEventListener("change", (e) => {
                        const [setting_name, setting_id, value] = this.HandleInput(e, setting)
                        this.UpdateSetting(setting_name, setting_id, value)
                    })
                }*/
            }
        })

        document.querySelector("#resetdefault").addEventListener("click", (e) => {
            this.Init(true)
            console.log("Reseted settings to default", this.config.default_settings);
        })

        document.querySelector(".settings-open").addEventListener("click", () => {
            new M.Modal(document.querySelector("#settingsmodal")).open()
        })

        console.log(`[Client]: Loaded Settings (took ${new Date().getTime() - index.pageTime}ms).`);
    }

    HandleInput(e: Event, setting: Element): [string, string, boolean | string | number] {
        const name: HTMLElement = setting.querySelector(".setting-name"),
            setting_id = $(setting.querySelector("input")).attr("id") || $(setting).children(".select-wrapper").children("select").attr("id"),
            input: HTMLInputElement = setting.querySelector("input")

        let new_value: boolean | string | number
        if (e.target instanceof HTMLInputElement && e.target.type === "range") {
            const range_text: HTMLElement = setting.querySelector(".slider-value"),
                range_text_value = range_text.attributes.getNamedItem("value-type").value || ""
            new_value = input.value
            range_text.innerText = `${input.value}${range_text_value}`
            //console.log(`${name.innerText}: ${input.value}${range_text_value}`);
        } else if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
            new_value = input.checked
            //console.log(`${name.innerText}: ${input.checked}`);
        } else if (e.target instanceof HTMLInputElement && e.target.type === "text" || "password") {
            new_value = input.value
            //console.log(`${name.innerText}: ${input.value}`);
        }
        return [name.innerText, setting_id, new_value]
    }

    UpdateSetting(name: string, id: string, value: boolean | string | number) {
        console.log(name, id, value);
        LocalStorage.Edit(this.config.storage_key, "settings", id, value)
    }
}