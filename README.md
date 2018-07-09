# Language Lua Plus

##### Lua grammar and snippets for Atom.

### Autocomplete-plus support

x means tab stops (excluding non-word tokens)

*x* means comments

[x] means optional and tab stops

#### Snippets

|   Prefix   |                 Description                 |                                  Content                                  |
| ---------- | ------------------------------------------- | ------------------------------------------------------------------------- |
| local      | Local statement.                            | **local**                                                                 |
| var        | Variable declaration.                       | variableName = any                                                        |
| varl       | Local variable declaration.                 | **local** variableName [= any]                                            |
| label      | Label statement.                            | **::** labelName **::**                                                   |
| goto       | Goto statement referring to a label.        | **goto** labelName                                                        |
| return     | Return values from a function or a chunk.   | **return** [any]                                                          |
| tern       | Ternary conditional expression.             | condition **and** any **or** any                                          |
| do         | Explicit block.                             | **do** *code* **end**                                                     |
| if         | If conditional block.                       | **if** [**not**] condition **then** *code* **end**                        |
| ife        | If/else conditional block.                  | **if** [**not**] condition **then** *code* **else** *code* **end**        |
| elif       | Elseif conditional block.                   | **elseif** [**not**] condition **then** *code* **end**                    |
| else       | Else conditional block.                     | **else** *code* **end**                                                   |
| while      | While loop block.                           | **while** [**not**] condition **do** *code* **end**                       |
| repeat     | Repeat loop block.                          | **repeat** *code* **until** condition                                     |
| for        | For loop block.                             | **for** i = 1, iEnd [, iSeq] **do** *code* **end**                        |
| forp  | For in loop block (pairs).                       | **for** key, value **in** **pairs**(object) **do** *code* **end**         |
| fori       | For in loop block (ipairs).                 | **for** index, value **in** **ipairs**(object) **do** *code* **end**      |
| fun        | Function statement.                         | **function** functionName(...) *code* **end**                             |
| fundef     | Function definition (anonymous).            | functionName = **function**(...) *code* **end**                           |

#### Standard libraries

##### Basic

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| ver                | **_VERSION**                                              |
| prin               | **print** 'Hello world!'                                  |
| print              | **print**(message)                                        |
| tonumber           | **tonumber**(value [, base])                              |
| tostring           | **tostring**(value)                                       |
| type               | **type**(any)                                             |
| assert             | **assert**(value [, message])                             |
| garbage            | **collectgarbage**([option [, argument]])                 |
| error              | **error**(message [, level])                              |
| select             | **select**(index)                                         |
| next               | **next**(table [, index])                                 |
| getmetatable       | **getmetatable**(object)                                  |
| setmetatable       | **setmetatable**(table, metatable)                        |
| pairs              | **pairs**(table)                                          |
| ipairs             | **ipairs**(table)                                         |
| dofile             | **dofile**(fileName)                                      |
| load               | **load**(chunk [, chunkName [, mode [, env]]])            |
| loadfile           | **loadfile**([fileName [, mode [, env]]])                 |
| callp              | **pcall**(func [, argument])                              |
| callxp             | **xpcall**(func, msgh [, argument])                       |
| rawget             | **rawget**(table, index)                                  |
| rawset             | **rawset**(table, index, value)                           |
| rawequal           | **rawequal**(value1, value2)                              |
| rawlen             | **rawlen**(object)                                        |

##### Coroutine

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| corocreate         | **coroutine**.**create**(func)                            |
| corowrap           | **coroutine**.**wrap**(func)                              |
| corostatus         | **coroutine**.**status**(coro)                            |
| cororunning        | **coroutine**.**running**()                               |
| cororesume         | **coroutine**.**resume**(coro [, value])                  |
| coroisyieldable    | **coroutine**.**isyieldable**()                           |
| coroyield          | **coroutine**.**yield**()                                 |

##### Package

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| req                | **require** 'modName'                                     |
| req1               | **require**(modName)                                      |
| packpath           | **package**.**path** 'path'                               |
| packcpath          | **package**.**cpath** 'path'                              |
| packpreload        | **package**.**preload** 'modName'                         |
| packloaded         | **package**.**loaded** 'modName'                          |
| packloadlib        | **package**.**loadlib**(libName)                          |
| packsearchers      | **package**.**searchers** 'path'                          |
| packsearchpath     | **package**.**searchpath**(name, path [, sep [, rep]])    |
| packconfig         | **package**.**config** 'config'                           |

##### String

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| strbyte            | **string**.**byte**(s [, i [, j]])                        |
| strchar            | **string**.**char**([number])                             |
| strdump            | **string**.**dump**(func, strip)                          |
| strfind            | **string**.**find**(s, pattern [, init [, plain]])        |
| strformat          | **string**.**format**(formatString [, s])                 |
| strlen             | **string**.**len**(s)                                     |
| strrep             | **string**.**rep**(s, n [, sep])                          |
| strreverse         | **string**.**reverse**(s)                                 |
| strupper           | **string**.**upper**(s)                                   |
| strlower           | **string**.**lower**(s)                                   |
| strgmatch          | **string**.**gmatch**(s, pattern)                         |
| strgsub            | **string**.**gsub**(s, pattern, repl [, n])               |
| strmatch           | **string**.**match**(s, pattern [, init])                 |
| strsub             | **string**.**sub**(s, i [, j])                            |
| strunpack          | **string**.**unpack**(fmt, s [, pos])                     |
| strpack            | **string**.**pack**(fmt, argument)                        |
| strpacksize        | **string**.**packsize**(fmt)                              |

