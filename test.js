const clog = require('./index')

clog.ok('green', 'This is an "ok" string')

clog.info('blue', 'This is an "info" string')

clog.warn('yellow' ,'This is a "warn"-ing string')

clog.err('red' ,'This is an "err" string')

clog.bgGreen('This is a "bgGreen" string directly from the colors module')

clog.bgb('This is a blue backgound string using the "bgb" shortcut')

clog.data('This is a string using the "data" theme setting')

clog.help('This is a string using the "help" theme setting')

clog.c('This is a cyan string using the "c" shortcut')

clog.bld('This is a bold string using the "bld" shortcut')

clog.ul('This is underlined text using the "ul" shortcut')

clog.rainbow('This is a rainbow string directly from the colors module')