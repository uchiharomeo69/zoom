const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/mainsrc.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname + "/public"),
  },
  // phai npm install -D process  deo hieu tai sao
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
