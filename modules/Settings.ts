import LocalStorage from "./LocalStorage";

export default class Settings {
    constructor(
        public config = {
            storage_key: "_goofyuglifier"
        }
    ) {
        if (!LocalStorage.Exists(this.config.storage_key)) {
            LocalStorage.Create(this.config.storage_key, {
                settings: {}
            })
        }
    }

    init() {
        document.querySelectorAll(".setting").forEach(setting => {
            const name: HTMLElement = setting.querySelector(".setting-name")
            const input: HTMLInputElement = setting.querySelector("input")

            input.addEventListener("input", (e) => {
                if (e.target instanceof HTMLInputElement && e.target.type === "range") {
                    const range_text: HTMLElement = setting.querySelector(".slider-value")
                    range_text.innerText = `${input.value}${range_text.attributes.getNamedItem("value-type").value || ""}`
                }
            })
        })
    }
}