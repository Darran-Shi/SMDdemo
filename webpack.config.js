const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
path = require('path')
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: true
});
var isPro = process.env.NODE_ENV === 'pro' ? true : false

module.exports = {
  entry:  __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    publicPath: isPro ? './public/' : '',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "es2015"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: isPro
            }
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              minimize: isPro
            }
          }, {
            loader: "css-loader",
            options: {
              minimize: isPro
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html",
      filename: isPro ? __dirname + '/index.html' : 'index.html'
    }),
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