##### UTF-8

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| utfchar            | **utf8**.**char**(number)                                 |
| utfcharpattern     | **utf8**.**charpattern** 'pattern'                        |
| utfcodes           | **utf8**.**codes**(s)                                     |
| utfcodepoint       | **utf8**.**codepoint**(s [, i [, j]])                     |
| utflen             | **utf8**.**len**(s [, i [, j]])                           |
| utfoffset          | **utf8**.**offset**(s, n [, i])                           |

##### Table

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| tabconcat | **table**.**concat**(list [, sep [, i [, j]]])                     |
| tabinsert | **table**.**insert**(list, [pos,] value)                           |
| tabremove | **table**.**remove**(list [, pos])                                 |
| tabmove | **table**.**move**(a1, f, e, t [,a2])                                |
| tabsort | **table**.**sort**(list [, comp])                                    |
| tabunpack | **table**.**unpack**(list [, i [, j]])                             |
| tabpack | **table**.**pack**()                                                 |

##### Math

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| mathpi             | **math**.**pi**                                           |
| mathabs            | **math**.**abs**(x)                                       |
| mathacos           | **math**.**acos**(x)                                      |
| mathasin           | **math**.**asin**(x)                                      |
| mathatan           | **math**.**atan**(y [, x])                                |
| mathceil           | **math**.**ceil**(x)                                      |
| mathcos            | **math**.**cos**(x)                                       |
| mathdeg            | **math**.**deg**(x)                                       |
| mathexp            | **math**.**exp**(x)                                       |
| mathfloor          | **math**.**floor**(x)                                     |
| mathfmod           | **math**.**fmod**(x, y)                                   |
| mathlog            | **math**.**log**(x [, base])                              |
| mathhuge           | **math**.**huge**(x)                                      |
| mathmax            | **math**.**max**(x)                                       |
| mathmaxinteger     | **math**.**maxinteger**                                   |
| mathmin            | **math**.**min**(x)                                       |
| mathmininteger     | **math**.**mininteger**                                   |
| mathmodf           | **math**.**modf**(x)                                      |
| mathrad            | **math**.**rad**(x)                                       |
| mathrandom         | **math**.**random**([m [, n]])                            |
| mathrandomseed     | **math**.**randomseed**(x)                                |
| mathsin            | **math**.**sin**(x)                                       |
| mathsqrt           | **math**.**sqrt**(x)                                      |
| mathtan            | **math**.**tan**(x)                                       |
| mathtointeger      | **math**.**tointeger**(x)                                 |
| mathtype           | **math**.**type**(x)                                      |
| mathult            | **math**.**ult**(m, n)                                    |

##### IO

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| ioclose            | **io**.**close**([file])                                  |
| ioflush            | **io**.**flush**()                                        |
| ioinput            | **io**.**input**([file])                                  |
| iolines            | **io**.**lines**([fileName])                              |
| ioopen             | **io**.**open**(fileName [, mode])                        |
| iooutput           | **io**.**output**([file])                                 |
| iopopen            | **io**.**popen**(prog [, mode])                           |
| ioread             | **io**.**read**()                                         |
| iotmpfile          | **io**.**tmpfile**()                                      |
| iotype             | **io**.**type**(object)                                   |
| iowrite            | **io**.**write**()                                        |
| fileclose          | **io**.**close**()                                        |
| fileflush          | **io**.**flush**()                                        |
| filelines          | **io**.**lines**()                                        |
| fileread           | **io**.**read**()                                         |
| fileseek           | **io**.**seek**([whence [, offset]])                      |
| filesetvbuf        | **io**.**setvbuf**(mode [, size])                         |
| filewrite          | **io**.**write**()                                        |

##### OS

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| osclock            | **os**.**clock**()                                        |
| osdate             | **os**.**date**([format [, time]])                        |
| ostime             | **os**.**time**([table])                                  |
| osdifftime         | **os**.**difftime**(t2, t1)                               |
| osexecute          | **os**.**execute**([command])                             |
| osexit             | **os**.**exit**([code [, close]])                         |
| osremove           | **os**.**remove**(fileName)                               |
| osrename           | **os**.**rename**(oldName, newName)                       |
| osgetenv           | **os**.**getenv**(varName)                                |
| ossetlocale        | **os**.**setlocale**(locale [, category])                 |
| ostmpname          | **os**.**tmpname**()                                      |

##### Debug

|       Prefix       |                          Content                          |
| ------------------ | --------------------------------------------------------- |
| debdebug | **debug**.**debug**() |
| debgethook | **debug**.**gethook** |
| debgetinfo | **debug**.**getinfo** |
| debgetlocal | **debug**.**getlocal** |
| debgetmetatable | **debug**.**getmetatable** |
| debgetregistry | **debug**.**getregistry** |
| debgetupvalue | **debug**.**getupvalue** |
| debgetuservalue | **debug**.**getuservalue** |
| debsethook | **debug**.**sethook** |
| debsetlocal | **debug**.**setlocal** |
| debsetmetatable | **debug**.**setmetatable** |
| debsetupvalue | **debug**.**setupvalue** |
| debsetuservalue | **debug**.**setuservalue** |
| debtraceback | **debug**.**traceback** |
| debupvalueid | **debug**.**upvalueid** |
| debupvaluejoin | **debug**.**upvaluejoin** |

#### References

- [Lua Documentation](https://www.lua.org/docs.html)
- [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/)

#### License

This package is under a [MIT license](https://github.com/Azganoth/language-lua-plus/blob/master/LICENSE.md).
