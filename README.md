# Language Lua Plus

Lua grammar and snippets for Atom.

## Suggestions: Lua Keywords and Constructs

`return`
```lua
return
```

`do`
```lua
do
»
end
```

`if`
```lua
if not condition then
»
end
```

`ifel`
```lua
if not condition then
»
else
»
end
```

`elseif`
```lua
elseif not condition then
»
```

`else`
```lua
else
»
```

`while`
```lua
while not condition do
»
end
```

`repeat`
```lua
repeat
»
until not condition
```

`for`
```lua
for i = 1, 10, i_step do
»
end
```

`forn`
```lua
for k, v in next, tbl do
»
end
```

`forp`
```lua
for k, v in pairs(tbl) do
»
end
```

`fori`
```lua
for i, v in ipairs(tbl) do
»
end
```

`tern`
```lua
condition and true or false
```

`func`
```lua
function func(params)
»
end
```

`funcdef`
```lua
function (params)
»
end
```

## Suggestions: Standard Lua Libraries

### Basic

`ver`
```lua
_VERSION
```

`sprint`
```lua
print 'text'
```

`print`
```lua
print(args)
```

`tonumber`
```lua
tonumber(value, base)
```

`tostring`
```lua
tostring(value)
```

`type`
```lua
type(var)
```

`assert`
```lua
assert(value, msg)
```

`cgar`
```lua
collectgarbage(action, arg)
```

`error`
```lua
error(msg, level)
```

`select`
```lua
select(param, args)
```

`next`
```lua
next(tbl, index)
```

`getmeta`
```lua
getmetatable(obj)
```

`setmeta`
```lua
setmetatable(obj, metatbl)
```

`pairs`
```lua
pairs(tbl)
```

`ipairs`
```lua
ipairs(tbl)
```

`dofile`
```lua
dofile(file)
```

`load`
```lua
load(chunk, chunk_name, mode, env)
```

`loadfile`
```lua
loadfile(file, mode, env)
```

`pcall`
```lua
pcall(func, args)
```

`xpcall`
```lua
xpcall(func, msgh, args)
```

`rawget`
```lua
rawget(tbl, index)
```

`rawset`
```lua
rawset(tbl, index, value)
```

`rawequal`
```lua
rawequal(value1, value2)
```

`rawlen`
```lua
rawlen(obj)
```

### Coroutine

`corcreate`
```lua
coroutine.create(func)
```

`corwrap`
```lua
coroutine.wrap(func)
```

`corstatus`
```lua
coroutine.status(coro)
```

`corrun`
```lua
coroutine.running()
```

`corres`
```lua
coroutine.resume(coro, args)
```

`corisyield`
```lua
coroutine.isyieldable()
```

`coryield`
```lua
coroutine.yield(extra)
```

### Package

`sreq`
```lua
require 'name'
```

`req`
```lua
require(name)
```

`packpath`
```lua
package.path
```

`packcpath`
```lua
package.cpath
```

`packpreload`
```lua
package.preload
```

`packloaded`
```lua
package.loaded
```

`packloadlib`
```lua
package.loadlib(lib, func)
```

`packs`
```lua
package.searchers
```

`packspath`
```lua
package.searchpath(name, path, sep, rep)
```

`packconfig`
```lua
package.config
```

### String

`strbyte`
```lua
string.byte(str, i_start, i_end)
```

`strchar`
```lua
string.char(bytes)
```

`strdump`
```lua
string.dump(func, strip)
```

`strfind`
```lua
string.find(str, pattern, i_start, plain)
```

`strformat`
```lua
string.format(format, args)
```

`strlen`
```lua
string.len(str)
```

`strrep`
```lua
string.rep(str, n, sep)
```

`strreverse`
```lua
string.reverse(str)
```

`strupper`
```lua
string.upper(str)
```

`strlower`
```lua
string.lower(str)
```

`strgmatch`
```lua
string.gmatch(str, pattern)
```

`strgsub`
```lua
string.gsub(str, pattern, repl, n)
```

`strmatch`
```lua
string.match(str, pattern, i_start)
```

`strsub`
```lua
string.sub(str, i_start, i_end)
```

`strunpack`
```lua
string.unpack(format, str, i)
```

`strpack`
```lua
string.pack(format, args)
```

`strpacksize`
```lua
string.packsize(format)
```                    |

### UTF-8

`utfchar`
```lua
utf8.char(number)
```

`utfcharpattern`
```lua
utf8.charpattern
```

`utfcodes`
```lua
utf8.codes(str)
```

`utfcodepoint`
```lua
utf8.codepoint(str, i_start, i_end)
```

`utflen`
```lua
utf8.len(str, i_start, i_end)
```

`utfoffset`
```lua
utf8.offset(str, n, i_start)
```

### Table

`tabcon`
```lua
table.concat(tbl, sep, i_start, i_end)
```

