## 07.02.2026
- added back tooltips
- some other small changes/improvements

## 05.02.2026
- fixed `Undo` not working

## 28.01.2025
- full frontend rework
  - completely new style (self made, no libary anymore!!)
  - improved mobile responsive support (cool tab feature to switch between toolbox and console)
- the login feature will come back soon, i guess
- enjoy :)

## 11.01.2025
- fixed `Obfuscate` function not working due to missing _ENV local (sorryy)

## 23.11.2025
##### Frontend:
- new settings system (less buggy and more organized, i guess?)
- fixed monaco editor failing to create web worker and running on main thread
- new `Undo` feature to undo (obviously) your recent changes
- syntax errors are now highlighted in the editor
- new output console on the website (replaces the comment errors how it was before)
  - also fixes syntax errors showing the wrong line (never noticed that lol)
- faster compression method for api requests (using `TextEncoder/TextDecoder` api)
  - fixes long loading when obfuscating big scripts
  - also increases the size limit, since the old method was limited
##### Backend:
- complete overhaul of the backend
  - improved error handling
  - much better performance
  - each task will now run on its own thread to prevent crashes
    - a task will kill itself when it takes too long
    - if a huge task is being processed, it won't block the main thread anymore which caused many many crashes before
  - improved api security
  - website toolbox now uses its own api endpoint (performance improvements)
  - improved how function chains are processed
  - improved insertion logic of locals/functions for e.g string encryption (will still insert them twice when the script is minified, will fix this one day maybe)
- many function bug fixes:
  - `Remove LuaU Types`
    - many improvements and support for more much type annotations (complex type annotations might still not work) 
  - `Boolean Transform`
    - basically remade the whole thing to make it compatible with other functions
  - `GlobalsToLocals`
    - fixed not replacing all functions at once and creating duplicated locals
  - `GLookup`
    - fixed nested globals not transforming (e.g. `game.Players.LocalPlayer...`)
    - fixed colon calls not transformed correctly
    - fixed assigned globals to locals not transformed (`local x = print`)
    - fixed `_G` references being transformed
  - `Virtualize`
    - fixed sometimes not working (can still sometimes fail, just not as much as before lol)

## 25.10.2025
- moved open settings button to left sidenav thing
- other small improvements
- sorry that's all i did, i was bored :(
- i don't have motivation to work on this anymore. also the backend is hella messy and shit written. i need to rewrite everything first before i can continue this project </3

## 07.01.2025
- fixed / rewrote user session manager (OAuth) for better stability (basically it just saves everything in a database now instead of a file cache)

## 06.01.2025
- added new function `Nonsense Numbers` (not 100% stable yet but should work most times)

## 28.12.2024
- fixed compound operators not being parsed correctly (i hope this fix doesnt break anything .-.)
- (hopefully) fixed `GLookup` handling `LocalStatement` identifiers as `Globals`
- added `Rick Roll Constants` function (dont ask why, its just funny)
- small bug fixes

## 26.11.2024
- added experimental function `Shuffle Strings` (very buggy lol)
- changelog list now clears on reload

