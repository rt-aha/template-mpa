const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              reloadAll: true,
            },
          },
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve('dist'), //本地服务器所加载的页面所在的目录
    port: 7010, // port
    hot: true, // 熱重載，僅更新不一樣的部分
    open: false, // 是否自動開啟網頁
  },
};

module.exports = merge(common, devConfig);
