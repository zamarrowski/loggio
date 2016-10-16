'use strict'
//Initialize context to "simple" and default color "green".
let loggio = require('./../index')('examples', 'green')
loggio.log('hello!')
loggio.log('hello 2!')
loggio.log({ test: 'this is a json!' })
loggio.warn({ test: { message: 'json', array: [1, 2, 3, 4] } })
loggio.error('this is a error message!')
loggio.info('this is a info message!')
