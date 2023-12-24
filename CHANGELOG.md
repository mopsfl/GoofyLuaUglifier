## 24.12.2023
- <code>Table Lookup</code> now transforms <code>Colon Functions</code> for object-oriented calls
- <code>CChunk</code> now supports Byte Strings. still has to be enabled in the settings! (e.g.: <code>"\x5c\x78\x64\x38\x5c\x78\x66\x63"</code>)
- temporary disabled <code>Dead Code</code> random recursion (performance issues)
- added variable check for <code>Number Tables</code> to prevent duplicates

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