`tabins`
```lua
table.insert(tbl, i, value)
```

`tabrem`
```lua
table.remove(tbl, i)
```

`tabmove`
```lua
table.move(tbl1, f, e, t, tbl2)
```

`tabsort`
```lua
table.sort(tbl, func)
```

`tabunpack`
```lua
table.unpack(tbl, i_start, i_end)
```

`tabpack`
```lua
table.pack(args)
```

### Math

`mathpi`
```lua
math.pi
```

`mathabs`
```lua
math.abs(x)
```

`mathacos`
```lua
math.acos(x)
```

`mathasin`
```lua
math.asin(x)
```

`mathatan`
```lua
math.atan(y, x)
```

`mathceil`
```lua
math.ceil(x)
```

`mathcos`
```lua
math.cos(x)
```

`mathdeg`
```lua
math.deg(x)
```

`mathexp`
```lua
math.exp(x)
```

`mathfloor`
```lua
math.floor(x)
```

`mathfmod`
```lua
math.fmod(x, y)
```

`mathlog`
```lua
math.log(x, base)
```

`mathhuge`
```lua
math.huge
```

`mathmax`
```lua
math.max(args)
```

`mathmaxint`
```lua
math.maxinteger
```

`mathmin`
```lua
math.min(args)
```

`mathminint`
```lua
math.mininteger
```

`mathmodf`
```lua
math.modf(x)
```

`mathrad`
```lua
math.rad(x)
```

`mathran`
```lua
math.random(x)
```

`mathranseed`
```lua
math.randomseed(x)
```

`mathsin`
```lua
math.sin(x)
```

`mathsqrt`
```lua
math.sqrt(x)
```

`mathtan`
```lua
math.tan(x)
```

`mathtoint`
```lua
math.tointeger(x)
```

`mathtype`
```lua
math.type(x)
```

`mathult`
```lua
math.ult(m, n)
```

### IO

`ioclose`
```lua
io.close(file)
```

`ioflush`
```lua
io.flush()
```

`ioinput`
```lua
io.input(file)
```

`iolines`
```lua
io.lines(file, formats)
```

`ioopen`
```lua
io.open(file, mode)
```

`iooutput`
```lua
io.output(file)
```

`iopopen`
```lua
io.popen(prog, mode)
```

`ioread`
```lua
io.read(formats)
```

`iotmpfile`
```lua
io.tmpfile()
```

`iotype`
```lua
io.type(obj)
```

`iowrite`
```lua
io.write(args)
```

`fileclose`
```lua
file:close()
```

`fileflush`
```lua
file:flush()
```

`filelines`
```lua
file:lines(formats)
```

`fileread`
```lua
file:read(formats)
```

`fileseek`
```lua
file:seek(whence, offset)
```

`filesvbuf`
```lua
file:setvbuf(mode, size)
```

`filewrite`
```lua
file:write(args)
```

### OS

`osclock`
```lua
os.clock()
```

`osdate`
```lua
os.date(format, time)
```

`ostime`
```lua
os.time(tbl)
```

`osdiff`
```lua
os.difftime(t2, t1)
```

`osexec`
```lua
os.execute(cmd)
```

`osexit`
```lua
os.exit(code, close)
```

`osrem`
```lua
os.remove(file)
```

`osren`
```lua
os.rename(old_name, new_name)
```

`osgenv`
```lua
os.getenv(var)
```

`osslocale`
```lua
os.setlocale(locale, category)
```

`ostmpname`
```lua
os.tmpname()
```

### Debug

`deb`
```lua
debug.debug()
```

`debghook`
```lua
debug.gethook(thread)
```

`debginfo`
```lua
debug.getinfo(thread, func_level, fields)
```

`debglocal`
```lua
debug.getlocal(thread, func_level, index)
```

`debgmeta`
```lua
debug.getmetatable(obj)
```

`debgreg`
```lua
debug.getregistry()
```

`debgup`
```lua
debug.getupvalue(func, index)
```

`debguser`
```lua
debug.getuservalue(udata)
```

`debshook`
```lua
debug.sethook(thread, hook, mask, count)
```

`debslocal`
```lua
debug.setlocal(thread, level, index, value)
```

`debsmeta`
```lua
debug.setmetatable(obj, metatbl)
```

`debsup`
```lua
debug.setupvalue(func, index, value)
```

`debsuser`
```lua
debug.setuservalue(udata, value)
```

`debtb`
```lua
debug.traceback(thread, msg, level)
```

`debupid`
```lua
debug.upvalueid(func, index)
```

`debupjoin`
```lua
debug.upvaluejoin(f1, n1, f2, n2)
```

## References

- [Lua Documentation](https://www.lua.org/docs.html)
- [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/)

## License

This package is under a [MIT license](https://github.com/Azganoth/language-lua-plus/blob/master/LICENSE.md).
