import jQuery from "jquery";
import { Materialbox } from "materialize-css";

jQuery(async () => {
    M.AutoInit()

    document.querySelectorAll(".docs-collapsible-item").forEach(_coll => {
        const _collapsible = M.Collapsible.getInstance(_coll)
        const _collapsibleLI = _collapsible.el.querySelector("li")

        if (_collapsibleLI.classList.contains("active")) {
            const _collapsibleIcon = _collapsible.el.querySelector(".collapsible-icon")
            _collapsibleIcon && _collapsibleIcon.classList.add("collopen")
        }
        _collapsible.options.onOpenStart = (el) => {
            const _collapsibleIcon = el.querySelector(".collapsible-icon")
            _collapsibleIcon && _collapsibleIcon.classList.add("collopen")
        }

        _collapsible.options.onCloseStart = (el) => {
            const _collapsibleIcon = el.querySelector(".collapsible-icon")
            _collapsibleIcon && _collapsibleIcon.classList.remove("collopen")
        }
    })

    document.querySelectorAll(".docs-endpoint").forEach(_el => {
        const _copybtn = _el.querySelector(".docs-endpoint-copy")
        if (_copybtn) {
            _copybtn.addEventListener("click", (e) => {
                const _content = _el.querySelector(".docs-endpoint-path")?.attributes["data-copycontent"]?.value
                if (_content) {
                    navigator.clipboard.writeText(_content).then(() => {
                        _copybtn.textContent = "COPIED!"
                        setTimeout(() => {
                            _copybtn.textContent = "COPY"
                        }, 1000);
                    }).catch(console.error)
                }
            })

            _el.addEventListener("mouseenter", () => _copybtn.classList.remove("copyhide"))
            _el.addEventListener("mouseleave", () => _copybtn.classList.add("copyhide"))
        }
    })

})