## 19.08.2024
- bug fixes
- added some kind of anti hook (added this to the `Obfuscate` function for testing, don't expect it to work correctly- its still in work)

## 13.08.2024
- added notification thing on website for new updates

## 08.05.2024
- added sexy sidebar to website (cooler updates soon, maybe)

## 05.08.2024
- patched `Bytestrings` being easily dumped by hooking the `bit(bxor)` & `math.floor` function

## 30.07.2024
- fixed `Constant Chunk 2` being very broken due to broken constant indexing

## 28.07.2024
- fixed `GLookup` transforming function calls to method calls

## 23.07.2024
- fixed `TableLookup` function not transforming a single `MemberExpression` (e.g: `print(x.y)`) (nested `MemberExpressions` still don't work :/)
- fixed `GLookup` function not transforming `MemberExpressions` like `game:GetService()`
- other small fixes & improvements 
- upgraded my vps to double speed (rip my money)

## 22.07.2024
- frontend rework & performance and load time improvements
- fixed `TableLookup` function not transforming `CallExpression` on a `MemberExpression` base. (e.g: `getgenv().xyz`)
- fixed `Bytestrings` function bug with `>255` byte chars

## 21.07.2024
- added Lua 5.4 support for the bit32.bxor function (this caused the `ByteStrings` function to not work at all on Lua 5.4)
- added no string encrypt macro
- fixed `AntiBeautify2` watermark comment issue
- made `DeadCode` variables more randomized
- other small fixes & improvements 

## 20.07.2024
- improvement for the minifier to handle table indexing `({})[x]` & `({...})[x]`
- fixed minifier putting double parens around anonymous call statements

## 19.07.2024
- fixed a server-side unhandled promise rejection for the `Virtualize` function, causing the server to crash

## 18.07.2024
- fixed `AnonymousDeclarations` incorrectly transforming local declarations into global ones
- fixed `AntiBeautify2` (finally lol)

## 17.07.2024
- added new function `AnonymousDeclarations`
- added new function `Virtualize` using IronBrew2 VM (luaobfuscator.com api)
- added new setting `WrapReturn`
- added new setting `No Decoder Functions`
- renamed `FakeArgs` local names
- other minor bug fixes and improvements

## 16.07.2024
- _env local is now using `_G or _ENV` instead of just `_ENV`
- fixed some minor bugs on the api

## 12.07.2024
- added new function `Args To Vararg` (experimental)
- fixed function names being declared as local declarations when using `Globals To Locals` function

## 11.07.2024
- rewrote whole TableLookup function
- ├ fixed invalid transformation of `FunctionDeclarations` and its `MemberExpression` identifier
- └ current issue: `AssignmentStatements` with more than 3 assinged `Identifiers` will be ignored
- other small improvements on the api endpoints

## 06.07.2024
- performance improvement for memoize function call (credits: lifestorm)

## 04.07.2024
- added new function `Number Combine`

## 27.06.2024
- added uglifier stats to info modal
- added new function `TableConcat Strings`

## 21.06.2024
- added new setting `byte_string_type`
- fixed `Constant Chunk 2` not able to parse decimal byte strings

## 19.06.2024
- added new setting `minify_output`
- fixed `GLookup` not working for local declarations
- added new setting `memoize_function_calls` (experimental)
- added new experimental setting `bytecode_watermark` to `Constant Chunk 2`

## 18.06.2024
- `SplitStrings` now using supported anonymous functions (currently doesnt even split strings. just puts constants in a anonymous functions. will finish soon)
- performance fix for `_stringchar` local (credits: lifestorm)
- fixed anonymous functions not being handled correctly by the minifer when declaring them with a `LocalStatement`
- added new function `Remove LuaU Types`
- fixed missing local for `CChunk V1`
- `number_transform_offset_length` setting now also applies to `Booleans` transform function
- added new setting `use_all_mathoperators_number_transform` to enable `/` and `*` math operators for `Numbers` transform function
- fixed incorrect parsing of request headers for the public api
- added support for a function chain in an api call. e.g: `/v1/api/uglify/bytestrings,minify, ...`
- other minor bug fixes and improvements

## 17.06.2024
- fixed minifer removing required brackets on `LogicalExpressions` and some other cases
- updated `bit32.bxor` local definition to support other lua versions (bit & bit32)
- made decoder functions local
- fixed `Nonsense Strings` not handling whitespaces correctly
- added support to minifier for anonymous call statements (`(function() print("Hello") end)()`)
- other minor bug fixes and improvements

## 15.06.2024
- fixed incorrect constant type declaration for `ByteStrings` function (sorry, i didnt notice this bug for a long time)
- added `number_transform_offset_length` setting to `Numbers` function
- added new function `Globals To Locals` (experimental, might break your script)

## 27.05.2024
- new binary expression generation for `Numbers` function 
- fixed `Bytestring` function always having the same encoding key
- `Bytestring` function now encrypts all numbers when `ByteEncrypt All Constants` setting is turned on
- other minor bug fixes and improvements

## 24.05.2024
- fixed empty string turning into incorrect bytes when using `Bytestring & Constant Chunk 2`

## 12.05.2024
- new tester function `Split String` (experimental, might break your script)
- fixed discord oauth

## 02.04.2024
- added new function `Nonsense Strings`
- other minor bug fixes and improvements 

## 25.03.2024
- added new setting `ByteEncrypt All Constants`
- `ByteStrings` function now can encrypt boolean and numbers. recommended when using `Constant Chunk (v2)` (you need to enable it in settings first & numbers currently don't work)

## 12.03.2024
- removed constantindex from the IndexExpression for `Constant Chunk (v2)`

## 11.03.2024
- added function locals to `Constant Chunk (v2)`
- added `Anti Beautify V2` (still in work, not really working yet)

## 07.03.2024
- new byte string generation for `Bytestrings`
- fixed `Constant Chunk (v2)` breaking with byte `Bytestrings` function | update: this is still not 100% fixed
 
## 04.03.2024
- updated oauth system wich is more reliable
- new indexing for `Constant Chunk (v2)`

## 11.02.2024
- discord oauth improvements & fixes
- added field to check if you have tester access (info tab on top left)

## 09.02.2024
- replaced tester key with discord oauth

## 06.02.2024
- improvements to roblox constants
- added `Clear` button to quick actions

## 04.02.2024
- updated Roblox fake constants (for `Dead Code` and `Fake Arguments`)
- fixed anonymous function
- added IgnoreByteCode setting to `Constant Chunk (v2)`
- added button to update roblox constants (via info modal)

## 17.01.2024
- added `Anti Beautify` (it's bad, i'm just bored)
- fixed `Fake Arguments` adding args after a `VarArg`
- fixed `Constant Chunk` functions not adding if using it multiple times.
- other minor bug fixes and improvements 

## 02.01.2023
- added fake constants for `Dead Code` and `Fake Arguments` (setting soon)
- added `Function` methods now using random names

## 30.12.2023
- added new example of the new beta `Constant Chunk` method
- fixed `Constant Chunk (v2)` not supporting whitespaces

## 29.12.2023
- added new `Constant Chunk` method (in work so for testers only)

## 28.12.2023
- temporary removed variable check for `Number Tables` method due to caused errors
- fixed `Dead Code` method values not being randomized anymore
- implemented sessions (work in progress, doesnt really do anything yet)
- backend api fixes and improvements

## 27.12.2023
- added new setting `Table Length Number Memestrings` to add memestrings for the `Table Length` method
- added fake `Assignment Statements` for the `Fake Arguments` method

## 26.12.2023
- fixed `Function` method not transforming function identifiers (e.g.: `function test() end; print(test)`)
- added new tester method `Fake Arguments`
- added new tester preset with the currently best protection

## 24.12.2023
- `Table Lookup` now transforms `Colon Functions` for object-oriented calls
- `CChunk` now supports Byte Strings. still has to be enabled in the settings! (e.g.: `"\x5c\x78\x64\x38\x5c\x78\x66\x63"`)
- temporary disabled `Dead Code` random recursion (performance issues)
- added variable check for `Number Tables` method to prevent duplicates

## 22.12.2023
- fixed `Constant Chunk` breaking on empty strings (e.g: `print("")`)
- fixed `Dead Code` being very slow on bigger scripts
- `Control Flow` can now be used 2 times. Using it more than 2 times, will break it. (full fix in future)
- fixed `Control Flow` adding 2 `BreakStatements` in a single `IfStatement`
- added new setting `Table Length Number Rate` to modify the size of table values for the `Table Length` method
- fixed `DeadCode` being added under `ReturnStatements` & `BreakStatements`

## 21.12.2023
- fixed `Identifiers` breaking CChunk & string encode methods 
- added new tester method `Function`. Transforms functions into table index? (`function x() print("69") end x()` > `local a = {} a["x"] = function() print("69") end a\["x"]()`)

## 16.12.2023
- added new setting `Rename Global Functions` (default: `false`)
- `Identifiers` method now can rename functions but it needs to be enabled in settings first
- rewrote `Identifiers` logic & fixed non local function variable renaming (`local x = function() ... end`)

## 15.12.2023
- updated `Control Flow` (still very bugy and testers only)
- added reset settings button
- `Constant Chunk` now ignores `boolean` & `number` duplicates

## 14.12.2023
- fixed glookup breaking colon functions aka ignoring it (e.G. `func:x()`)
- added tester method `Control Flow` (in work)

## 13.12.2023
- new settings > `Ignore Bytecode` & `Ignore Bytestring`
- added multiple values for `TableLenNumbers`
- fixed client decompression broke at specific chunk size
- improved client decompression error handler
- other small bug fixes & changes

## 28.11.2023:
- implemented response compression (gzip)
- added local function definitions for uglifier functions (i think thats how it's called)
- updated default uglifier methods (quick uglify)
- improved & fixed error handling
- implemented TableKeyStrings to `TableLookup` method `{ index: ... } > { ["index"]: ... }`
- improved settings handler

## 12.11.2023:
- Added new setting for lua version support, that optimizes small things for the chosen version (such as LuaU for roblox)
- Fixed `Constant Chunk` method sometimes crashing server lol
- new method `Table Lookup`
- Frontend optimizations for mobile
- Start of changelog
