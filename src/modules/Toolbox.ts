import $ from "jquery"
import Utils from "./Misc/Utils"
import API from "./API"
import Editor from "./Editor"
import Console from "./Console"
import Client from "./Client"
import LocalStorage from "./Misc/LocalStorage"

let initialized = false

export default {
    canCallFunction: true,
    toolboxCategories: $(".toolbox-categories"),

    Init() {
        if (initialized) throw Error("Toolbox module is already initialized!")

        const initTime = Date.now(),
            consoleDiv = $(".console"),
            toolboxDiv = $(".toolbox"),
            categoryStates: { [categoryId: string]: boolean } = LocalStorage.Get(Client.settings.storageKey, "categories") ?? {}

        Object.keys(this.Buttons).forEach(categoryName => {
            const functionButtons: ToolboxFunction[] = this.Buttons[categoryName],
                toolboxCategoryElement: JQuery<HTMLElement> = this.createCategoryElement(categoryName, categoryStates)

            functionButtons.forEach(func => {
                const functionButton: JQuery<HTMLElement> = this.createFunctionElement(func.name, func.icon_id)
                toolboxCategoryElement.find(".inner").append(functionButton)

                if (func.disabled) {
                    functionButton.addClass("disabled")
                }

                if (func.tooltip) {
                    functionButton.attr("tooltip-content", func.tooltip)
                }

                functionButton.on("click", () => {
                    if (!this.canCallFunction) return
                    this.canCallFunction = false

                    Console.log(`applying function '${func.id}'...`)
                    Editor.ToggleReadOnly(true)
                    Editor.ToggleBlur(true)

                    const loader = $(`<div class="loader"></div>`).appendTo(functionButton)
                    this.toolboxCategories.addClass("disabled")

                    API.uglify(func, Editor.GetValue(), Client.settings.GetSettings()).then(([result, time]) => {
                        Console.log(`successfully applied function '${func.id}'. (took ${Utils.FormatMs(parseFloat(time))})`, "info");
                        Editor.SetValue(result)
                    }).catch(error => {
                        console.error(error)
                    }).finally(() => {
                        this.canCallFunction = true
                        Editor.ToggleReadOnly(false)
                        Editor.ToggleBlur(false)
                        loader.remove()
                        this.toolboxCategories.removeClass("disabled")
                    })
                })

            })

            toolboxCategoryElement.appendTo(this.toolboxCategories)
        })

        $(".toolbox-tabs>.btn-group>.btn").on("click", (e) => {
            if (e.target.id === "toolbox") {
                consoleDiv.removeClass("show")
                toolboxDiv.removeClass("hide")
                $("#toolbox").addClass("selected")
                $("#console").removeClass("selected")
            } else if (e.target.id === "console") {
                toolboxDiv.addClass("hide")
                toolboxDiv.removeClass("show")
                consoleDiv.addClass("show")
                $("#toolbox").removeClass("selected")
                $("#console").addClass("selected")
            }
        })

        initialized = true
        console.log(`Loaded Toolbox. (took ${Date.now() - initTime}ms)`);
    },

    createCategoryElement(name: string, states?: { [categoryId: string]: boolean }) {
        const id = Utils.ToCamelKey(name),
            element = $('<div class="btn-group-category">').append(
                $('<span class="btn-group-header ripple-effect">').append(
                    $('<span class="category-arrow">').append(
                        $('<i class="material-icons">chevron_right</i>')
                    ),
                    $('<span class="category-title">').text(name)
                ),
                $('<div class="toolbox-category-functions btn-group vertical grid nogap">').append(
                    $('<div class="toolbox-category-functions-inner inner">')
                )
            ).attr("id", id)

        element.find(".btn-group-header").on("click", () => {
            element.toggleClass("minimized")
            this.saveCategoryState(id, element.hasClass("minimized"))
        })

        if (states && states[id]) {
            element.toggleClass("minimized", states[id])
        }

        return element
    },

    createFunctionElement(name: string, icon: string) {
        return $(`<button class="btn ripple-effect function-btn tooltipped">`).append(
            $('<i class="material-icons" id="function-icon">').text(icon),
            $('<span id="function-name">').text(name),
            $('<div class="btn-seperator">')
        ).attr("id", Utils.ToCamelKey(name))
    },

    saveCategoryState(categoryId: string, state: boolean) {
        const states = LocalStorage.Get<any>(Client.settings.storageKey, "categories", {})

        states[categoryId] = state
        LocalStorage.Set(Client.settings.storageKey, "categories", states)

        console.log("save minimized state", categoryId, state);
    },

    Buttons: {
        ["Quick Actions"]: [
            { name: "Obfuscate", id: "obfuscate", icon_id: "draw", tooltip: "Obfuscates your script with many GoofyLuaUglifier functions and the IronBrew2 VM." },
            { name: "Virtualize", id: "virtualize", icon_id: "inventory", tooltip: "Virtualizes your script using IronBrew2 VM.<br><br><br>This function is currently using the luaobfuscator.com API, so the process might take a few seconds." },
            { name: "Minify", id: "minify", icon_id: "close_fullscreen", tooltip: "Minifies your script by renaming variables / globals and removing whitespaces." },
            { name: "Undo", id: "undo", icon_id: "undo", tooltip: "Undo the last change." },
        ],
        ["Functions"]: [
            {
                name: "Bytestrings",
                id: "bytestrings",
                icon_id: "tag",
                tooltip: `Encrypts string constants to encrypted byte strings.<br><br>Example:<br><code class="multiline">print("Hello")</code><br>&equals;<br><code class="multiline">print(dec("\\226\\207\\198\\198\\197", ...))</code>`
            },
            {
                name: "Numbers",
                id: "transformnums",
                icon_id: "looks_one",
                tooltip: "Transforms numbers into binary expression.<br><br>Example:<br><code>100</code> &equals; <code>(369 - 169) / 2</code>"
            },
            {
                name: "Number Combine",
                id: "numbercombine",
                icon_id: "merge_type",
                tooltip: "Combines all numeric literals into a single local declaration and then uses that and makes <code>x-y</code> thin something idk."
            },
            {
                name: "NonSense Numbers",
                id: "nonsensenumbers",
                icon_id: "question_mark",
                tooltip: `Turns numbers into non sense string length unary operators.<br><br>Example: <code class='multiline'>a = 69<br>b = 169</code> &equals; <code class='multiline'>a = #"{笐鲧変®[*ä闶譕栃 ..."<br>b = #"侔$ä觢譕癉-|>譲偣 ..." + 69</code><br><br><b>Note:</b> By default, numbers greater than <code>100</code> will get truncated and the missing numbers will be added with <code>#"..." + x</code><br><small>This limit can be changed in the settings!</small>`
            },
            {
                name: "Booleans",
                id: "transformbooleans",
                icon_id: "check_box",
                tooltip: "Transforms all booleans into binary expressions.<br><br>e.g. <code>false</code> &equals; <code>100 < ( 100 - 5 )</code>"
            },
            {
                name: "Functions",
                id: "functiontransform",
                icon_id: "functions",
                tooltip: `Puts all functions into a table and gets defined by an <code>IndexExpression</code>, to hide its name.<br><br>Example: <code class="multiline">function x()<br>&nbsp;&nbsp;print("69") end<br>x()</code>&equals;<br><code class="multiline">local a = {}<br>a["x"] = function()<br>&nbsp;&nbsp;print("69")<br>end<br><br>a["x"]()</code>`
            },
            {
                name: "Table Lookup",
                id: "tablelookup",
                icon_id: "data_object",
                tooltip: `Turns all member expression identifiers into an index expression, aka a table lookup.<br><br>Examples:<br><br><code>string.rep("x", 5)</code> &equals; <code>string["rep"](5)</code><br><br><code>{ index: ... }</code> &equals; <code>{ ["index"]: ... }</code><br><br><code>x:gsub(y, z)</code> &equals; <code>x["gsub"](x, y, z)</code>`
            },
            {
                name: "GLookup",
                id: "glookup",
                icon_id: "g_mobiledata",
                tooltip: `Makes all global variables get called by <code>_G</code><br><br>Example:<br><code class="multiline">string.rep("x", 5)</code><br>&equals;<br><code class="multiline">_G["string"]["rep"]("x", 5)</code><br><br><b>NOTE:</b> Might break the script. It's a complex transformation and some cases are not being handled/transformed correctly yet!`
            },
            {
                name: "AnononymDecls",
                id: "anonymousdeclarations",
                icon_id: "functions",
                tooltip: "Transforms and anonymizes function declarations by using string-based keys and table lookups.<br><br>Example:<br><code class='multiline'>function x.y(a, b)<br>&nbsp;&nbsp;return a,b<br>end</code> &equals; <code class='multiline'>x['y'] = function(self, a, b)<br>&nbsp;&nbsp;return self,a,b<br>end</code><br><br><b>EXPERIMENTAL</b> - Might break the script"
            },
            {
                name: "GlobalsToLocals",
                id: "globals_to_locals",
                icon_id: "transform",
                tooltip: "Turns all global usages into local declarations.<br><br>Example: <code  class='multiline'>print(math.random(1, 5))</code> <br>&equals;<br> <code class='multiline'>local _random = math.random<br>local _print = print<br><br>_print(_random(1, 5))</code><br><br><b>EXPERIMENTAL</b> - Might break the script"
            },
            {
                name: "CallReturn",
                id: "callreturn",
                icon_id: "format_list_bulleted",
                tooltip: "Wraps all constants into a anonymous function call wich returns the constant value.<br><br>Example: <code class='multiline'>print(69)</code> &equals; <br><code class='multiline'>print((function()<br>&nbsp;&nbsp;return 69<br>end)())</code>"
            },
            {
                name: "Remove LuaU Types",
                id: "removeluautypes",
                icon_id: "question_mark",
                tooltip: "Removes all LuaU type declarations and annotations.<br><br>Example: <code class='multiline'>local a: number = nil<br>local b = nil :: number<br>local c: {} = {}</code> &equals; <code class='multiline'>local a = nil<br>local b = nil<br>local c = {}</code><br><br><b>EXPERIMENTAL</b> - This is not finished and might not work with complex type annotations! (especially return type annotations <code>-></code>)"
            },
            {
                name: "Args To Vararg",
                id: "argstovararg",
                icon_id: "more_horiz",
                tooltip: "Turns all arguments in a function to a vararg call statement.<br><br>Example: <code class='multiline'>function _func(a,b)<br>&nbsp;&nbsp;return a,b,c<br>end</code> &equals; <code class='multiline'>function _func(...)<br>&nbsp;&nbsp;return ({...})[1],({...})[2]<br>end</code><br><br><b>NOTE:</b> assignment statements will be ignored!<br><br><b>EXPERIMENTAL</b> - Might break the script"
            }
        ],
        ["Roblox Functions"]: [
            { name: "Vector3 Numbers", id: "vector3numbers", icon_id: "looks_one", tooltip: `Converts numbers into a LuaU Vector3 based arithmetic expression.<br><br>Example:<br><code class="multiline">100</code><br>&equals;<br><code class="multiline">Vector3.new(...).Z + Vector3.new(...).Y - Vector3.new(...).X</code><br><br><b>Only works with LuaU (Roblox)</b><br><b>EXPERIMENTAL</b>` },
            { name: "CFrame Numbers", id: "cframenumbers", icon_id: "looks_one", disabled: true },
        ],
        ["Custom Preset"]: [
            { name: "Comming Soon", id: "67", disabled: true }
        ]
    },
}

export type ToolboxFunction = {
    name: string,
    id: string,
    icon_id: string,
    tooltip: string,
    disabled: boolean
}