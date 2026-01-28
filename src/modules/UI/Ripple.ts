export default {
    Init(selector: string = '.ripple-effect'): void {
        const buttons = document.querySelectorAll<HTMLButtonElement | HTMLElement>(selector)

        buttons.forEach(button => {
            let activeRipple: HTMLSpanElement | null = null

            const startRipple = (e: PointerEvent): void => {
                if (e.pointerType === 'mouse' && e.button !== 0) return
                if (button.classList.contains('disabled')) return

                const rect = button.getBoundingClientRect()
                const size = Math.max(rect.width, rect.height)
                const x = e.clientX - rect.left - size / 2
                const y = e.clientY - rect.top - size / 2

                const ripple = document.createElement('span')
                ripple.classList.add('ripple')
                ripple.style.width = ripple.style.height = `${size}px`
                ripple.style.left = `${x}px`
                ripple.style.top = `${y}px`
                ripple.style.setProperty('--ripple-scale', '3')

                button.appendChild(ripple)
                activeRipple = ripple
                button.style.setProperty("transform-origin", `${(e.offsetX / button.clientWidth) * 100}% center`)

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        ripple.style.transform = `scale(var(--ripple-scale))`
                        ripple.style.opacity = '1'
                    })
                })
            }

            const endRipple = (): void => {
                if (!activeRipple) return

                const ripple = activeRipple
                ripple.style.opacity = '0'

                const removeRipple = () => {
                    ripple.remove()
                    ripple.removeEventListener('transitionend', removeRipple)
                }
                ripple.addEventListener('transitionend', removeRipple)

                activeRipple = null
            }

            button.addEventListener('pointerdown', startRipple)
            button.addEventListener('pointerup', endRipple)
            button.addEventListener('pointerleave', endRipple)
            button.addEventListener('pointercancel', endRipple)
        })
    }
}