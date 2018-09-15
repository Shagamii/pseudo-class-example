module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },
  target: "node",
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
