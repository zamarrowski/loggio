'use strict'
const colors = require('./colors')
module.exports = (defaultColor, deactivate = false) => {
  class Loggio {

    constructor() {
      this.defaultColor = this.getColor(defaultColor)
      this.deactivate = deactivate
      this.prefix = new Date()
    }

    getColor(color) {
      return colors[color] || ''
    }

    setPrefix(prefix) {
      this.prefix = prefix
    }

    log(msg, color, context) {
      if (!this.deactivate) {
        if (typeof msg === 'string') {
          console.log(`${color || this.defaultColor}${this.prefix} | ${context || this.getFilePostion()} => ${msg}\x1b[0m`)
        } else {
          console.log(`${color || this.defaultColor}${this.prefix} | ${context || this.getFilePostion()} =>`)
          console.log(msg)
          console.log(`\x1b[0m`)
        }
      }
    }

    error(msg) {
      this.log(msg, this.getColor('red'), this.getFilePostion())
    }

    warn(msg) {
      this.log(msg, this.getColor('yellow'), this.getFilePostion())
    }

    info(msg) {
      this.log(msg, this.getColor('blue'), this.getFilePostion())
    }

    success(msg) {
      this.log(msg, this.getColor('green'), this.getFilePostion())
    }

    getFilePostion() {
      let stack = new Error().stack.split('\n')
      let matched = stack[3].match(/([\w\d\-_.]*:\d+:\d+)/)
      return matched[1]
    }

  }

  return new Loggio(defaultColor)
}
