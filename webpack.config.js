const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.js",
  // externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
