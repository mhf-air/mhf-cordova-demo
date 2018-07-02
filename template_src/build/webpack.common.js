const path = require("path")

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/app.js"],
  },
  output: {
    path: path.resolve(__dirname, "../www/js"),
    filename: "[name].js",
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: path.resolve(__dirname, "../node_modules"),
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },

  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
