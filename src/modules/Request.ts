import Editor from "./Editor";
import Client from "./Client";
import Console from "./Console";

export default {
    async new(func: string, code: string, uglifier_options?: Object, clientSession?: string): Promise<Response> {
        console.log(func, clientSession, uglifier_options);
        return await fetch(
            `${Client.endpoints.uglifierApi()}ide/uglify/${func}`, {
            method: "POST",
            body: code,
            credentials: "include",
            headers: {
                "uglifier-options": btoa(JSON.stringify(uglifier_options)),
                "uglifier-session": clientSession,
                "uglifier-token": Client.apiToken
            }
        }).catch(error => {
            Console.log(error, "error")
            Editor.ToggleLoading()
            throw error
        })
    }
}

export interface RequestOptions {
    uglifierApi: Function,
    mopsflApi: Function
}

export interface UglifierHeaders {
    "uglifier-session": string,
    "uglifier-ms-time": string,
    "uglifier-function": string
}