const path = require("path")
const HTMLWebpackPluguin = require("html-webpack-plugin")
module.exports = {
    entry: path.resolve(__dirname, "Copiladores","src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "Copiladores", "dist")
    },
    mode: "development",
    plugins: [new HTMLWebpackPluguin()],
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            exclude: "./node_modules"
        }]
    }
}