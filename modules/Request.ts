import Editor from "./Editor";

export default {
    async new(func: Attr, code: string, options: RequestOptions): Promise<Response | void> {
        if (!(func instanceof (Attr))) return Promise.reject("invalid arguments")
        const start_tick = new Date().getTime()
        console.log(`new function request`, func);
        const function_name = func.value

        return await fetch(`${options.api_url()}${function_name}`, { method: "POST", body: code }).catch(error => {
            const _error: Error = error
            Editor.SetValue(`${_error.message}`)
            throw error
        }).finally(() => {
            console.log(`function request finished. (took ${new Date().getTime() - start_tick}ms)`);
        })
    }
}

export interface RequestOptions {
    api_url: Function
}