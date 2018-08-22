# Language Lua Plus

##### Lua grammar and snippets for Atom.

### Autocomplete-plus support

{x} means tab stops

### Snippets

|  Prefix  |                 Description                 |                       Content                       |
| -------- | ------------------------------------------- | --------------------------------------------------- |
| `return` | Return statement.                           | return                                              |
| `do`     | Explicit block.                             | do¬»{}¬end                                          |
| `if`     | Conditional block.                          | if {not} {condition} then¬»{}¬end                   |
| `ife`    | Conditional block.                          | if {not} {condition} then¬»{}¬else¬»{}¬end          |
| `elseif` | Sub-conditional block.                      | elseif {not} {condition} then¬»{}                   |
| `else`   | Sub-conditional block.                      | else¬»{}                                            |
| `while`  | While loop block.                           | while {not} {condition} do¬»{}¬end                  |
| `repeat` | Repeat loop block.                          | repeat¬»{}¬until {condition}                        |
| `for`    | For loop block.                             | for {i} = {1}, {i_stop}, {i_step} do¬»{}¬end        |
| `forn`   | For in loop block using `next` function.    | for {index} in next, {table} do¬»{}¬end             |
| `forp`   | For in loop block using `pairs` function.   | for {key}, {value} in pairs({table}) do¬»{}¬end     |
| `fori`   | For in loop block using `ipairs` function.  | for {index}, {value} in ipairs({table}) do¬»{}¬end  |
| `tern`   | Ternary conditional expression.             | {condition} and {true} or {false}                   |
| `fun`    | Named function.                             | function {functionName}({...})¬»{}¬end              |
| `fundef` | Anonymous function.                         | function ({...})¬»{}¬end                            |

### Standard libraries

#### Basic

|     Prefix     |                  Content                  |
| -------------- | ----------------------------------------- |
| `ver`          | _VERSION                                  |
| `sprint`       | print '{...}'                             |
| `print`        | print({...})                              |
| `tonumber`     | tonumber({value}, {base})                 |
| `tostring`     | tostring({value})                         |
| `type`         | type({any})                               |
| `assert`       | assert({value}, {message})                |
| `garbage`      | collectgarbage({option}, {argument})      |
| `error`        | error({message}, {level})                 |
| `select`       | select({index}, {...})                    |
| `next`         | next({table}, {index})                    |
| `getmetatable` | getmetatable({object})                    |
| `setmetatable` | setmetatable({table}, {metatable})        |
| `pairs`        | pairs({table})                            |
| `ipairs`       | ipairs({table})                           |
| `dofile`       | dofile({fileName})                        |
| `load`         | load({chunk}, {chunkName}, {mode}, {env}) |
| `loadfile`     | loadfile({fileName}, {mode}, {env})       |
| `callp`        | pcall({func}, {argument})                 |
| `callxp`       | xpcall({func}, {msgh}, {argument})        |
| `rawget`       | rawget({table}, {index})                  |
| `rawset`       | rawset({table}, {index}, {value})         |
| `rawequal`     | rawequal({value1}, {value2})              |
| `rawlen`       | rawlen({object})                          |

#### Coroutine

|       Prefix       |              Content              |
| ------------------ | --------------------------------- |
| `corocreate`       | coroutine.create({func})          |
| `corowrap`         | coroutine.wrap({func})            |
| `corostatus`       | coroutine.status({coro})          |
| `cororunning`      | coroutine.running()               |
| `cororesume`       | coroutine.resume({coro}, {value}) |
| `coroisyieldable`  | coroutine.isyieldable()           |
| `coroyield`        | coroutine.yield({...})            |

#### Package

|      Prefix      |                      Content                      |
| ---------------- | ------------------------------------------------- |
| `req`            | require '{modName}'                               |
| `req1`           | require({modName})                                |
| `packpath`       | package.path '{path}'                             |
| `packcpath`      | package.cpath '{path}'                            |
| `packpreload`    | package.preload '{modName}'                       |
| `packloaded`     | package.loaded '{modName}'                        |
| `packloadlib`    | package.loadlib({libName}, {func})                |
| `packsearchers`  | package.searchers '{path}'                        |
| `packsearchpath` | package.searchpath({name}, {path}, {sep}, {rep})  |
| `packconfig`     | package.config '{config}'                         |

#### String

|     Prefix     |                    Content                    |
| -------------- | --------------------------------------------- |
| `strbyte`      | string.byte({s}, {i}, {j})                    |
| `strchar`      | string.char({number})                         |
| `strdump`      | string.dump({func}, {strip})                  |
| `strfind`      | string.find({s}, {pattern}, {init}, {plain})  |
| `strformat`    | string.format({formatString}, {s})            |
| `strlen`       | string.len({s})                               |
| `strrep`       | string.rep({s}, {n}, {sep})                   |
| `strreverse`   | string.reverse({s})                           |
| `strupper`     | string.upper({s})                             |
| `strlower`     | string.lower({s})                             |
| `strgmatch`    | string.gmatch({s}, {pattern})                 |
| `strgsub`      | string.gsub({s}, {pattern}, {repl}, {n})      |
| `strmatch`     | string.match({s}, {pattern}, {init})          |
| `strsub`       | string.sub({s}, {i}, {j})                     |
| `strunpack`    | string.unpack({fmt}, {s}, {pos})              |
| `strpack`      | string.pack({fmt}, {argument})                |
| `strpacksize`  | string.packsize({fmt})                        |

#### UTF-8

