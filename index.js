'use strict'
const colors = require('./colors')
module.exports = (context, defaultColor) => {

  class Loggio {
    constructor(context) {
      this.context = context
      this.defaultColor = this.getColor(defaultColor)
    }

    getColor(color) {
      return colors[color] || ''
    }

    log(msg, color) {
      if (typeof msg === 'string') {
        console.log(`${color || this.defaultColor}${new Date()} | ${this.context} => ${msg}\x1b[0m`)
      } else {
        console.log(`${color || this.defaultColor}${new Date()} | ${this.context} =>`)
        console.log(msg)
        console.log(`\x1b[0m`)
      }
    }

    error(msg) {
      this.log(msg, this.getColor('red'))
    }

    warn(msg) {
      this.log(msg, this.getColor('yellow'))
    }

    info(msg) {
      this.log(msg, this.getColor('blue'))
    }

  }

  return new Loggio(context)
}
