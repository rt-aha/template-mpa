const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css' // css檔案名字 + 8位元hash
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({})
  ],
  devServer: {
    // contentBase: "./dist",//本地服务器所加载的页面所在的目录
    hot: true, // 熱重載
    inline: true,
    port: 7000, // port
    // compress: false, // 是否執行壓縮
    open: false // 是否自動開啟網頁
  },
  // 生產環境不用source-map, 即使有source-map 也有準確度問題, eval-source-map準確度最高，但打包速度稍慢一些
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : false,
  mode: 'development', // 環境
  // 監聽參數設定
  watch: process.env.NODE_ENV !== 'production' ? false : true, // 是否監聽 // 開發才需要監聽
  watchOptions: {
    ignored: /node_modules/
  }
};
