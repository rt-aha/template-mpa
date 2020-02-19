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
    })
  ],
  devServer: {
    hot: true, // 熱重載
    port: 7777, // port
    compress: true, // 執行壓縮
    open: true // 是否自動開啟網頁
  },
  devtool: 'source-tool',
  mode: 'development', // 環境
  // 監聽參數設定
  watch: true, // 是否監聽
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300
  }
};
