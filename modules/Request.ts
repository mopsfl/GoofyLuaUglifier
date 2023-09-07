import Editor from "./Editor";
import Request from "./Request"

export default {
    async new(func: Attr, code: string, options: RequestOptions): Promise<Response | void> {
        if (!(func instanceof (Attr))) return Promise.reject("invalid arguments")
        const start_tick = new Date().getTime()
        console.log(`new function request`, func);
        const function_name = func.value

        return await fetch(`${options.api_url()}${function_name}`, { method: "POST", body: code }).catch(error => {
            const _error: Error = error
            Editor.SetValue(Request.CreateResponseError("lua", _error.message, Editor.GetValue()))
            throw error
        }).finally(() => {
            console.log(`function request finished. (took ${new Date().getTime() - start_tick}ms)`);
        })
    },

    CreateResponseError(format: "lua", error: string, code?: string) {
        let message = error
        if (code) code = code.replace(/--\[\[(.|\n)*]]/gm, "")
        switch (format) {
            case "lua": {
                message = `--[[
                  ┌ GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  |
                  └ ${error}
                ]]${code ? `\n\n\n${code}` : ""}`.replace(/^\s+/gm, "")
                break;
            }
        }
        return message
    }
}

export interface RequestOptions {
    api_url: Function
}