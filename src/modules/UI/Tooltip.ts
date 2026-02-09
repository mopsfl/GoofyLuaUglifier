import $ from "jquery"

export default {
    Init() {
        $(".tooltipped").each((_, e) => {
            const element = $(e)
            let tooltipElement: JQuery | null = null

            element.on("mouseenter", () => {
                const tooltipContent = element.attr("tooltip-content")
                if (!tooltipContent) return

                if (!tooltipElement) {
                    tooltipElement = this.createTooltipElement(tooltipContent)
                    tooltipElement.appendTo(document.body)
                }

                const align = element.attr("tooltip-align") || "left"
                this.positionTooltip(tooltipElement, element, align)

                tooltipElement.css({
                    opacity: 1,
                    transform: this.getShowTransform(align)
                })
            })

            element.on("mouseleave", () => {
                if (tooltipElement) {
                    const align = element.attr("tooltip-align") || "left"
                    tooltipElement.css({
                        opacity: 0,
                        transform: this.getHideTransform(align)
                    })
                }
            })
        })
    },

    positionTooltip(tooltip: JQuery, target: JQuery, align: string) {
        const targetOffset = target.offset()
        if (!targetOffset) return

        const spacing = 20
        const tooltipWidth = tooltip.outerWidth() || 0
        const tooltipHeight = tooltip.outerHeight() || 0
        const targetWidth = target.outerWidth() || 0
        const targetHeight = target.outerHeight() || 0

        let top = targetOffset.top
        let left = targetOffset.left

        switch (align) {
            case "top":
                top = targetOffset.top - tooltipHeight - spacing
                left = targetOffset.left + (targetWidth - tooltipWidth) / 2
                break
            case "bottom":
                top = targetOffset.top + targetHeight + spacing
                left = targetOffset.left + (targetWidth - tooltipWidth) / 2
                break
            case "right":
                top = targetOffset.top + (targetHeight - tooltipHeight) / 2
                left = targetOffset.left + targetWidth + spacing
                break
            case "left":
            default:
                top = targetOffset.top + (targetHeight - tooltipHeight) / 2
                left = targetOffset.left - tooltipWidth - spacing
                break
        }

        tooltip.css({
            position: "absolute",
            top: top,
            left: left,
            pointerEvents: "none",
            zIndex: 9999
        })
    },

    getShowTransform(align: string) {
        switch (align) {
            case "top": return "translateY(6px)"
            case "bottom": return "translateY(-6px)"
            case "right": return "translateX(-6px)"
            case "left":
            default: return "translateX(6px)"
        }
    },

    getHideTransform(align: string) {
        switch (align) {
            case "top": return "translateY(0)"
            case "bottom": return "translateY(0)"
            case "right": return "translateX(0)"
            case "left":
            default: return "translateX(0)"
        }
    },

    createTooltipElement(content: string) {
        return $('<div class="tooltip">')
            .html(content)
            .css({
                opacity: 0,
                transform: "translateX(6px)"
            })
    }
}
