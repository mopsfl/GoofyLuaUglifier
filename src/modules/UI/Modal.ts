import $ from "jquery"

export default {
    Init() {
        $(".modal-open").on("click", (e) => {
            $(`.modal#${e.target.id}`)?.removeClass("hide")
            $(".modal-overlay").removeClass("hide")
        })

        $(".modal-overlay").on("click", () => {
            $(".modal").addClass("hide")
            $(".modal-overlay").addClass("hide")
        })

        $(".modal-close").on("click", () => {
            $(".modal").addClass("hide")
            $(".modal-overlay").addClass("hide")
        })
    }
}