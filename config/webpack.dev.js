const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

// import merge from 'webpack-merge';

const devConfig = {
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    port: 7010, // port
    hot: true, // 熱重載，僅更新不一樣的部分
    open: false, // 是否自動開啟網頁
  },
};

module.exports = merge(common, devConfig);
