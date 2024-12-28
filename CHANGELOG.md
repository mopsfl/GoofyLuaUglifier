## 28.12.2024
- (hopefully) fixed <code>GLookup</code> handling <code>LocalStatement</code> identifiers as <code>Globals</code>
- added <code>Rick Roll Constants</code> function (dont ask why, its just funny)
- small bug fixes

## 26.11.2024
- added experimental function <code>Shuffle Strings</code> (very buggy lol)
- changelog list now clears on reload

## 19.08.2024
- bug fixes
- added some kind of anti hook (added this to the <code>Obfuscate</code> function for testing, don't expect it to work correctly- its still in work)

## 13.08.2024
- added notification thing on website for new updates

## 08.05.2024
- added sexy sidebar to website (cooler updates soon, maybe)

## 05.08.2024
- patched <code>Bytestrings</code> being easily dumped by hooking the <code>bit(bxor)</code> & <code>math.floor</code> function

## 30.07.2024
- fixed <code>Constant Chunk 2</code> being very broken due to broken constant indexing

## 28.07.2024
- fixed <code>GLookup</code> transforming function calls to method calls

## 23.07.2024
- fixed <code>TableLookup</code> function not transforming a single <code>MemberExpression</code> (e.g: <code>print(x.y)</code>) (nested <code>MemberExpressions</code> still don't work :/)
- fixed <code>GLookup</code> function not transforming <code>MemberExpressions</code> like <code>game:GetService()</code>
- other small fixes & improvements 
- upgraded my vps to double speed (rip my money)

## 22.07.2024
- frontend rework & performance and load time improvements
- fixed </code>TableLookup</code> function not transforming <code>CallExpression</code> on a <code>MemberExpression</code> base. (e.g: <code>getgenv().xyz</code>)
- fixed <code>Bytestrings</code> function bug with <code>>255</code> byte chars

## 21.07.2024
- added Lua 5.4 support for the bit32.bxor function (this caused the <code>ByteStrings</code> function to not work at all on Lua 5.4)
- added no string encrypt macro
- fixed <code>AntiBeautify2</code> watermark comment issue
- made <code>DeadCode</code> variables more randomized
- other small fixes & improvements 

## 20.07.2024
- improvement for the minifier to handle table indexing <code>({})[x]</code> & <code>({...})[x]</code>
- fixed minifier putting double parens around anonymous call statements

## 19.07.2024
- fixed a server-side unhandled promise rejection for the <code>Virtualize</code> function, causing the server to crash

## 18.07.2024
- fixed <code>AnonymousDeclarations</code> incorrectly transforming local declarations into global ones
- fixed <code>AntiBeautify2</code> (finally lol)

## 17.07.2024
- added new function <code>AnonymousDeclarations</code>
- added new function <code>Virtualize</code> using IronBrew2 VM (luaobfuscator.com api)
- added new setting <code>WrapReturn</code>
- added new setting <code>No Decoder Functions</code>
- renamed <code>FakeArgs</code> local names
- other minor bug fixes and improvements

## 16.07.2024
- _env local is now using <code>_G or _ENV</code> instead of just <code>_ENV</code>
- fixed some minor bugs on the api

## 12.07.2024
- added new function <code>Args To Vararg</code> (experimental)
- fixed function names being declared as local declarations when using <code>Globals To Locals</code> function

## 11.07.2024
- rewrote whole TableLookup function
- ├ fixed invalid transformation of <code>FunctionDeclarations</code> and its <code>MemberExpression</code> identifier
- └ current issue: <code>AssignmentStatements</code> with more than 3 assinged <code>Identifiers</code> will be ignored
- other small improvements on the api endpoints

## 06.07.2024
- performance improvement for memoize function call (credits: lifestorm)

## 04.07.2024
- added new function <code>Number Combine</code>

## 27.06.2024
- added uglifier stats to info modal
- added new function <code>TableConcat Strings</code>

## 21.06.2024
- added new setting <code>byte_string_type</code>
- fixed <code>Constant Chunk 2</code> not able to parse decimal byte strings

## 19.06.2024
- added new setting <code>minify_output</code>
- fixed <code>GLookup</code> not working for local declarations
- added new setting <code>memoize_function_calls</code> (experimental)
- added new experimental setting <code>bytecode_watermark</code> to <code>Constant Chunk 2</code>

## 18.06.2024
- <code>SplitStrings</code> now using supported anonymous functions (currently doesnt even split strings. just puts constants in a anonymous functions. will finish soon)
- performance fix for <code>_stringchar</code> local (credits: lifestorm)
- fixed anonymous functions not being handled correctly by the minifer when declaring them with a <code>LocalStatement</code>
- added new function <code>Remove LuaU Types</code>
- fixed missing local for <code>CChunk V1</code>
- <code>number_transform_offset_length</code> setting now also applies to <code>Booleans</code> transform function
- added new setting <code>use_all_mathoperators_number_transform</code> to enable <code>/</code> and <code>*</code> math operators for <code>Numbers</code> transform function
- fixed incorrect parsing of request headers for the public api
- added support for a function chain in an api call. e.g: <code>/v1/api/uglify/bytestrings,minify, ...</code>
- other minor bug fixes and improvements

## 17.06.2024
- fixed minifer removing required brackets on <code>LogicalExpressions</code> and some other cases
- updated <code>bit32.bxor</code> local definition to support other lua versions (bit & bit32)
- made decoder functions local
- fixed <code>Nonsense Strings</code> not handling whitespaces correctly
- added support to minifier for anonymous call statements (<code>(function() print("Hello") end)()</code>)
- other minor bug fixes and improvements

## 15.06.2024
- fixed incorrect constant type declaration for <code>ByteStrings</code> function (sorry, i didnt notice this bug for a long time)
- added <code>number_transform_offset_length</code> setting to <code>Numbers</code> function
- added new function <code>Globals To Locals</code> (experimental, might break your script)

## 27.05.2024
- new binary expression generation for <code>Numbers</code> function 
- fixed <code>Bytestring</code> function always having the same encoding key
- <code>Bytestring</code> function now encrypts all numbers when <code>ByteEncrypt All Constants</code> setting is turned on
- other minor bug fixes and improvements

## 24.05.2024
- fixed empty string turning into incorrect bytes when using <code>Bytestring & Constant Chunk 2</code>

## 12.05.2024
- new tester function <code>Split String</code> (experimental, might break your script)
- fixed discord oauth

## 02.04.2024
- added new function <code>Nonsense Strings</code>
- other minor bug fixes and improvements 

## 25.03.2024
- added new setting <code>ByteEncrypt All Constants</code>
- <code>ByteStrings</code> function now can encrypt boolean and numbers. recommended when using <code>Constant Chunk (v2)</code> (you need to enable it in settings first & numbers currently don't work)

## 12.03.2024
- removed constantindex from the IndexExpression for <code>Constant Chunk (v2)</code>

## 11.03.2024
- added function locals to <code>Constant Chunk (v2)</code>
- added <code>Anti Beautify V2</code> (still in work, not really working yet)

## 07.03.2024
- new byte string generation for <code>Bytestrings</code>
- fixed <code>Constant Chunk (v2)</code> breaking with byte <code>Bytestrings</code> function | update: this is still not 100% fixed
 
## 04.03.2024
- updated oauth system wich is more reliable
- new indexing for <code>Constant Chunk (v2)</code>

## 11.02.2024
- discord oauth improvements & fixes
- added field to check if you have tester access (info tab on top left)

## 09.02.2024
- replaced tester key with discord oauth

## 06.02.2024
- improvements to roblox constants
- added <code>Clear</code> button to quick actions

## 04.02.2024
- updated Roblox fake constants (for <code>Dead Code</code> and <code>Fake Arguments</code>)
- fixed anonymous function
- added IgnoreByteCode setting to <code>Constant Chunk (v2)</code>
- added button to update roblox constants (via info modal)

## 17.01.2024
- added <code>Anti Beautify</code> (it's bad, i'm just bored)
- fixed <code>Fake Arguments</code> adding args after a <code>VarArg</code>
- fixed <code>Constant Chunk</code> functions not adding if using it multiple times.
- other minor bug fixes and improvements 

## 02.01.2023
- added fake constants for <code>Dead Code</code> and <code>Fake Arguments</code> (setting soon)
- added <code>Function</code> methods now using random names

## 30.12.2023
- added new example of the new beta <code>Constant Chunk</code> method
- fixed <code>Constant Chunk (v2)</code> not supporting whitespaces

## 29.12.2023
- added new <code>Constant Chunk</code> method (in work so for testers only)

## 28.12.2023
- temporary removed variable check for <code>Number Tables</code> method due to caused errors
- fixed <code>Dead Code</code> method values not being randomized anymore
- implemented sessions (work in progress, doesnt really do anything yet)
- backend api fixes and improvements

## 27.12.2023
- added new setting <code>Table Length Number Memestrings</code> to add memestrings for the <code>Table Length</code> method
- added fake <code>Assignment Statements</code> for the <code>Fake Arguments</code> method

## 26.12.2023
- fixed <code>Function</code> method not transforming function identifiers (e.g.: <code>function test() end; print(test)</code>)
- added new tester method <code>Fake Arguments</code>
- added new tester preset with the currently best protection

## 24.12.2023
- <code>Table Lookup</code> now transforms <code>Colon Functions</code> for object-oriented calls
- <code>CChunk</code> now supports Byte Strings. still has to be enabled in the settings! (e.g.: <code>"\x5c\x78\x64\x38\x5c\x78\x66\x63"</code>)
- temporary disabled <code>Dead Code</code> random recursion (performance issues)
- added variable check for <code>Number Tables</code> method to prevent duplicates

## 22.12.2023
- fixed <code>Constant Chunk</code> breaking on empty strings (e.g: <code>print("")</code>)
- fixed <code>Dead Code</code> being very slow on bigger scripts
- <code>Control Flow</code> can now be used 2 times. Using it more than 2 times, will break it. (full fix in future)
- fixed <code>Control Flow</code> adding 2 <code>BreakStatements</code> in a single <code>IfStatement</code>
- added new setting <code>Table Length Number Rate</code> to modify the size of table values for the <code>Table Length</code> method
- fixed <code>DeadCode</code> being added under <code>ReturnStatements</code> & <code>BreakStatements</code>

## 21.12.2023
- fixed <code>Identifiers</code> breaking CChunk & string encode methods 
- added new tester method <code>Function</code>. Transforms functions into table index? (<code>function x() print("69") end x()</code> > <code>local a = {} a["x"] = function() print("69") end a\["x"]()</code>)

## 16.12.2023
- added new setting <code>Rename Global Functions</code> (default: <code>false</code>)
- <code>Identifiers</code> method now can rename functions but it needs to be enabled in settings first
- rewrote <code>Identifiers</code> logic & fixed non local function variable renaming (<code>local x = function() ... end</code>)

## 15.12.2023
- updated <code>Control Flow</code> (still very bugy and testers only)
- added reset settings button
- <code>Constant Chunk</code> now ignores <code>boolean</code> & <code>number</code> duplicates

## 14.12.2023
- fixed glookup breaking colon functions aka ignoring it (e.G. <code>func:x()</code>)
- added tester method <code>Control Flow</code> (in work)

## 13.12.2023
- new settings > <code>Ignore Bytecode</code> & <code>Ignore Bytestring</code>
- added multiple values for <code>TableLenNumbers</code>
- fixed client decompression broke at specific chunk size
- improved client decompression error handler
- other small bug fixes & changes

## 28.11.2023:
- implemented response compression (gzip)
- added local function definitions for uglifier functions (i think thats how it's called)
- updated default uglifier methods (quick uglify)
- improved & fixed error handling
- implemented TableKeyStrings to <code>TableLookup</code> method <code>{ index: ... } > { ["index"]: ... }</code>
- improved settings handler

## 12.11.2023:
- Added new setting for lua version support, that optimizes small things for the chosen version (such as LuaU for roblox)
- Fixed <code>Constant Chunk</code> method sometimes crashing server lol
- new method <code>Table Lookup</code>
- Frontend optimizations for mobile
- Start of changelog
