var babel = require("babel-core");

var options = {
    filename: "babel-errors.log"
}

babel.transformFile("src/index.js", options, function(err, result) {
    if (!err) {
        console.log(result.code);
    }
});