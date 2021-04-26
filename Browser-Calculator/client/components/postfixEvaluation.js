import Stack from './stack.js'

// Evaluate a Postfix expression
export default function postFixEvaluation (exp) {
  const stack = new Stack()
  for (let i = 0; i < exp.length; i++) {
    const ch = exp[i]

    // check for digits and put them on the stack,
    // otherwise evaluate the next two digits
    if (!isNaN(ch)) {
      stack.push(ch - '0')
    } else {
      const val1 = stack.pop()
      const val2 = stack.pop()

      // If the stack is empty, catch the failure
      if (val1 === 'underflow' || val2 === 'underflow') {
        return 'can\'t perform postfix evaluation'
      }

      // Evaluate the digits
      switch (ch) {
        case '+':
          stack.push(val2 + val1)
          break
        case '-':
          stack.push(val2 - val1)
          break
        case '/':
          stack.push(val2 / val1)
          break
        case '*':
          stack.push(val2 * val1)
          break
        case '^': {
          let power = 1
          for (let i = 0; i < val1; i++) {
            power = power * val2
          }
          stack.push(power)
          break
        }
      }
    }
  }

  return stack.pop()
}
