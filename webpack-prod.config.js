const devConfig = require("./webpack-dev.config.js");


// Override the env
process.env["NODE_ENV"] = "production";
process.env["BABEL_ENV"] = "production";

module.exports = Object.assign({}, devConfig, {
    devtool: "nosources-source-map",  // This will replace any older source map
    mode: "production"
});