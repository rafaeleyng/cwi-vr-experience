const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const argv = require('yargs').argv

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new CopyWebpackPlugin([
    { from: 'src/assets', to: 'assets' },
  ]),
]

if (argv.webpack_env === 'prod') {
  plugins.push(new webpack.optimize.DedupePlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin())
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }))
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: './app.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },
  plugins,
}
