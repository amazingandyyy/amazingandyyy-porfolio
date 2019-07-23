const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var d = new Date();

const VENDER_LIBS = [
  "react",
  "react-dom",
  "react-router"
]

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDER_LIBS
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].[chunkhash].js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }, {
        test: /\.(woff|ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file-loader?emitFile=false'
      }, {
        test: /\.csv$/,
        loader: 'dsv-loader'
      }, {
        test: /\.less$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'less-loader'
        ]
      }, {
        test: /\.mp4$/,
        loader: 'url?limit=10000&mimetype=video/mp4'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.LAST_UPDATE': JSON.stringify(d.getTime()),
      "global.GENTLY": false
    }),
    new MiniCssExtractPlugin({
      // https://github.com/webpack-contrib/mini-css-extract-plugin
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
  ],
  node: {
    __dirname: true
  },
  devServer: {
    port: 8008
  }
};
