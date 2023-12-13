## 13.12.2023
- new settings > <code>Ignore Bytecode</code> & <code>Ignore Bytestring</code>
- added multiple values for <code>TableLenNumbers</code>
- fixed client decompression broke at specific chunk size
- improved client decompression error handler
- other small bug fixes & changes

## 28.11.2023:
- implemented response compression (gzip)
- added local function definitions for uglifier functions (i think thats how it's called)
- updated default uglifier functions (quick uglify)
- improved & fixed error handling
- implemented TableKeyStrings to <code>TableLookup</code> method <code>{ index: ... } > { ["index"]: ... }</code>
- improved settings handler

## 12.11.2023:
- Added new setting for lua version support, that optimizes small things for the chosen version (such as LuaU for roblox)
- Fixed <code>Constant Chunk</code> method sometimes crashing server lol
- new method <code>Table Lookup</code>
- Frontend optimizations for mobile
- Start of changelog
