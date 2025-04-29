const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "Copiladores","src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "Copiladores", "dist")
    },
    mode: "development"
}