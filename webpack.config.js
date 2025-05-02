const path = require("path");
const HTMLWebpackPluguin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "Copiladores", "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "Copiladores", "dist"),
  },
  mode: "development",
  devServer: {
    static: {
        directory: path.join(__dirname, "dist", "index.html"),
    },
    port: 3000,
    open: true,
  },
  plugins: [new HTMLWebpackPluguin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
      {
        test: /\.js$/i,
        exclude: "/node_modules",
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
    ],
  },
};
