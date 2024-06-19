"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
(0, jquery_1.default)(async () => {
    M.AutoInit();
    document.querySelectorAll(".docs-collapsible-item").forEach(_coll => {
        const _collapsible = M.Collapsible.getInstance(_coll);
        const _collapsibleLI = _collapsible.el.querySelector("li");
        if (_collapsibleLI.classList.contains("active")) {
            const _collapsibleIcon = _collapsible.el.querySelector(".collapsible-icon");
            _collapsibleIcon && _collapsibleIcon.classList.add("collopen");
        }
        _collapsible.options.onOpenStart = (el) => {
            const _collapsibleIcon = el.querySelector(".collapsible-icon");
            _collapsibleIcon && _collapsibleIcon.classList.add("collopen");
        };
        _collapsible.options.onCloseStart = (el) => {
            const _collapsibleIcon = el.querySelector(".collapsible-icon");
            _collapsibleIcon && _collapsibleIcon.classList.remove("collopen");
        };
    });
});
