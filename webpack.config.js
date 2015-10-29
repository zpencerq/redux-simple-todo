var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: [
    'webpack-hot-middleware/client',
    './app.js',
    './index.html',
  ],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  }
};
