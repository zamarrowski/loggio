'use strict'
//Initialize context to "simple" and default color "green".
let liteLogger = require('./../index')('examples', 'green')
liteLogger.log('hello!')
liteLogger.log('hello 2!')
liteLogger.log({ test: 'this is a json!' })
liteLogger.warn({ test: { message: 'json', array: [1, 2, 3, 4] } })
liteLogger.error('this is a error message!')
liteLogger.info('this is a info message!')
