// https://www.jianshu.com/p/4d254c191726

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // 在index.js中引入 .html，使hot reload生效
      // 參考: https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/html-reload
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // css檔案名字 + 8位元hash
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    // host: 'localhost',
    // port: 6000, // port
    hot: true, // 熱重載
    // inline: true,
    // compress: false, // 是否執行壓縮, 預設default
    // open: false, // 是否自動開啟網頁
  },
  // // 生產環境不用source-map, 即使有source-map 也有準確度問題, eval-source-map準確度最高，但打包速度稍慢一些
  // devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  // mode: 'development', // 環境
  // // 監聽參數設定
  // watch: process.env.NODE_ENV !== 'production' ? false : true, // 是否監聽 // 開發才需要監聽
  // watchOptions: {
  //   ignored: /node_modules/,
  // },
};