|      Prefix      |            Content            |
| ---------------- | ----------------------------- |
| `utfchar`        | utf8.char({number})           |
| `utfcharpattern` | utf8.charpattern '{pattern}'  |
| `utfcodes`       | utf8.codes({s})               |
| `utfcodepoint`   | utf8.codepoint({s}, {i}, {j}) |
| `utflen`         | utf8.len({s}, {i}, {j})       |
| `utfoffset`      | utf8.offset({s}, {n}, {i})    |

#### Table

|    Prefix    |                Content                |
| ------------ | ------------------------------------- |
| `tabconcat`  | table.concat({list}, {sep}, {i}, {j}) |
| `tabinsert`  | table.insert({list}, {pos}, {value})  |
| `tabremove`  | table.remove({list}, {pos})           |
| `tabmove`    | table.move({a1}, {f}, {e}, {t},{a2})  |
| `tabsort`    | table.sort({list}, {comp})            |
| `tabunpack`  | table.unpack({list}, {i}, {j})        |
| `tabpack`    | table.pack({...})                     |

#### Math

|      Prefix      |         Content         |
| ---------------- | ----------------------- |
| `mathpi`         | math.pi                 |
| `mathabs`        | match.abs({x})          |
| `mathacos`       | match.acos({x})         |
| `mathasin`       | match.asin({x})         |
| `mathatan`       | match.atan({y}, {x})    |
| `mathceil`       | match.ceil({x})         |
| `mathcos`        | match.cos({x})          |
| `mathdeg`        | match.deg({x})          |
| `mathexp`        | match.exp({x})          |
| `mathfloor`      | match.floor({x})        |
| `mathfmod`       | match.fmod({x}, {y})    |
| `mathlog`        | match.log({x}, {base})  |
| `mathhuge`       | match.huge({x})         |
| `mathmax`        | match.max({x})          |
| `mathmaxinteger` | match.maxinteger        |
| `mathmin`        | match.min({x})          |
| `mathmininteger` | match.mininteger        |
| `mathmodf`       | match.modf({x})         |
| `mathrad`        | match.rad({x})          |
| `mathrandom`     | match.random({m}, {n})  |
| `mathrandomseed` | match.randomseed({x})   |
| `mathsin`        | match.sin({x})          |
| `mathsqrt`       | match.sqrt({x})         |
| `mathtan`        | match.tan({x})          |
| `mathtointeger`  | match.tointeger({x})    |
| `mathtype`       | match.type({x})         |
| `mathult`        | match.ult({m}, {n})     |

#### IO

|     Prefix     |            Content            |
| -------------- | ----------------------------- |
| `ioclose`      | io.close({file})              |
| `ioflush`      | io.flush()                    |
| `ioinput`      | io.input({file})              |
| `iolines`      | io.lines({fileName})          |
| `ioopen`       | io.open({fileName}, {mode})   |
| `iooutput`     | io.output({file})             |
| `iopopen`      | io.popen({prog}, {mode})      |
| `ioread`       | io.read({...})                |
| `iotmpfile`    | io.tmpfile()                  |
| `iotype`       | io.type({object})             |
| `iowrite`      | io.write({...})               |
| `fileclose`    | file:close()                  |
| `fileflush`    | file:flush()                  |
| `filelines`    | file:lines({...})             |
| `fileread`     | file:read({...})              |
| `fileseek`     | file:seek({whence}, {offset}) |
| `filesetvbuf`  | file:setvbuf({mode}, {size})  |
| `filewrite`    | file:write({...})             |

#### OS

|     Prefix     |               Content               |
| -------------- | ----------------------------------- |
| `osclock`      | os.clock()                          |
| `osdate`       | os.date({format}, {time})           |
| `ostime`       | os.time({table})                    |
| `osdifftime`   | os.difftime({t2}, {t1})             |
| `osexecute`    | os.execute({command})               |
| `osexit`       | os.exit({code}, {close})            |
| `osremove`     | os.remove({fileName})               |
| `osrename`     | os.rename({oldName}, {newName})     |
| `osgetenv`     | os.getenv({varName})                |
| `ossetlocale`  | os.setlocale({locale}, {category})  |
| `ostmpname`    | os.tmpname()                        |

#### Debug

|       Prefix       |                       Content                       |
| ------------------ | --------------------------------------------------- |
| `debdebug`         | debug.debug()                                       |
| `debgethook`       | debug.gethook({thread})                             |
| `debgetinfo`       | debug.getinfo({thread}, {func}, {what})             |
| `debgetlocal`      | debug.getlocal({thread}, {func}, {local})           |
| `debgetmetatable`  | debug.getmetatable({value})                         |
| `debgetregistry`   | debug.getregistry()                                 |
| `debgetupvalue`    | debug.getupvalue({func}, {up})                      |
| `debgetuservalue`  | debug.getuservalue({u})                             |
| `debsethook`       | debug.sethook({thread}, {hook}, {mask}, {count})    |
| `debsetlocal`      | debug.setlocal({thread}, {level}, {local}, {value}) |
| `debsetmetatable`  | debug.setmetatable({value}, {table})                |
| `debsetupvalue`    | debug.setupvalue({func}, {up}, {value})             |
| `debsetuservalue`  | debug.setuservalue({udata}, {value})                |
| `debtraceback`     | debug.traceback({thread}, {message}, {level})       |
| `debupvalueid`     | debug.upvalueid({func}, {n})                        |
| `debupvaluejoin`   | debug.upvaluejoin({f1}, {n1}, {f2}, {n2})           |

#### References

- [Lua Documentation](https://www.lua.org/docs.html)
- [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/)

#### License

This package is under a [MIT license](https://github.com/Azganoth/language-lua-plus/blob/master/LICENSE.md).
