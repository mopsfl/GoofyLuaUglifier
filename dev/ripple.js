document.querySelectorAll('.ripple-effect').forEach(button => {
    const startRipple = (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return

        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        const ripple = document.createElement("span")
        ripple.classList.add("ripple")
        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"

        ripple.style.setProperty("--ripple-scale", 3)

        button.appendChild(ripple)
        button._activeRipple = ripple

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                ripple.style.transform = `scale(var(--ripple-scale))`
            })
        })
    }

    const endRipple = () => {
        const ripple = button._activeRipple
        if (!ripple) return

        ripple.style.opacity = 0

        setTimeout(() => {
            ripple.remove()
        }, 600)

        button._activeRipple = null
    }

    button.addEventListener("pointerdown", startRipple)
    button.addEventListener("pointerup", endRipple)
    button.addEventListener("pointerleave", endRipple)
    button.addEventListener("pointercancel", endRipple)
})