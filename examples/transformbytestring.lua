--[[
GoofyLuaUglifier - @mopsfl
Bytestrings with multiple transform function. (Numbers, Booleans, GLookup, TableLookup, FunctionLookup)

ugl_alg: QXiQHc5J3YuVUZ0lnQiwiIwV3av9GTlxmYhRlIsICc1t2bvx0RvRlIsIibvlGdj5WdG1mcvZ2cuFmcUJyW
]]

local a=table.concat;local a=bit and bit.bxor or bit32.bxor;local b=math.floor;local c=string.gsub;local c=string.char;local d={}local c=function(a)if#d==0 then for a=0,255 do d[a]=c(a)end end;return d[a]or c(a)end;local d=string.byte;local e=tonumber;local function f(f,g,h)if not f or not g then return f end;local i=""for e in f:gmatch(".")do local d=d(e)local a=a(d,g)i=i..c(b(a))end;if h==2 then i=e(i)elseif h==3 then i=i=="true"and true or false end;return i end;local a=getfenv or function()return _ENV end;local b={}local c={}local d={}local e={}e[f("\xaa\xf8\xfb\xfe",203,1)]=function(a,b)return a+b end;d[f("\xc7\x9e\x90\xc3",166,1)]=function(a)return f("\xc5\xe8\xe1\xe1\xe2\xa1\xad",141,1)..a..f("\xfc",221,1)end;c[f("\xd9\x88\x89\x89",184,1)]=function(a)if a==f("\xb2",130,2)then return f("\xb4",133,2)else return a*c[f("\xcb\x9a\x9b\x9b",170,1)](a-f("\xd4",229,2))end end;b[f("\xbd\xb8\xec\xeb",220,1)]=function(...)local b={...}for b,c in a()[f("\x93\x8a\x9b\x93\x88\x89",250,1)](b)do a()[f("\xaa\xa8\xb3\xb4\xae",218,1)](f("\xe5\xd6\xc3",164,1),b,f("\xff",197,1),c)end end;local g=f("\xd4\xd5",229,2)local h=f("\xc3\xc5\xc2\xd2",183,3)local i=f("\xf4\xcd\xd9\x98\xeb\xdb\xca\xd1\xc8\xcc\xd1\xd6\xdf",184,1)a()[f("\xfd\xff\xe4\xe3\xf9",141,1)](f("\xef\xd4\xcc\xc3\xc4\xd3\x9b",161,1),g)a()[f("\xa9\xab\xb0\xb7\xad",217,1)](f("\xe2\xd9\xc1\xce\xc9\xde\x8c\x87\x8c\x99\x96",172,1),e[f("\xaf\xfd\xfe\xfb",206,1)](g,f("\xde",235,2)))if h then a()[f("\xd5\xd7\xcc\xcb\xd1",165,1)](f("\xab\x86\x86\x85\x8c\x88\x87\xc9\x80\x9a\xc9\x9d\x9b\x9c\x8c",233,1))else a()[f("\xa2\xa0\xbb\xbc\xa6",210,1)](f("\x8d\xa0\xa0\xa3\xaa\xae\xa1\xef\xa6\xbc\xef\xa9\xae\xa3\xbc\xaa",207,1))end;a()[f("\x92\x90\x8b\x8c\x96",226,1)](f("\xcc\xeb\xed\xf6\xf1\xf8\xa5",159,1),i)a()[f("\xac\xae\xb5\xb2\xa8",220,1)](f("\xfe\xcb\xdc\xdc\xcd\xd0\xd7\xde\x83",185,1),d[f("\xbb\xe2\xec\xbf",218,1)](f("\x8c\xb4\xa9\xb7\xbf",219,1)))a()[f("\xb0\xb2\xa9\xae\xb4",192,1)](f("\xa6\x99\x98\x9d\x94\xd1\x9d\x9e\x9e\x81\xcb",241,1))local d=f("\x88",185,2)while d<=f("\xb7",130,2)do a()[f("\xa6\xa4\xbf\xb8\xa2",214,1)](f("\xd8\x8b",177,1),d)d=d+f("\xca",251,2)end;a()[f("\xf8\xfa\xe1\xe6\xfc",136,1)](f("\xd1\xf8\xe5\xb7\xfb\xf8\xf8\xe7\xad",151,1))for b=f("\xd0",225,2),f("\x8b",190,2)do a()[f("\x92\x90\x8b\x8c\x96",226,1)](f("\x9e\xce",244,1),b)end;a()[f("\xbe\xbc\xa7\xa0\xba",206,1)](f("\xe7\xd0\xc5\xd0\xd4\xc1\x95\xc0\xdb\xc1\xdc\xd9\x95\xd9\xda\xda\xc5\x8f",181,1))local d=f("\x9b",170,2)repeat a()[f("\xe2\xe0\xfb\xfc\xe6",146,1)](f("\xba\xeb",209,1),d)d=d+f("\x83",178,2)until d>f("\xbf",138,2)a()[f("\xb9\xbb\xa0\xa7\xbd",201,1)](f("\x9c\xbb\xb9\xae\xb5\xa8\xb3\xbb\xb6\xfa\xb5\xbc\xfa\xef\xe0",218,1),c[f("\x96\xc7\xc6\xc6",247,1)](f("\xc8",253,2)))a()[f("\x93\x91\x8a\x8d\x97",227,1)](f("\xd9\xee\xfd\xee\xfd\xe8\xfc\xaf\xeb\xea\xe2\xe0\xe1\xfc\xfb\xfd\xee\xfb\xe6\xe0\xe1\xb5",143,1))b[f("\x98\x9d\xc9\xce",249,1)](f("\xef",222,2),f("\xa6\xa5\xbd",210,1),f("\xb1",130,2),f("\xdf\xd9\xde\xce",171,3),f("\xed\xe6\xec",136,1))local b={[f("\xc9\xc6\xca\xc2",167,1)]=f("\xe0\xd9\xcd",172,1),[f("\xa7\xb4\xa3\xa2\xb8\xbe\xbf",209,1)]=f("\xcb\xd0\xca",254,2)}a()[f("\xec\xee\xf5\xf2\xe8",156,1)](f("\x9a\xaf\xac\xa2\xab\xf4",206,1))for b,c in a()[f("\x94\x85\x8d\x96\x97",228,1)](b)do a()[f("\xd2\xd0\xcb\xcc\xd6",162,1)](b,f("\x9b",161,1),c)end;local b={}local b=a()[f("\xbc\xaa\xbb\xa2\xaa\xbb\xae\xbb\xae\xad\xa3\xaa",207,1)]({},{[f("\x8a\x8a\xbc\xbb\xb1\xb0\xad",213,1)]=b,[f("\xe3\xe3\xc8\xd3\xcf\xc8\xce\xd5\xd2\xdb",188,1)]=function()return f("\x86\xba\xbb\xa1\xf2\xbb\xa1\xf2\xb3\xf2\xbf\xb7\xa6\xb3\xf2\xa6\xb3\xb0\xbe\xb7",210,1)end})a()[f("\x94\x96\x8d\x8a\x90",228,1)](f("\xaf\x87\x96\x83\xcf\x96\x83\x80\x8e\x87\xc2\x86\x87\x8f\x8d\x8c\x91\x96\x90\x83\x96\x8b\x8d\x8c\xd8",226,1))a()[f("\xbb\xb9\xa2\xa5\xbf",203,1)](b)local b=a()[f("\xd5\xd9\xc4\xd9\xc3\xc2\xdf\xd8\xd3",182,1)][f("\xf2\xe3\xf4\xf0\xe5\xf4",145,1)](function()for b=f("\xd4",229,2),f("\xa0",149,2)do a()[f("\x8d\x8f\x94\x93\x89",253,1)](f("\xa2\x8e\x93\x8e\x94\x95\x88\x8f\x84\xc1\x88\x95\x84\x93\x80\x95\x88\x8e\x8f\xdb",225,1),b)a()[f("\x9e\x92\x8f\x92\x88\x89\x94\x93\x98",253,1)][f("\xcc\xdc\xd0\xd9\xd1",181,1)]()end end)a()[f("\xb7\xb5\xae\xa9\xb3",199,1)](f("\xba\x96\x8b\x96\x8c\x8d\x90\x97\x9c\xd9\x9d\x9c\x94\x96\x97\x8a\x8d\x8b\x98\x8d\x90\x96\x97\xc3",249,1))a()[f("\xdc\xd0\xcd\xd0\xca\xcb\xd6\xd1\xda",191,1)][f("\x84\x93\x85\x83\x9b\x93",246,1)](b)a()[f("\xaf\xa3\xbe\xa3\xb9\xb8\xa5\xa2\xa9",204,1)][f("\x88\x9f\x89\x8f\x97\x9f",250,1)](b)a()[f("\xdb\xd7\xca\xd7\xcd\xcc\xd1\xd6\xdd",184,1)][f("\x81\x96\x80\x86\x9e\x96",243,1)](b)a()[f("\xf2\xfe\xe3\xfe\xe4\xe5\xf8\xff\xf4",145,1)][f("\x82\x95\x83\x85\x9d\x95",240,1)](b)a()[f("\x83\x8f\x92\x8f\x95\x94\x89\x8e\x85",224,1)][f("\xbd\xaa\xbc\xba\xa2\xaa",207,1)](b)