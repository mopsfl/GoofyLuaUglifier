import { CustomEvents } from "./Misc/CustomEvents"
import LocalStorage from "./Misc/LocalStorage"
import $ from "jquery"

let initialized = false

export default class Settings {
    _data: UglifierSettings | null = null
    _lastdata: UglifierSettings | null = null
    _inputs = new Map<string, JQuery<HTMLInputElement>>()
    _events = new Map<string, CustomEvent>()

    settingsModal = $("#settings-modal")
    settingsContent = $("#settings-modal>.modal-content")
    settingTemplateElement = $(".template-setting")
    settingsResetDefault = $("#settings-reset-default")

    constructor(
        public storageKey = "_GLUStorage"
    ) {
        if (!LocalStorage.Exists(this.storageKey)) {
            LocalStorage.Create(this.storageKey, { settings: this.defaultSettings })
        } else if (!LocalStorage.Get(this.storageKey, "settings")) {
            LocalStorage.Set(this.storageKey, "settings", this.defaultSettings)
        }
    }

    Init() {
        if (initialized) throw Error("Settings module is already initialized!")

        const initTime = Date.now()

        this._data = LocalStorage.Get<UglifierSettings>(this.storageKey, "settings", this.defaultSettings)
        this._lastdata = this._data

        this.settingsList.forEach(setting => {
            const element = this.settingTemplateElement.contents().clone()
            element.children(`:not(#${setting.type === "number" ? "text" : setting.type}, .setting-name)`).remove()

            const input = element.find<HTMLInputElement>(".settinginput")
            if (input.length === 0) {
                element.remove()
                console.warn(`unable to add setting '${setting.id}'. (missing input element)`)

                return
            }

            element.find(".setting-name")
                .addClass("tooltipped")
                .attr("tooltip-align", "right")
                .attr("tooltip-content", setting.description)
                .text(setting.name)

            input.attr("id", setting.id)
            input.on(setting.type === "dropdown" ? "change" : "input", () => this.UpdateSetting(setting, input))
            this._data[setting.id] ??= this.defaultSettings[setting.id]

            switch (setting.type) {
                case "checkbox":
                    input.prop("checked", this._data[setting.id])
                    break;
                case "text":
                    input.val(this._data[setting.id])
                    break;
                case "number":
                    input.val(parseInt(this._data[setting.id]))
                    break;
                case "dropdown":
                    setting.values?.forEach((value, index) => {
                        input.append($(document.createElement("option")).attr("value", index).text(value))
                    })

                    const options: HTMLOptionsCollection = input.prop("options")

                    if (!options.item(this._data[setting.id])) {
                        this._data[setting.id] = setting.values[this.defaultSettings[setting.id]]
                        this.UpdateSetting(setting, input)
                    }

                    input.val(this._data[setting.id])
                    break;
                default:
                    console.warn(`unable to set setting value for '${setting.id}'. (unknown input type)`)
                    break;
            }

            element.appendTo(this.settingsContent)

            this._inputs.set(setting.id, input)
            this._events.set(setting.id, CustomEvents.CreateEvent(setting.id))
        })

        this.settingsResetDefault.on("click", () => {
            Object.keys(this.defaultSettings).forEach(key => {
                const setting = this.settingsList.find(setting => setting.id === key)
                if (!setting) return

                this.UpdateSetting(setting, this._inputs.get(setting.id)!, true)
            })
        })

        initialized = true
        console.log(`Loaded Settings. (took ${Date.now() - initTime}ms)`);
        return this
    }

    UpdateSetting(setting: Setting, input: JQuery<HTMLInputElement>, reset?: boolean) {
        let value = null
        switch (setting.type) {
            case "checkbox":
                value = reset ? this.defaultSettings[setting.id] : input.prop("checked")
                input.prop("checked", value)
                break;
            case "text":
                value = reset ? this.defaultSettings[setting.id] : input.prop("value")
                input.val(value)
                break;
            case "number":
                let raw = input.val().toString().trim();

                if (raw === "") {
                    value = 0
                } else {
                    value = reset ? this.defaultSettings[setting.id] : parseFloat(raw)

                    if (Number.isNaN(value)) {
                        value = this._lastdata[setting.id];
                    }
                }

                input.val(value);
                break;
            case "dropdown":
                value = reset ? this.defaultSettings[setting.id] : parseInt(input.prop("value"))
                input.val(value)
                break;
        }

        if (value === null) return console.warn(`unable to update setting value for '${setting.id}'. (unknown input type)`)

        this._lastdata = this._data
        this._data[setting.id] = value
        LocalStorage.Edit(this.storageKey, "settings", setting.id, value)

        if (this._events.get(setting.id)) CustomEvents.DispatchEvent(window, this._events.get(setting.id))
    }

    GetSettings(id?: string) {
        const parsedSettings = {}

        Object.keys(this._data ?? {}).forEach(key => {
            const setting = this.settingsList.find(setting => setting.id === key)
            if (!setting) return

            if (setting.type === "dropdown") {
                parsedSettings[setting.id] = setting.values[this._data[setting.id]]
            } else parsedSettings[setting.id] = this._data[setting.id]
        })

        return id ? parsedSettings[id] : parsedSettings
    }

    defaultSettings: UglifierSettings = {
        minify_output: false,
        remove_type_annotations: false,
        number_transform_offset: 999999,
        vm_watermark: "GLU",
        hide_console: false,
        test3: 0,
    }

    settingsList: Setting[] = [
        { name: "Minify Output", id: "minify_output", type: "checkbox", description: "Automatically minifies your code to make it as compact as possible." },
        { name: "Remove Type Annotations", id: "remove_type_annotations", type: "checkbox", description: "Automatically removes all LuaU type annotations to prevent syntax errors." },
        { name: "Number Transform Offset", id: "number_transform_offset", type: "number", description: "Maximum random offset applied when transforming numbers." },
        { name: "VM Watermark", id: "vm_watermark", type: "text", description: "The watermark which is placed infront of the VM Bytecode." },
        { name: "Dropdown", id: "test3", type: "dropdown", description: "test", values: ["value1", "value2"] },
        { name: "Hide Output Console (Soon)", id: "hide_console", type: "checkbox", description: "Hides the output console." },
    ]
}

export type Setting = {
    name: string
    id: string
    description: string
    type: "text" | "number" | "checkbox" | "dropdown",
    values?: string[],
}

export type UglifierSettings = {
    minify_output: boolean,
    remove_type_annotations: boolean,
    number_transform_offset: number,
    vm_watermark: string,
    hide_console: boolean,
    test3: number,
}