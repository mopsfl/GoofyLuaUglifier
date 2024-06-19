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
})