'use strict'
//Initialize context to "simple" and default color "green".
let loggio = require('./../index')()
loggio.log('hello!')
loggio.log('hello 2!')
loggio.log({ test: 'this is a json!' })
loggio.warn({ test: { message: 'json', array: [1, 2, 3, 4] } })
loggio.error('this is a error message!')
loggio.info('this is a info message!')
loggio.success('this is a success message!')
loggio.setPrefix('My prefix')
loggio.log('Log with custom prefix')
loggio.showSpinner('Loading...')

setTimeout(() => {
  loggio.stopSpinner()
}, 4000)

setTimeout(() => {
  loggio.showLoadingBar()
  let loadingBarInterval = setInterval(() => {
    let progress = Math.floor(Math.random() * 100 + 1)
    loggio.setProgressLoadingBar(progress)
  }, 1000)

  setTimeout(() => {
    loggio.stopLoadingBar()
    clearInterval(loadingBarInterval)
  }, 5000)
}, 5000)
