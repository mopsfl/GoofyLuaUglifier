-- Test Script

-- Function Definitions
function add(a, b)
    return a + b
end

function greet(name)
    return "Hello, " .. name .. "!"
end

function factorial(n)
    if n == 0 then
        return 1
    else
        return n * factorial(n - 1)
    end
end

function varargs(...)
    local args = {...}
    for i, v in ipairs(args) do
        print("Arg", i, ":", v)
    end
end

-- Local Variables
local number = 10
local boolean = true
local str = "Lua Scripting"

-- Numbers
print("Number:", number)
print("Number + 5:", add(number, 5))

-- Booleans
if boolean then
    print("Boolean is true")
else
    print("Boolean is false")
end

-- Strings
print("String:", str)
print("Greeting:", greet("World"))

-- Loops
print("While loop:")
local i = 1
while i <= 5 do
    print("i:", i)
    i = i + 1
end

print("For loop:")
for j = 1, 5 do
    print("j:", j)
end

print("Repeat until loop:")
local k = 1
repeat
    print("k:", k)
    k = k + 1
until k > 5

-- Factorial using recursion
print("Factorial of 5:", factorial(5))

-- Varargs
print("Varargs demonstration:")
varargs(1, "two", 3.0, true, "end")

-- Tables (Lua's data structure similar to arrays and dictionaries)
local tbl = {name = "Lua", version = 5.4}
print("Table:")
for key, value in pairs(tbl) do
    print(key, ":", value)
end

-- Meta-tables and Meta-methods (Advanced topic)
local meta = {}
local metaTbl = setmetatable({}, {
    __index = meta,
    __tostring = function() return "This is a meta table" end
})

print("Meta-table demonstration:")
print(metaTbl)

-- Coroutines (Advanced topic)
local co = coroutine.create(function ()
    for i = 1, 5 do
        print("Coroutine iteration:", i)
        coroutine.yield()
    end
end)

print("Coroutine demonstration:")
coroutine.resume(co)
coroutine.resume(co)
coroutine.resume(co)
coroutine.resume(co)
coroutine.resume(co)
