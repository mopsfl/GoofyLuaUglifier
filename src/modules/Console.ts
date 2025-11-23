import $ from "jquery"

export default {
    consoleContainer: $(".console"),
    consoleContent: $(".console>.console-content"),

    log(message: any, type?: "info" | "error" | "warn") {
        const el: JQuery<HTMLElement> = this.createOutputElement(),
            date = new Date()

        const localTime = `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}.`
            + String(date.getMilliseconds()).padStart(3, '0')

        el.text(message).css("--timestamp", `"${localTime} "`)
        type && el.addClass(`${type}-output`)

        this.consoleContent.append(el)
        this.consoleContainer.animate({ scrollTop: 9e9 }, 0)
    },

    createOutputElement(): JQuery<HTMLElement> {
        return $(document.createElement("span")).addClass("console-output")
    },

    pad: (n: number) => String(n).padStart(2, '0')
}