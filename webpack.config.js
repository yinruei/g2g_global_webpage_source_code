
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CompressionPlugin = require("compression-webpack-plugin");
// Pre load可以讓js有讀到時才下載到client端 (但會切成很多份)
//const PreloadWebpackPlugin = require("preload-webpack-plugin");
// Vuetify Loader可以只讀有載入的Component
//const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');


/**
 * Options to clean dist folder
 */
const pathsToClean = [
  'dist'
];
const cleanOptions = {
  root: path.resolve(__dirname),
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = {
  entry: {
    script: './src/js/script.js'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: 'dist/',
      chunkFilename:'[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [new TerserPlugin()],
  },
  devServer: { // Configuration for webpack-dev-server
    compress: true,
    port: 8089,
    hot: true,
  },
  resolve:{
    extensions:['.js', '.vue'],
    alias:{
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[ext]'
            }
          },
          'img-loader' // optional image compression remove this if img-loader binary build fails in your OS
        ],
      },
      {
        test: /\.(css|scss|less)$/,
        //use: ['vue-style-loader', 'css-loader'],  //js css都放js
        use: [MiniCssExtractPlugin.loader, "css-loader"], //js css分開放
      },
      {
          test:/\.vue$/,
          loader: 'vue-loader',
          options:{
            loaders:{}
          }
      },
      {
        test: /\.styl$/,
        loader: ['css-loader']
      },      
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }      
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'dist'),     
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),    
    new HtmlWebpackPlugin({
	    //hash: true,
      title: 'QPESUMS',
      template: path.resolve(__dirname) + '/src/index.html',
      filename: path.resolve(__dirname) + '/index.html'
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CompressionPlugin(),
    //new PreloadWebpackPlugin({
    //     rel:'preload',
    //     include:'allChunks'
    //}),
    //new VuetifyLoaderPlugin(),
  ],
}
