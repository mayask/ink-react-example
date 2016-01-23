var path = require('path');

module.exports = {
  entry: ["./js/app.jsx"],
  output: {
    path: "public/js",
    publicPath: "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?|\.js$/,
        exclude: /(node_modules)/,
        loader: "babel",
        // query: {
        //   optional: ["es7.classProperties"]
        // }
      },
      // {
      //   test: /\.scss$/,
      //   loader: "style!css!sass"
      // }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  }
};
