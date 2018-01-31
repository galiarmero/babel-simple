var babel = require("babel-core");

var options = {
    filename: "babel-errors.log"
}

/**
 * Transform file asynchronously
 */
var file = "src/source_code.js";
console.log("Transforming " + file + " asynchronously");
babel.transformFile(file, options, function(err, result) {
    if (!err) {
        console.log(result.code);
    } else {
        console.log(err);
    }
});

