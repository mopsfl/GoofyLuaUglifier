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
