import Client from "./Client"
import Console from "./Console"
import Editor from "./Editor"
import Utils from "./Misc/Utils"
import { ToolboxFunction } from "./Toolbox"

export default {
    async uglify(func: ToolboxFunction, code: string, options?: object, session?: string): Promise<any> {
        if (!func?.id) throw new Error("missing function id!")

        const response = await fetch(
            `${Client.endpoints.goofyLuaUglifierApi}ide/uglify/${func.id}`,
            {
                method: "POST",
                body: Utils.CompressData(code, false),
                credentials: "include",
                headers: {
                    "uglifier-options": btoa(JSON.stringify(options)),
                    "uglifier-session": session,
                    "uglifier-token": Client.token
                }
            }).catch(error => {
                Console.log(error, "error")
                throw error
            })

        if (!response.ok) {
            try {
                const responseJSON = await response.json()
                Console.log(`${responseJSON.type ? responseJSON.type + ": " : "Error: "}${responseJSON?.error || response.status}`, "error")

                if (responseJSON.type === "SyntaxError") {
                    Editor.HighlightRange(Editor.SyntaxErrorToRange(responseJSON.error), responseJSON.error)
                }

                if (response.status === 403) {
                    Console.log("updating client csrf token...", "warn")
                    //Client.UpdateCsfrToken()
                }
            } catch (error) {
                Console.log(new Error(`An unexpected error occurred while processing your request! (http status: ${response.statusText})`), "error")
            }

            throw response
        } else {
            Client.session = response.headers.get("uglifier-session")
            return [await response.text(), response.headers.get("uglifier-time")]
        }
    }
}