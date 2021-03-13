const op = require("./op")
const X = require("./constants")

const calc = (x, a, b) => {
  let result
  switch (x) {
    case X.MUL_OP:
      result = op.mul(a, b)
      break
    case X.DIV_OP:
      result = op.div(a, b)
      break
    case X.ADD_OP:
      result = op.add(a, b)
      break
    case X.SUB_OP:
      result = op.sub(a, b)
      break
    case X.MOD_OP:
      result = op.modulo(a, b)
      break
    default:
      console.log('Wrong opperator')
  }
  return result
}

exports.calc = calc