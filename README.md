# Language Lua Plus

##### Lua grammar and snippets for Atom.

### Snippets

x means tab stops (excluding non-word tokens)

*x* means comments

[x] means optional and tab stops

##### Common

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

#### References

- [Lua Documentation](https://www.lua.org/docs.html)
- [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/)

#### License

This package is under a MIT license.
