import Stack from './stack.js'

// Gets precedence of operators
function getPrecedence (ch) {
  if (ch === '+' || ch === '-') {
    return 1
  } else if (ch === '*' || ch === '/') {
    return 2
  } else if (ch === '^') {
    return 3
  }
}

// checks whether the input string is the right size and use regex to determine whether it is a digit
function isDigit (str) {
  return str.length === 1 && str.match(/[0-9]/i)
}

export default function ShuntingYard (exp) {
  // Both the stack and the output stack are empty
  const stack = new Stack()
  let output = ''

  // Iterate over the tokens of the expression
  for (let i = 0; i < exp.length; ++i) {
    // using the ith index
    const ch = exp.charAt(i)

    // 1. if the token is an operand, add to the output stack
    // 2. If the token is an opening parentheses, push it to the holding stack
    // 3. If the token is a closing parentheses, pop and append to output
    //    from the holding stack until closing parenthesis is found
    // 4. Otherwise an operator is encountered. Take action based on precedence of the operator
    if (isDigit(ch)) {
      output += ch
    } else if (ch === '(') {
      stack.push(ch)
    } else if (ch === ')') {
      while (!stack.isEmpty() && stack.peek() !== '(') {
        output += stack.pop()
      }
      stack.pop()
    } else {
      while (!stack.isEmpty() && getPrecedence(ch) <= getPrecedence(stack.peek())) {
        output += stack.pop()
      }
      stack.push(ch)
    }
  }

  // Pop all remaining operators from the stack and append them to output
  while (!stack.isEmpty()) {
    if (stack.peek() === '(') {
      return 'This expression is invalid'
    }
    output += stack.pop()
  }

  // return our new Postfix string to evaluate
  return output
}
