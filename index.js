'use strict'
const colors = require('./colors')
module.exports = (defaultColor, deactivate = false) => {
  class Loggio {

    constructor() {
      this.defaultColor = this.getColor(defaultColor)
      this.deactivate = deactivate
      this.prefix = new Date()
      this.spinnerInterval = null
      this.stream = null
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

    showSpinner(text = '') {
      this.stream = process.stderr
      let spinnerCharacter = this.getSpinnerCharacter()
      let msg = this.getMessageToSpinner(spinnerCharacter, text)
      this.stream.write(msg)
      this.spinnerInterval = setInterval(() => {
        this.clearSpinner()
        spinnerCharacter = this.getSpinnerCharacter(spinnerCharacter)
        msg = this.getMessageToSpinner(spinnerCharacter, text)
        this.stream.write(msg)
      }, 800)
    }

    clearSpinner() {
      this.stream.clearLine()
      this.stream.cursorTo(0)
    }

    getSpinnerCharacter(step) {
      if (!step || step == '|') {
        return '/'
      } else if (step == '/') {
        return '-'
      } else if (step == '-') {
        return '\\'
      } else if (step == '\\') {
        return '|'
      }
    }

    getMessageToSpinner(step, text) {
      if (text) {
        text = String(text)
        return `${step} ${text}`
      } else {
        return step
      }
    }

    stopSpinner() {
      clearInterval(this.spinnerInterval)
      this.clearSpinner()
    }

  }

  return new Loggio(defaultColor)
}
