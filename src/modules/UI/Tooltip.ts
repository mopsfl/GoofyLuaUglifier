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

                this.positionTooltip(tooltipElement, element)

                tooltipElement.css({
                    opacity: 1,
                    transform: "translateX(0)"
                })
            })

            element.on("mouseleave", () => {
                if (tooltipElement) {
                    tooltipElement.css({
                        opacity: 0,
                        transform: "translateX(6px)"
                    })
                }
            })
        })
    },

    positionTooltip(tooltip: JQuery, target: JQuery) {
        const targetOffset = target.offset()
        if (!targetOffset) return

        const tooltipWidth = tooltip.outerWidth() || 0
        const targetHeight = target.outerHeight() || 0
        const tooltipHeight = tooltip.outerHeight() || 0

        tooltip.css({
            position: "absolute",
            top: targetOffset.top + (targetHeight - tooltipHeight) / 2,
            left: targetOffset.left - tooltipWidth - 20,
            pointerEvents: "none",
            zIndex: 9999
        })
    },

    createTooltipElement(content: string) {
        return $('<div class="tooltip">').html(content)
    }
}
