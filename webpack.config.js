// https://www.jianshu.com/p/4d254c191726

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // 在index.js中引入 .html，使hot reload生效
      // 參考: https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/html-reload
      {
        test: /\.html$/,
 
            loader: 'html-loader',
            options: {
              attributes: true
            }
        
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          // 'style-loader', // creates style nodes from JS strings，用js以string方式引入
          MiniCssExtractPlugin.loader, // 生成 <style> 節點，另外引入
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          // publicPath: './images',
          outputPath: './assets'
        }
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template/','index.html'),
      
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    // host: 'localhost',
    port: 7010, // port
    hot: true, // 熱重載
    // inline: true,
    // compress: false, // 是否執行壓縮, 預設default
    open: false, // 是否自動開啟網頁
  },
};
