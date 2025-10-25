import $ from "jquery";
import Editor from "./Editor"
import index from "../index"
import Request from "./Request"
import LocalStorage from "./LocalStorage"
import pako from "pako"
import Utils from "./Utils"
const functionButtons = new Map<string, { element: JQuery<any>, func: CategoryFunction }>

export default {
    blockFunctionTrigger: false,
    Init() {
        const _functionBtnTemplate = $(".function-btn-template"),
            _functionCategoryTitleTemplate = $(".function-category-title-template"),
            _sideBarButtons = $("#functionbtns-sidebar")

        Object.keys(this.List).forEach((categoryName) => {
            const categoryFunctions: CategoryFunction[] = this.List[categoryName]
            const _functionCategoryTitle = _functionCategoryTitleTemplate.contents().clone()
            _functionCategoryTitle.text(categoryName)
            _functionCategoryTitle.appendTo(_sideBarButtons)

            categoryFunctions.forEach(categoryFunction => {
                if (!categoryFunction.divider) {
                    const functionBtn = _functionBtnTemplate.contents().clone(),
                        functionBtnIcon = functionBtn.find("#function-icon"),
                        functionBtnName = functionBtn.find("#function-name"),
                        functionBtnTooltipContent = $(document.createElement("div"))

                    functionBtnName.text(categoryFunction.name)
                    functionBtnIcon.text(categoryFunction.icon_id)
                    //functionBtn.attr("data-tooltip", categoryFunction.tooltip)
                    functionBtn.attr("data-function", categoryFunction.id)
                    functionBtn.appendTo(_sideBarButtons)

                    functionBtnTooltipContent.html(categoryFunction.tooltip)
                    functionBtn.attr("data-tooltip-id", "tooltip-content")
                    functionBtnTooltipContent.attr("id", "tooltip-content").hide()
                    functionBtn.append(functionBtnTooltipContent)

                    functionButtons.set(categoryFunction.id, { element: functionBtn, func: categoryFunction })
                } else {
                    const divider = document.createElement("div")
                    divider.classList.add("seperator")
                    $(divider).appendTo(_sideBarButtons)
                }
            })
        })

        functionButtons.forEach((functionData, functionName, map) => {
            functionData.element.on("click", async () => {
                if (!this.List["Quick Actions"].find(qAction => qAction.id === functionName) || functionData.func.quickActionsOverride) {
                    if (this.blockFunctionTrigger) return
                    this.blockFunctionTrigger = true
                    Editor.ToggleLoading("Processing")
                    Editor.ToggleReadOnly(true)

                    await Request.new(functionName, btoa(String.fromCharCode.apply(null, new Uint16Array(pako.gzip(Editor.GetValue())))), index.options, LocalStorage.GetKey(index.settings.config.storage_key, "settings"), index.clientSession).then(async res => {
                        if (res instanceof Response) {
                            const _headers = res.headers,
                                _session = _headers.get("uglifier-session"),
                                _mstime = _headers.get("uglifier-ms-time")
                            let _response_body = ""

                            if (res.ok) {
                                _response_body = await res.text()
                                index.clientSession = _session
                                console.log(`[Server] Uglification process took ${_mstime}ms. (session: ${index.clientSession})`);
                                Editor.SetValue(_response_body)
                            } else {
                                Editor.SetValue(Request.CreateResponseError("lua", `${res.statusText} - ${res.status}`, Editor.GetValue()))
                            }
                        }
                    }).catch(console.error).finally(() => {
                        Editor.ToggleLoading()
                        Editor.ToggleReadOnly(false)
                        this.blockFunctionTrigger = false
                    })
                } else {
                    if (this.QuickAction_Callbacks[functionName]) this.QuickAction_Callbacks[functionName]()
                }
            })
        })

        console.log(`[Client]: Loaded Functions (took ${new Date().getTime() - index.pageTime}ms).`);
    },

    List: {
        ["Quick Actions"]: [
            //{ name: "Queue Test", id: "createQueue", icon_id: "queue", tooltip: "Creates a test queue job." },
            { name: "Quick Uglify", id: "uglify", icon_id: "draw", tooltip: "Uglify your script with the default methods.", quickActionsOverride: true },
            { name: "Obfuscate", id: "virtualize_testa9ec6a9h", icon_id: "draw", tooltip: "Obfuscates your script with many GoofyLuaUglifier functions and the IronBrew2 VM.", quickActionsOverride: true },
            { name: "Virtualize", id: "virtualize", icon_id: "inventory", tooltip: "Virtualizes your script using IronBrew2 VM.<br><br><br>This function is currently using the luaobfuscator.com API, so the process might take a few seconds.", quickActionsOverride: true },
            { name: "Minify", id: "minify", icon_id: "close_fullscreen", tooltip: "Minifies your script by renaming variables / globals and removing whitespaces.", quickActionsOverride: true },
            { name: "Copy", id: "copy", icon_id: "content_copy", tooltip: "Copies the current editor script." },
            { name: "Clear", id: "clear", icon_id: "delete", tooltip: "Clears the editor input." },
            { name: "Download", id: "download", icon_id: "download", tooltip: "Downloads the current editor script." },
        ],
        ["Functions"]: [
            {
                "name": "Bytestrings",
                "id": "bytestrings",
                "icon_id": "tag",
                "tooltip": `Encrypts string constants to encrypted byte strings using one key and <code>bit32.bxor</code>.<br><br>e.g.: <code>'Hello'</code> &equals; <code>function("\\226\\207\\198\\198\\197")</code>`
            },
            {
                "name": "Numberstrings",
                "id": "numberstrings",
                "icon_id": "tag",
                "tooltip": "Encodes string constants into number tables that will be decoded by a implemented function.<br><br>e.g.: <code>'Hello'</code> &equals; <code>function({{176,4576,832}, {161,3381,2100}, ...})</code>"
            },
            {
                "name": "NonSense Strings",
                "id": "nonsensestrings",
                "icon_id": "question_mark",
                "tooltip": "Turns strings into random non sense.<br><br>e.g.: <code>'Hello World'</code> &equals; <code>'?ƒ*/涮в+%癉ц飴'</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script"
            },
            { divider: true },
            {
                "name": "Numbers",
                "id": "transformnums",
                "icon_id": "looks_one",
                "tooltip": "Transforms numbers into binary expression.<br><br>e.g.: <code>100</code> &equals; <code>(369 - 169) / 2</code>"
            },
            {
                "name": "Number Combine",
                "id": "numbercombine",
                "icon_id": "merge_type",
                "tooltip": "Combines all numeric literals into a single local declaration and then uses that and makes <code>x-y</code> thin something idk."
            },
            {
                "name": "NonSense Numbers",
                "id": "nonsensenumbers",
                "icon_id": "question_mark",
                "tooltip": `Turns numbers into non sense string length unary operators.<br><br>e.g.: <code class='multiline'>a = 69<br>b = 169</code> &equals; <code class='multiline'>a = #"{笐鲧変®[*ä闶譕栃 ..."<br>b = #"侔$ä觢譕癉-|>譲偣 ..." + 69</code><br><br><b>Note:</b> By default, numbers greater than <code>100</code> will get truncated and the missing numbers will be added with <code>#"..." + x</code><br><small>This limit can be changed in the settings!</small>`
            },
            {
                "name": "Booleans",
                "id": "transformbooleans",
                "icon_id": "check_box",
                "tooltip": "Transforms all booleans into binary expressions.<br><br>e.g.: <code>false</code> &equals; <code>100 < ( 100 - 5 )</code>"
            },
            {
                "name": "Functions",
                "id": "functiontransform",
                "icon_id": "functions",
                "tooltip": `Puts all functions into a table and gets defined by an <code>IndexExpression</code>, to hide its name.<br>(not working when used _GLookup first)<br><br>e.g.: <code class="multiline">function x() print("69") end<br>x()</code> &equals;<br><code class="multiline">local a = {}<br>a["x"] = function() print("69") end<br><br>a["x"]()</code>`
            },
            {
                "name": "Hex Numbers",
                "id": "hexnumbers",
                "icon_id": "looks_two",
                "tooltip": "Transforms numbers into hex numbers.<br><br>e.g.: <code>100.123</code> &equals; <code>0x64.1f7ced916874</code><br><br>(Decimal numbers do not work for LuaU)"
            },
            { divider: true },
            {
                "name": "solve binaryexp",
                "id": "solveBinaryExp",
                "icon_id": "bug_report",
                "tooltip": "Solves all binary expressions.<br><br>e.g.: <code>(69 / (10*2)) + 100 - 3.45</code> &equals; <code>100</code>"
            },
            {
                "name": "Number Tables",
                "id": "numbertable",
                "icon_id": "data_object",
                "tooltip": "Converts all numbers into tables containing random numbers.<br><br>e.g.: <code>print(100)</code> &equals; <code>print(table.concat({194+22})-table.concat({94+22}))</code><br><br>(might slow down the script)"
            },
            {
                "name": "Bracket Numbers",
                "id": "bracketnumbers",
                "icon_id": "data_array",
                "tooltip": "Puts all number into a random amount of brackets.<br><br>e.g.: <code>69</code> &equals; <code>((((((69))))))</code>"
            },
            {
                "name": "Table Length",
                "id": "tablelennumbers",
                "icon_id": "table_chart",
                "tooltip": "Transforms all numbers into tables, containing empty tables and using the length of <br>the base table. (does that make sense?) <br><br>e.g.: <code>5</code> &equals; <code>#{{},{},{},{},{}}</code><br><br>(might slow down the script)"
            },
            { divider: true },
            {
                "name": "Table Lookup",
                "id": "tablelookup",
                "icon_id": "data_object",
                "tooltip": `Turns all member expression identifiers into an index expression, aka a table lookup.<br><br>e.g.: <code>math.randomseed(69)</code> &equals; <code>math["randomseed"](69)</code><br>or<br>e.g.: <code>{ index: ... }</code> &equals; <code>{ ["index"]: ... }</code><br>or<br>e.g.: <code>x:gsub(y, z)</code> &equals; <code>x["gsub"](x, y, z)</code>`
            },
            {
                "name": "_G Lookup",
                "id": "glookup",
                "icon_id": "g_mobiledata",
                "tooltip": "Makes all global variables get called by <code>_G</code>, wich will hide<br>the actual variable / function, that's being called.<br><br>e.g.: <code>math.randomseed(69)</code> &equals; <code>_G[...][...](69)</code><br><br>(Currently only works with max. 2 index expressions)"
            },
            {
                "name": "AnononymDecls",
                "id": "anonymousdeclarations",
                "icon_id": "functions",
                "tooltip": "Transforms and anonymizes function declarations by using string-based keys and table lookups.<br><br>e.g.: <code class='multiline'>function x.y(a, b) return a,b end</code> &equals; <code class='multiline'>x['y'] = function(self, a, b) return self,a,b end</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script"
            },
            {
                "name": "GlobalsToLocals",
                "id": "globals_to_locals",
                "icon_id": "transform",
                "tooltip": "Turns all global usages into local declarations or puts all globals into a table.<br><br>e.g.: <code  class='multiline'>print(math.random(1, 5))</code> <br>&equals;<br> <code class='multiline'>local _random = math.random<br>local _print = print<br><br>_print(_random(1, 5))</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script"
            }
        ],
        ["Tester Functions"]: [
            {
                "name": "Dead Code",
                "id": "deadcode",
                "icon_id": "code_off",
                "tooltip": "Adds random dead code to your script.<br><br>e.g.: <code class='multiline'>...<br>abcdefg = (369 - 169) / 2<br>...</code>"
            },
            {
                "name": "Constant Chunk",
                "id": "constantchunk",
                "icon_id": "feed",
                "tooltip": "Converts all constants (strings, numbers, booleans) into some kind of bytecode? but not really<br><br>e.g.: <code>['Hello World', 69, true]</code> &equals; <code>'A115B7...22B74C'</code>"
            },
            {
                "name": "Identifiers",
                "id": "renameidentifiers",
                "icon_id": "fingerprint",
                "tooltip": "Renames all identifiers to the smallest name possible.<br><br>e.g.: <code class='multiline'>...<br>local test1 = 60<br>local test2 = 69</code> &equals;<br><code class='multiline'>...<br>local a = 60<br>local b = 69<br>...</code>"
            },
            {
                "name": "Control Flow",
                "id": "controlflow",
                "icon_id": "quiz",
                "tooltip": "Injects while loops into all possible blocks to alter the logical flow of the code<br>to make it harder to understand and analyze.<br><br><b>This is still in work and very buggy</b>"
            },
            {
                "name": "Fake Args",
                "id": "fakeargs",
                "icon_id": "format_list_bulleted",
                "tooltip": "Inserts fake arguments to function declarations and a assignment statement into the function body."
            },
            {
                "name": "CallReturn",
                "id": "stringsplit",
                "icon_id": "format_list_bulleted",
                "tooltip": "Wraps all constants (string, number, boolean) into a anonymous function call wich returns the constant value.<br><br>e.g.: <code class='multiline'>print(69)</code> &equals; <br><code class='multiline'>print((function()<br>return 69<br>end)())</code>"
            },
            { divider: true },
            {
                "name": "TLN Solver Test",
                "id": "test_a1f3f945673de",
                "icon_id": "",
                "tooltip": "testing function: <code>a1f3f945673de</code>"
            },
            {
                "name": "CFF Solver Test",
                "id": "test_aed2bdfc69f",
                "icon_id": "",
                "tooltip": "testing function: <code>aed2bdfc69f</code>"
            },
            {
                "name": "concat hook prot",
                "id": "test_a6a1a9ec6a1cd",
                "icon_id": "",
                "tooltip": "testing function: <code>a6a1a9ec6a1cd</code>"
            },
            {
                "name": "Constant Chunk 2",
                "id": "test_newcchunk",
                "icon_id": "",
                "tooltip": "Converts all constants (strings, numbers, booleans) into a bytecode?<br><br>e.g.: <code>['Hello World', 69, true]</code> &equals; <code>'1H1I1...I1010'</code>"
            },
            {
                "name": "anti beautify",
                "id": "test_antibeautify",
                "icon_id": "",
                "tooltip": "testing function: <code>test_antibeautify (debug lib)</code>"
            },
            {
                "name": "anti beautify v2",
                "id": "test_antibeautifyv2",
                "icon_id": "",
                "tooltip": "testing function: <code>test_antibeautifyv2 (pcall method)</code>"
            },
            {
                "name": "test_strenc_cchunk3",
                "id": "test_strenc_cchunk3",
                "icon_id": "",
                "tooltip": "testing function: <code>test_strenc_cchunk3</code>"
            },
            {
                "name": "Decode Bytestring",
                "id": "decode_bytestring",
                "icon_id": "",
                "tooltip": "Decodes a bytestring."
            },
            {
                "name": "Remove LuaU Types",
                "id": "removeluautypes",
                "icon_id": "",
                "tooltip": "Removes all LuaU type declarations and annotations.<br><br>e.g.: <code class='multiline'>local a: number = nil<br>local b = nil :: number<br>local c: {} = {}</code> &equals; <code class='multiline'>local a = nil<br>local b = nil<br>local c = {}</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script"
            },
            {
                "name": "TableConcat Strings",
                "id": "tableconcatstrings",
                "icon_id": "",
                "tooltip": "Turns all strings into a table and then combines them again using <code>table.concat</code>."
            },
            {
                "name": "Args To Vararg",
                "id": "argstovararg",
                "icon_id": "",
                "tooltip": "Turns all arguments in a function to a vararg call statement.<br><br>e.g.: <code class='multiline'>function _func(a,b,c) return a,b,c end</code> &equals; <code class='multiline'>function _func(...) return ({...})[1],({...})[2],({...})[3] end</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script<br><br><b>Note:</b> AssignmentStatements to an argument won't work."
            },
            {
                "name": "Control Flow 2",
                "id": "controlflow2",
                "icon_id": "quiz",
                "tooltip": "Injects while loops into all possible blocks to alter the logical flow of the code<br>to make it harder to understand and analyze.<br><br><b>This version is work in progress and might not work as intended.</b>"
            },
            //{
            //    "name": "Nonsense Strings 2",
            //    "id": "nonsensestrings2",
            //    "icon_id": "question_mark",
            //    "tooltip": "Turns strings into random non sense.<br><br>e.g.: <code>'Hello World'</code> &equals; <code>'?ƒ*/涮в+%癉ц飴'</code><br><br><br><b>EXPERIMENTAL</b> - Might break the script<br><br><b>Note</b> - This is a work in progress remake of the old version and is not guaranteed to work yet.<br>I will replace it with the old one, once this is finished."
            //},
            //{
            //    "name": "Anti Hook",
            //    "id": "antihook",
            //    "icon_id": "question_mark",
            //    "tooltip": "Anti Hook"
            //},
            {
                "name": "Shuffle Strings",
                "id": "shufflestrings",
                "icon_id": "low_priority",
                "tooltip": "Shuffles the strings character into a random order."
            },
            {
                "name": "Rick Roll Constants",
                "id": "rickrollcons",
                "icon_id": "celebration",
                "tooltip": "Adds fake constants that are ignored by the string encryption. (to troll constant dumper bozos)"
            }
        ]
    },

    QuickAction_Callbacks: {
        ["copy"]: Editor.CopyValue,
        ["download"]: Utils.DownloadContent,
        ["clear"]: Editor.Clear
    }
}

export interface CategoryFunction {
    name: string,
    id: string,
    icon_id: string,
    tooltip: string,
    divider?: boolean
    quickActionsOverride?: boolean,
}