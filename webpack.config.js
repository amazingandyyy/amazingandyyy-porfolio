var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
        loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader!sass-loader"})
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
    new webpack
      .optimize
      .CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
    new HtmlWebpackPlugin({template: 'src/index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.LAST_UPDATE': JSON.stringify(d.getTime()),
      "global.GENTLY": false
    }),
    new ExtractTextPlugin({
      filename: 'style.[hash].css'
    })
  ],
  node: {
    __dirname: true
  },
  devServer: {
    port: 8008
  }
};
