export default {
    async new(func: Attr, code: string, options: RequestOptions): Promise<Response | void> {
        if (!(func instanceof (Attr))) return Promise.reject("invalid arguments")
        console.log(`new function request`, func);
        const function_name = func.value

        return await fetch(`${options.api_url}${function_name}`, { method: "POST", body: code }).catch(console.error)
    }
}

export interface RequestOptions {
    api_url: string
}