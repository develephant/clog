/* clog (c) 2017 develephant */

const colors = require('colors/safe')

colors.setTheme({
  b:        'blue',
  c:        'cyan',
  d:        'green',//"debug"
  e:        'red',//"err"
  g:        'green',
  h:        'inverse',//"help"
  i:        'blue',//"info"
  m:        'magenta',
  o:        'green',//"ok"
  p:        'white',//"prompt"
  r:        'red',
  s:        'strikethrough',
  w:        'yellow',//"warn"
  bk:       'black',
  wh:       'white',
  u:        'underline',
  v:        'magenta',//"verbose"
  y:        'yellow',
  bgb:      'bgBlue',
  bgc:      'bgCyan',
  bgg:      'bgGreen',
  bgk:      'bgBlack',
  bgm:      'bgMagenta',
  bgr:      'bgRed',
  bgw:      'bgWhite',
  bgy:      'bgYellow',
  bld:      'bold',
  em:       'italic',
  inv:      'inverse',
  st:       'strikethrough',
  ul:       'underline',
  data:     'grey',
  debug:    'green',
  err:      'red',
  help:     'inverse',
  info:     'blue',
  input:    'white',
  ok:       'green',
  prompt:   'white',
  warn:     'yellow',
  verbose:  'magenta',
});

const clrProxy = new Proxy(colors, {
  get(target, color_val) {
    let clr = target[color_val]
    return (...args) => {
      console.log(clr([...args].join(' ')))
    }
  }
})

module.exports = clrProxy
