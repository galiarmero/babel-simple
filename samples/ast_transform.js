var babel = require("babel-core");
var babylon = require("babylon");

var options = {
    filename: "babel-errors.log"
}

var PRETTY = process.argv[2];

function formatIfPretty(obj) {
    return PRETTY ? JSON.stringify(obj, null, '  ') : obj;
}

/**
 * Parse code using Babylon to generate AST then transform the AST through Babel.
 */
const code = "const hello = `Hello, ${name}!`;"
const ast = babylon.parse(code, { allowReturnOutsideFunction: true });
const result = babel.transformFromAst(ast, code, options);

console.log(`The source code is: ${code}`);
console.log(`The parsed AST is: ${formatIfPretty(ast)}`);
console.log(`The transpiled code is: ${result.code}`);
console.log(`The map returned by transformer is: ${result.map}`);
console.log(`The ast returned by transformer is: ${formatIfPretty(result.ast)}`);