# `clog`

### Like 'echo' with colors.

## Install

```
npm i @develephant/clog --save
```

## Usage

```js
const clog = require('@develephant/clog')
```

## Example

```js
//log in "green"
clog.green('green output string')
clog.ok('green output string')
clog.o('green output string')//"ok" alias
clog.g('green output string')
```

## Overview

`clog` is a console output tool that supports the `colors` module. Any of the colors can be called directly from the `clog` object:

```js
clog.yellow('this is yellow')
clog.rainbow('ooo pretty')
```

### Things to know

`clog` only supports string inputs:

```js
clog.err('error', 'oh noes')
```

### Presets

_Aliases are noted by comment._

```js
b:        'blue'
c:        'cyan'
d:        'green'//"debug"
e:        'red'//"err"
g:        'green'
h:        'inverse'//"help"
i:        'blue'//"info"
m:        'magenta'
o:        'green'//"ok"
p:        'white'//"prompt"
r:        'red'
s:        'strikethrough'
w:        'yellow'//"warn"
bk:       'black'
wh:       'white'
u:        'underline'
v:        'magenta'//"verbose"
y:        'yellow'
bgb:      'bgBlue'
bgc:      'bgCyan'
bgg:      'bgGreen'
bgk:      'bgBlack'
bgm:      'bgMagenta'
bgr:      'bgRed'
bgw:      'bgWhite'
bgy:      'bgYellow'
bld:      'bold'
em:       'italic'
inv:      'inverse'
st:       'strikethrough'
ul:       'underline'
data:     'grey'
debug:    'green'
err:      'red'
help:     'inverse'
info:     'blue'
input:    'white'
ok:       'green'
prompt:   'white'
warn:     'yellow'
verbose:  'magenta'
```

> All of the [colors and styles](https://github.com/marak/colors.js/#colors-and-styles) from the `colors` module are also available directly from the `clog` object.

__Various Usage Examples__

```js
clog.ok('green', 'This is an "ok" string')

clog.info('blue', 'This is an "info" string')

clog.warn('yellow' ,'This is a "warn"-ing string')

clog.err('red' ,'This is an "err" string')

clog.bgGreen('"bgGreen" string directly from the colors module')

clog.bgb('Blue backgound string using the "bgb" shortcut')

clog.data('Using the "data" theme setting')

clog.help('Using the "help" theme setting')

clog.c('Cyan string using the "c" shortcut')

clog.e('Red error string using the "e" shortcut')

clog.bld('Bold string using the "bld" shortcut')

clog.ul('Underlined text using the "ul" shortcut')

clog.rainbow('Rainbow string directly from the colors module')
```

___All output is logged to the console, in color!___

^_^

---

#### `clog` &Star; &copy; 2017 develephant &Star; Apache-2.0 license
