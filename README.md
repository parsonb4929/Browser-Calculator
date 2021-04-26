## Browser-Calculator
Hosted calculator which evaluates postfix expressions  

# About  
The Shunting Yard Algorithm rearranges an infix expression (such as "A\*B+C") into a postfix expression ("A\*B+C" becomes "AB\*C+"). Postfix expressions are easier for a computer to evaluate than infix because it preserves the order of operations. More can be learned here: http://mathcenter.oxford.emory.edu/site/cs171/shuntingYardAlgorithm/
  
# Instructions  
To execute commands or run the code, "npm run <execution>" can be used in general. Scripts and their function can be found in package.json. Run "npm run bundle" before running "npm run server", or if wanting to run in dev mode, run "npm run devBundle" before running "npm run devServer".
  
run "npm install" to download necessary packages. Requires Node (obviously).  
  
Calculator executes postfix expressions, but it takes infix expressions. The conversion takes place in postfix.js and is executed in postfixEvaluation.js. The calculator is built in the DOM with React and Material-ui. The server simply serves the html document which is built from esbuild JavaScript and React.  
